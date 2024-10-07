<template>
  <div :class="['offcanvas', { show: isMenuOpen }]" @click="closeMenu">
    <div class="offcanvas-content" @click.stop>
      <div class="logo-container">
        <img src="/logo.png" alt="Logo" class="logo" />
        <span class="logo-text">SUPERUSUARIO</span>
      </div>

      <div class="menu-scroll-container">
        <ul class="menu-items">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            :style="{ '--item-index': index }"
          >
            <router-link
              v-if="!item.action"
              :to="item.route"
              custom
              v-slot="{ navigate }"
            >
              <button
                @click="selectComponent(item.component, navigate)"
                class="menu-item-btn"
              >
                <i :class="item.icon"></i>
                <span>{{ item.text }}</span>
              </button>
            </router-link>
            <button
              v-else
              @click="handleItemClick(item)"
              class="menu-item-btn"
            >
              <i :class="item.icon"></i>
              <span>{{ item.text }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
import { menuItems } from "../bd/bd.js";

export default {
  name: "AppMenu",
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuItems: menuItems,
    };
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
    selectComponent(componentName, navigate) {
      this.$emit("select-component", componentName);
      navigate();
      if (window.innerWidth <= 5000) {
        this.closeMenu();
      }
    },
    handleItemClick(item) {
      if (item.action === "openLoginModal") {
        const loginModal = new bootstrap.Modal(
          document.getElementById("login")
        );
        loginModal.show();
      }
      this.closeMenu();
    },
  },
};
</script>