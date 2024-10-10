<template>
    <div class="container">

        {{ idcliente }}

        <h6 v-if="Htipo =='new'">Ingrese los datos del nuevo cliente</h6>
        <h6 v-if="Htipo =='upd'">Actualice los datos del cliente</h6>
        <div class="row mt-4" v-if="Htipo == 'new' || Htipo == 'upd'">

            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id1" placeholder="Nit" v-model="idcliente.nit">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id2" placeholder="Razon Social"
                        v-model="idcliente.nombre">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id3" placeholder="Nivel" v-model="idcliente.nivel">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id4" placeholder="Correo" v-model="idcliente.correo">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id5" placeholder="Direccion" v-model="idcliente.dir">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id6" placeholder="Ciudad" v-model="idcliente.ciudad">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="id7" placeholder="Telefono" v-model="idcliente.tel">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rep Legal"
                        v-model="idcliente.replegal">
                </div>
            </div>
            <!--  -->
            <div class="col-6">
                <div class="mb-3">
                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Vigencia"
                        v-model="idcliente.vigencia">
                </div>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Estado"
                        v-model="idcliente.estado">
                </div>
            </div>
           
        </div>

    </div>
</template>

<script>
export default {
    props: {
        Htipo: {
            type: String,
            Required: true
        },
        idcliente: {
            type: Object,
            Required: true
        }
    },
    data() {
        return {
            datos: {}
        };
    },
    methods: {
        recuperadata() {

            this.datos = {
                nit: this.idcliente.nit,
                razonsocial: this.idcliente.nombre,
                nivel: this.idcliente.nivel,
                correo: this.idcliente.correo,
                direccion: this.idcliente.direccion,
                ciudad: this.idcliente.ciudad,
                tel: this.idcliente.tel,
                replegal: this.idcliente.replegal,
                vigencia:this.idcliente.vigencia,
                estado:this.idcliente.estado,
            }
        },

        guardarnuevo() {
            console.log("guardando los datos");
            this.recuperadata();
            console.log(this.datos)
        },
        editardatos() {
            console.log("editando datos");
            this.recuperadata();

            console.log(this.datos)
        }

    },
}
</script> 

<style>

</style>
