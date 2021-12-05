<template>
    <TheHero />
    <FirstSection />
    <TheOffert />
    <SecondSection />
    <TheFooter />

</template>

<script>
// @ is an alias to /src
import TheHero from '@/components/TheHero.vue'
import FirstSection from '@/components/FirstSection.vue'
import TheOffert from '@/components/TheOffert.vue'
import SecondSection from '@/components/SecondSection.vue'



export default {
  name: 'Home',
  components: {
    TheHero,
    FirstSection,
    TheOffert,
    SecondSection
  },
}
</script>

<style>
body
{
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 20px;
background: rgb(27, 27, 27);
max-width: 100%;
margin: 0px;
padding: 0px;
overflow-x: hidden;
overflow-y: auto;
}

</style>


