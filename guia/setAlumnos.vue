<script setup>
import { ref } from "@vue/reactivity";
import { setAlumnos } from "../firebase/operators";
const alumnos = ref({
  id_alumno: "",
  nombre: "",
  apellido: "",
  edad: "",
  fecha_nac: "",
  fecha_inicio: "",
  grupo: "",
  padre: "",
  madre: "",
  telefono: "",
});

const registrarAlumnos = () => {
  const Data = {
    id_alumno: Date.now().toString(),
    nombre: alumnos.value.nombre,
    apellido: alumnos.value.apellido,
    edad: alumnos.value.edad,
    fecha_nac: alumnos.value.fecha_nac,
    fecha_inicio: alumnos.value.fecha_inicio,
    grupo: alumnos.value.grupo,
    padre: alumnos.value.padre,
    madre: alumnos.value.madre,
    telefono: alumnos.value.telefono,
  };
  console.log(Data);
  return setAlumnos(Data);
};
</script>
<template>
  <div class="d-flex justify-content-between m-4">
    <button
      class="btn btn-outline-info me-md-2 btn-sm m-3"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      + ALUMNOS
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
              Registrar alumnos
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
            <form class="row g-3" @submit.prevent="registrarAlumnos()">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="titulo"
                  placeholder="Alumno"
                  v-model="alumnos.nombre"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellidos"
                  aria-label="Apellidos"
                  v-model="alumnos.apellido"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="number"
                  min="2500"
                  placeholder="edad"
                  aria-label="edad"
                  v-model="alumnos.edad"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="datetime"
                  placeholder="Fecha de Nacimiento"
                  aria-label="Fecha de Nacimiento"
                  v-model="alumnos.fecha_nac"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="datetime"
                  placeholder="Fecha de Inicio"
                  aria-label="Fecha de Inicio"
                  v-model="alumnos.fecha_inicio"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre del Padre"
                  aria-label="Nombre del Padre"
                  v-model="alumnos.padre"
                />
              </div>
              <div class="col-auto">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre del Madre"
                  aria-label="Nombre del Madre"
                  v-model="alumnos.madre"
                />
              </div>
              <div class="col-12">
                <textarea
                  class="form-control mb-3"
                  id="Telefonos"
                  rows="3"
                  placeholder="Telefonos"
                  v-model="alumnos.telefono"
                ></textarea>
              </div>
              <button class="btn btn-success" type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
