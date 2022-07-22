<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">SBOM Service</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/sbomDashboard" class="nav-link">风险看板</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sbomPackages" class="nav-link">软件成分查询</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sbomTraceChain" class="nav-link">开源软件反向追溯链</router-link>
        </li>
      </div>
    </nav>

    <div>
      <!-- <div class="container mt-3"> -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.sbom-service {
  margin: 20px;
}
</style>
