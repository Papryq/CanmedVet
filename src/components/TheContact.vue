<template>
<div id="contact" class="bgColor">
    <div class="text-center">
        <h1 class="py-4 text-light">Kontakt</h1>
        <div class="row text-light py-4 my-2 ">
            <div class="col-md-4 border-left" v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
                <h2><span class="material-icons mx-2">{{ icon.name }}</span>{{ icon.text1 }}</h2>
                <p>{{ icon.text2 }}</p>
                <p>{{ icon.text3 }}</p>
                <p>{{ icon.text4 }}</p>
            </div>
        </div>
    </div>

</div>
</template>

<script>

export default {
    name: 'TheContact',
    data() {
        return {
    itemsPerRow: 3,
    icons: [
      {
        name: 'schedule', text1: 'Godziny Otwarcia', text2: 'Pn-Pt: 10-13 oraz 15-19', text3: 'Sb-Nd: 11-14', text4: 'W święta gabinet jest NIECZYNNY'
      },
      {
        name: 'local_phone', text1: 'Telefon: ', text2: '56-652-07-44', text3: 'lub', text4: '56-658-13-08'
      },
      {
        name: 'email', text1: 'Email: ', text2: 'canmed@wp.pl'
      }
    ],
        }
    },
  computed: {
    itemsGroup () {
      return Array.from(Array(Math.ceil(this.items.length / this.itemsPerRow)).keys())
    }
  }

}
</script>

<style scoped>
.bg-color {
    background: rgb(27, 27, 27);
    padding-bottom: 40px;
}

.d-flex {
    border-top: 1px solid black;
}
.border-left {
    border-right: 1px solid black;
}
p {
  font-size: 22px;
}


</style>