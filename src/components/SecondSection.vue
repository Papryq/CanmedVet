<template>

<h2 class="d-flex justify-content-center text-white"> Jak nas znaleźć</h2>
  <div class="row">
      <div class="col-md-6 contact px-5">
          <TheContact />
      </div>
      <div class="col-md-6">
          <TheMap />
      </div>
  </div>
</template>

<script>
import TheContact from '@/components/TheContact.vue'
import TheMap from '@/components/TheMap.vue'

export default {
    name: 'SecondSection',
    components: {
        TheContact,
        TheMap
    }
}
</script>

<style scoped>
.row {
    padding-top: 3em;
    padding-bottom: 3em;
    background: rgb(27, 27, 27);
    border-top: 1px solid rgb(15, 15, 15);
}

h2 {
    border-top: 1px solid rgb(15, 15, 15);
    padding: 20px;
}


</style>