<script setup>
import { createUser } from "../firebase/operators";
import { reactive } from "vue";

const user = reactive({
  name: "",
  email: "",
  pass1: "",
  check: "true",
});

const onSubmit = async () => {
  await createUser({ ...user });
  user.name = "";
  user.email = "";
  user.pass1 = "";
  user.check = "false";
};
</script>
<template class="container">
  <div class="card card-body p-3 m-4 shadow">
    <form @submit.prevent="onSubmit">
      <div class="m-4">
        <input
          type="text"
          placeholder="Nombre"
          v-model="user.name"
          class="form-control"
          id="InputName"
        />
      </div>
      <div class="m-4">
        <input
          type="email"
          placeholder="eMail"
          v-model="user.email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="m-4">
        <input
          placeholder="Password"
          type="password"
          v-model="user.pass1"
          class="form-control"
          id="InputPassword1"
        />
      </div>
      <div class="m-4">
        <label class="form-check-label" for="Check1">Recordar</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="Check1"
          v-model="user.check"
        />
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>

<style></style>
