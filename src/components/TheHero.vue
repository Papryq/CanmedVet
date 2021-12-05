<template>
    <div class="hero">
        <TheNavbar />
        <HeroContent />
        <TheBoxes />
    </div>

</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import HeroContent from '@/components/HeroContent.vue'
import TheBoxes from '@/components/TheBoxes.vue'

export default {
    name: 'TheHero',
    components: {
        TheNavbar,
        HeroContent,
        TheBoxes
    },

}
</script>

<style scoped>
.hero {
  width:100%;
  background: url('~@/assets/checkout1.png');
  background-repeat: no-repeat; 
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
}


</style>
