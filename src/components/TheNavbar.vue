<template>
  <div class="navbar text-light">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logotlo.png" class="" alt="">
    </router-link>
  <NavbarList />
  <div class="d-md-flex d-none">
  <span class="material-icons mx-2">
{{ icon }}
</span>
<p>56-652-07-44</p>
</div>
  </div>


</template>

<script>
import NavbarList from '@/components/NavbarList.vue'

export default {
    name: 'TheNavbar',
    components: {
        NavbarList
    },
    data() {
      return {
        icon: 'local_phone',
      }
    }
}
</script>

<style scoped>
p {
  margin-right: 20px;
}


</style>