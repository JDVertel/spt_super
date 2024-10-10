
<template>
  <div class="container-fluid">
    <div class="card-body mt-3">

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        @click="nuevo()">
        + Nuevo
      </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Gestion de CUM</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <formclientes ref="form" :Htipo="Ptipo" :idcliente="IDcliente" />
            </div>
            <div class="modal-footer">

              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button v-if="Ptipo == 'new'" type="button" class="btn btn-primary btn-sm"
                @click="guardacliente()">Guardar</button>
              <button type="button" v-if="Ptipo == 'upd'" class="btn btn-success btn-sm"
                @click="actualizacliente()">Actualizar</button>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-4"> CUM </h4>
      <div class="table-responsive">
        <table class="table table-hover table-sm ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Nivel</th>
              <th>Nit</th>
              <th>Vigencia</th>
              <th>Estado</th>
              <th class="text-center" style="width: 100px">Acciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(datatabla, index) in tabla" :key="index">
              <td>{{ datatabla.id }}</td>
              <td>{{ datatabla.nombre }}</td>
              <td>{{ datatabla.ciudad }}</td>
              <td>{{ datatabla.nivel }}</td>
              <td>{{ datatabla.nit }}</td>
              <td>{{ datatabla.vigencia }}</td>
              <td>{{ datatabla.estado }}</td>

              <td>
                <div class=" d-flex justify-content-center">
                  <button class="btn btn_options btn-sm btn-info" title="ver info" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop" @click="verInfo(datatabla)">
                    X
                  </button>
                  <button class="btn btn_options btn-sm btn-success" title="inactivar"
                    v-if="datatabla.estado == 'activo'">
                    X
                  </button>
                  <button class="btn btn_options btn-sm btn-danger" title="reactivar"
                    v-else-if="datatabla.estado == 'vencido'">
                    X
                  </button>
                  <button class="btn btn_options btn-sm btn-warning" title="Activar"
                    v-else-if="datatabla.estado == 'inactivo'">
                    X
                  </button>
                  <button class="btn btn_options2 btn-sm btn-light" title="Editar" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop" @click="editar(datatabla)">
                    <i class="bi bi-pencil"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="small">los estados "activo" e "inactivo" son de manejo manual (cambiando entre ellos),
          el estado
          vencido se activa mediante validacion de fecha y se reactiva mediante la asignacion de una
          nueva fecha de
          vigencia ( modal)
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import {
  ipsclientes
} from "../../bd/bd.js";
import formclientes from '../../components/Sections/cum/formcum.vue';

export default {
  components: {
    formclientes
  },

  data() {
    return {
      tabla: ipsclientes,
      Ptipo: 'vacio',
      IDcliente: [],
    };

  },
  methods: {
    editar(data) {
      this.Ptipo = "upd";
      this.IDcliente = data;
      console.log("ejecutando ");

    },
    nuevo() {
      this.Ptipo = "new";
      this.IDcliente = [];
    },

    verInfo(data) {
      this.Ptipo = "info";
      this.IDcliente = data;
    },
    guardacliente() {
      this.$refs.form.guardarnuevo()
    },
    actualizacliente() {
      console.log("actualziacon")
      this.$refs.form.editardatos()
    }

  }
};
</script>

<style></style>
