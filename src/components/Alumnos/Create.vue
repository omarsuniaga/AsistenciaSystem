<script setup>
import { ref } from "@vue/reactivity";
import { setAlumnos } from "../../firebase/operators";
const Alumno = ref({
  id: "",
  nombre: "",
  apellido: "",
  nacimiento: "",
  edad: "",
  data_registro: "",
  padre: "",
  telefono_padre: "",
  madre: "",
  telefono_madre: "",
  representante: "",
  grupo: "",
  estado: false,
});

const registrarAlumno = () => {
  var Data = {};
  Data = {
    nombre: Alumno.value.nombre,
    apellido: Alumno.value.apellido,
    nacimiento: Alumno.value.nacimiento,
    edad: Alumno.value.edad,
    padre: Alumno.value.padre,
    telefono_padre: Alumno.value.telefono_padre,
    madre: Alumno.value.madre,
    telefono_madre: Alumno.value.telefono_madre,
    representante: Alumno.value.representante,
    grupo: Alumno.value.grupo,
    estado: Alumno.value.estado,
  };
  return setAlumnos(Data);
};
</script>
<template>
  <div class="d-flex justify-content-center">
    <button
      class="btn btn-outline-info me-md-2 btn-sm m-3"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      +Alumnos
    </button>
  </div>
  <div class="container">
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Registrar Alumno
            </h5>
            <button
              type="button"
              id="btn-close"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3" @submit.prevent="registrarAlumno()">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="Nombre"
                  v-model="Alumno.nombre"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellido"
                  aria-label="Apellido"
                  v-model="Alumno.apellido"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="datetime-local"
                  placeholder="Fecha de nacimiento"
                  aria-label="Fecha de nacimiento"
                  v-model="Alumno.nacimiento"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="number"
                  placeholder="Edad"
                  aria-label="edad"
                  v-model="Alumno.edad"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Padre"
                  aria-label="Padre"
                  v-model="Alumno.padre"
                /><input
                  class="form-control"
                  type="text"
                  placeholder="Tel. Padre"
                  aria-label="Tel. Padre"
                  v-model="Alumno.telefono_padre"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Madre"
                  aria-label="Madre"
                  v-model="Alumno.madre"
                /><input
                  class="form-control"
                  type="text"
                  placeholder="Tel. Madre"
                  aria-label="Tel. Madre"
                  v-model="Alumno.telefono_madre"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Representante"
                  aria-label="rerpresentante"
                  v-model="Alumno.representante"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text">Grupo</span>
                <select class="form-select" id="dia" v-model="Alumno.grupo">
                  <option selected>Selecciona el grupo</option>
                  <option value="Inicial">Inicial</option>
                  <option value="Infantil">Infantil</option>
                  <option value="Juvenil">Juvenil</option>
                </select>
              </div>
              <div class="col-auto">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    v-model="Alumno.estado"
                  />
                  <label for="checkbox"
                    >Estado del Alumno: Activo/Inactivo</label
                  >
                </div>
              </div>
              <button class="btn btn-success" type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
