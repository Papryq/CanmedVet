<template>
<div class="d-flex flex-md-row justify-content-center text-align-center text-light ">
    <!-- Map -->
    <div>
        <h2 class="py-2 text-center"><img class="mx-1" src="@/assets/location.png"> Nasza placówka:</h2>
        <p class="lead">Toruń, Ulica Podgórna 13 B-C (róg ulic Podgórnej i Kołłątaja)</p>
          <GoogleMap
  api-key="YOUR_GOOGLE_MAPS_API_KEY"
  style="width: 100%; height: 300px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
    </div>
  
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    name: 'TheMap',
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 40.689247, lng: -74.044502 } 
        return { center }
    },
   

}
</script>

<style scoped>

li {
  background: rgb(27, 27, 27);
  color: white;
  border: none;
}
</style>
