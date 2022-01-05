<script setup>
import {
  createUser,
  initGoogle,
  loginUser,
  initAuto,
} from "../firebase/operators";
import { reactive, onMounted } from "vue";
//Algunas Configuraciones
const config = reactive({
  registrar: false,
  typePass1: "Password",
  typePass2: "Password",
  pass2: false,
});
//Data de Usuarios
const user = reactive({
  name: "",
  email: "",
  pass1: "",
  pass2: "",
  check: JSON.parse(localStorage.getItem("user") ?? "false"),
});

//Consulta a LocalStorage
onMounted(() => {
  initAuto();
  localStorage.getItem("user")
    ? (user.check = JSON.parse(localStorage.getItem("user") ?? "false"))
    : save(user.check);
});
//Guardar en LocalStorage
const save = (value) => localStorage.setItem("user", value);

//Observar cambios del LocalStorage
// watchEffect(() => save(user.check));

const validar = async (op) => {
  if (op === 0) {
    if (validarCampos()) {
      //REGISTRAR
      config.pass2 = true;
      config.registrar = true;
      return;
    } else {
      (function () {
        "use strict";
        var forms = document.querySelectorAll(".needs-validation");
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      })();
    }
    return;
  } else if (op === 1) {
    //LOGIN
    if (validarCampos()) {
      return login();
    } else {
      var forms = document.querySelectorAll(".login-needs-validation");
      (function () {
        "use strict";
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach((form) => {
          form.addEventListener(
            "submit",
            (e) => {
              if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      })();
    }
  }
};
const validarCampos = () =>
  (user.email != "" && user.pass1 != "") || user.name != "" ? true : false;

//Password is incorrect
const validarPass = () =>
  user.pass1 === user.pass2 ? create() : alert("Claves no coinciden");

const create = async () => await createUser({ ...user }); //Create new user

const login = async () => await loginUser({ ...user }); //Login user

const atras = () => {
  user.pass2 = "";
  config.pass2 = false;
};
</script>
<template>
  <div class="container d-flex text-center mt-5" style="width: 70vw">
    <div class="card card-body shadow">
      <button class="btn btn-white" @click="initGoogle">
        <span style="font-size: 16px; color: rgb(95, 184, 157)">
          <i class="fab fa-google"></i>
          Inicia con Google
        </span>
      </button>

      <!-- LOGIN user -->
      <div class="form-signin">
        <form
          @submit.prevent="validar(1)"
          class="login-needs-validation"
          novalidate
        >
          <div class="mx-4">
            <input
              type="email"
              placeholder="eMail"
              v-model.trim="user.email"
              class="form-control"
              aria-describedby="email"
              id="LoginEmail"
              required
            />
          </div>
          <!-- Pass -->
          <div class="mx-4">
            <input
              placeholder="Password"
              :type="config.typePass1"
              v-model.trim="user.pass1"
              class="form-control"
              id="LoginPass1"
              required
            />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn mx-2 btn-primary">Entrar</button>
            <div id="signIn" class="form-text d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-light mx-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- REGISTRAR user -->
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
              <h5 class="modal-title" id="staticBackdropLabel">Registar</h5>
              <button
                type="button"
                id="btn-close"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <!--  FORMULARIO REGISTRO -->
            <div class="modal-body">
              <form
                v-if="!config.pass2"
                class="needs-validation"
                @submit.prevent=""
                novalidate
              >
                <div class="m-4">
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="username">@</span>
                    <input
                      placeholder="Username"
                      type="text"
                      class="form-control"
                      id="validationUsername"
                      aria-describedby="username"
                      v-model.trim="user.name"
                      required
                    />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <!-- EMAIL -->
                <div class="m-4">
                  <input
                    type="email"
                    placeholder="eMail"
                    v-model.trim="user.email"
                    class="form-control"
                    aria-describedby="email"
                    id="Email"
                    required
                  />
                </div>
                <!-- Pass -->
                <div class="m-4">
                  <input
                    placeholder="Password"
                    :type="config.typePass1"
                    v-model.trim="user.pass1"
                    class="form-control"
                    id="Pass1"
                    required
                  />
                </div>
                <!-- CHECKS -->
                <div class="m-4 d-flex justify-content-center">
                  <button
                    class=""
                    @mouseenter="config.typePass1 = 'text'"
                    @mouseout="config.typePass1 = 'password'"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 64 64"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xml:space="preserve"
                      xmlns:serif="http://www.serif.com/"
                      style="
                        fill-rule: evenodd;
                        clip-rule: evenodd;
                        stroke-linejoin: round;
                        stroke-miterlimit: 2;
                      "
                    >
                      <rect
                        id="Icons"
                        x="-896"
                        y="-256"
                        width="1280"
                        height="800"
                        style="fill: none"
                      />
                      <g id="Icons1" serif:id="Icons">
                        <g id="Strike"></g>
                        <g id="H1"></g>
                        <g id="H2"></g>
                        <g id="H3"></g>
                        <g id="list-ul"></g>
                        <g id="hamburger-1"></g>
                        <g id="hamburger-2"></g>
                        <g id="list-ol"></g>
                        <g id="list-task"></g>
                        <g id="trash"></g>
                        <g id="vertical-menu"></g>
                        <g id="horizontal-menu"></g>
                        <g id="sidebar-2"></g>
                        <g id="Pen"></g>
                        <g id="Pen1" serif:id="Pen"></g>
                        <g id="clock"></g>
                        <g id="external-link"></g>
                        <g id="hr"></g>
                        <g id="info"></g>
                        <g id="warning"></g>
                        <g id="plus-circle"></g>
                        <g id="minus-circle"></g>
                        <g id="vue"></g>
                        <g id="cog"></g>
                        <g id="logo"></g>
                        <g id="eye-slash"></g>
                        <g id="eye">
                          <path
                            d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z"
                          />
                          <path
                            d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z"
                          />
                        </g>
                        <g id="toggle-off"></g>
                        <g id="shredder"></g>
                        <g
                          id="spinner--loading--dots-"
                          serif:id="spinner [loading, dots]"
                        ></g>
                      </g>
                    </svg>
                  </button>
                  <input
                    type="checkbox"
                    class="form-check-input mx-2"
                    id="Check1"
                    v-model="user.check"
                  />
                  <label class="form-check-label" for="Check1"
                    >Mantener activo</label
                  >
                </div>
                <!-- BOTONES -->
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    class="btn btn-white"
                    @click="validar(0)"
                  >
                    Siguiente
                  </button>
                </div>
              </form>

              <!-- FORMULARIO Repetir Clave -->
              <form v-else>
                <div class="m-4">
                  <input
                    id="input-pass2"
                    :type="config.typePass2"
                    class="form-control"
                    placeholder="Repetir Password"
                    v-model.trim="user.pass2"
                    required
                  />
                </div>
                <div class="m-4 d-flex justify-content-center">
                  <span
                    class="badge bg-info text-dark"
                    @mouseenter="config.typePass2 = 'text'"
                    @mouseout="config.typePass2 = 'password'"
                  >
                    Ver</span
                  >
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-white" @click="atras">
                    atras
                  </button>
                  <button
                    type="button"
                    class="btn btn-white"
                    @click="validarPass"
                  >
                    Terminar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
