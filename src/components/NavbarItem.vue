<template>
  <div class="navbar-item">
    <b-navbar toggleable="md" type="dark" variant="dark" style="padding: 0 0 .1rem .5rem;">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/" class="text-warning">{{ appName }}</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="//caycehouse.com" target="_blank">
            <span class="text-white">Crafted by</span>
            <span class="text-warning">Cayce House</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar-item',
  data() {
    return {
      appName: process.env.APP_NAME,
    };
  },
};
</script>

<style>
.navbar-dark {
  background-color: #592a8a !important;
}
</style>
