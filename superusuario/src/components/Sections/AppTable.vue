<template>
  <div class="container">
    <div class="card shadow mb-3">
      <div id="card-header-formulario" class="card-header py-3">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-primary m-0 fw-bold d-flex justify-content-between">
            <span class="titulo-formulario"
              >Tabla <i class="bi bi-ui-radios"></i
            ></span>
            <span class="opciones-formulario"></span>
          </p>
          <div class="opciones-tabla">
            <!-- Aquí puedes agregar opciones adicionales como filtros o botones de acción -->
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Uno</th>
                <th>Dos</th>
                <th>Tres</th>
                <th>Cuatro</th>
                <th>Cinco</th>
                <th class="text-center" style="width: 100px">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(datatabla, index) in tabla" :key="index">
                <td>{{ datatabla.uno }}</td>
                <td>{{ datatabla.dos }}</td>
                <td>{{ datatabla.tres }}</td>
                <td>{{ datatabla.cuatro }}</td>
                <td>{{ datatabla.cinco }}</td>
                <td>
                  <div class="action-buttons d-flex justify-content-center">
                    <button
                      class="btn btn-sm btn-custom btn-icon"
                      title="Acción 1"
                    >
                      <i class="bi bi-1-circle"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-secondary btn-icon"
                      title="Acción 2"
                    >
                      <i class="bi bi-2-circle"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-custom btn-icon"
                      title="Acción 3"
                    >
                      <i class="bi bi-3-circle"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card {
  border: none;
  border-radius: 5px;
  overflow: hidden;
}

/* .card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e3e6f0;
} */

.table {
  margin-bottom: 0;
}

.table thead th {
  border-top: none;
  border-bottom: 2px solid #e3e6f0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #5a5c69;
}

.table td,
.table th {
  vertical-align: middle;
  padding: 0.75rem;
  border-top: 1px solid #e3e6f0;
}

.table-hover tbody tr:hover {
  background-color: #f8f9fc;
}

.action-buttons {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.table-responsive::-webkit-scrollbar {
  height: 2px;
}

.table-responsive::-webkit-scrollbar-track {
  background: #000000;
}

.table-responsive::-webkit-scrollbar-thumb {
  background: #5086c1;
  border-radius: 0px;
}

.table-responsive::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media (max-width: 768px) {
  .table-responsive {
    border: 0;
  }

  .table-responsive table {
    border: 1px solid #e3e6f0;
  }

  .table-responsive tbody {
    border-top: 1px solid #e3e6f0;
  }
}

/* Estilos para los botones */
.btn {
  background-color: #5086c1;
  border-color: #5086c1;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
  background-color: transparent;
  color: #5086c1;
}

.btn-custom {
  background-color: #5086c1;
  color: #fff;
  border: none;
}

.btn-custom:hover {
  background-color: transparent;
  color: #5086c1;
  border: 2px solid #5086c1;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: transparent;
  color: #6c757d;
  border: 2px solid #6c757d;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
}

.btn-icon i {
  margin-right: 0px;
}

/* Adaptaciones responsivas */
@media (max-width: 800px) {
  .btn {
    width: 100%;
    height: 50px;
  }
}
</style>

<script>
import { datatabla } from "../../bd/bd.js";

export default {
  name: "AppTable",
  data() {
    return {
      tabla: datatabla,
    };
  },
};
</script>
