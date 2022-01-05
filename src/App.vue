<template>
  <header class="site-header fixed-bottom">
    <nav class="container d-flex justify-content-between">
      <router-link to="/" class="nav-link"
        ><i class="bx bx-home bx-sm"></i
      ></router-link>
      <router-link to="/about" class="nav-link"
        ><i class="bx bx-list-ul bx-sm"></i
      ></router-link>
      <router-link to="/dashboard" class="nav-link"
        ><i class="bx bx-tachometer bx-sm"></i
      ></router-link>
      <router-link to="/perfil" class="nav-link"
        ><i class="bx bxs-user bx-sm"></i
      ></router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
  overflow-y: none;   
}
</style>
