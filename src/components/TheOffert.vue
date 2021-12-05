<template>
<div id="offert" class="bgColor">
    <div class="text-center">
            <h2 id="offert" class="text-light py-3 offert">Nasza Oferta</h2>
            <ul class="row px-3 mx-auto" v-for="(group, i) in itemsGroup" :key="(group, i)">
        <li class="col list-group-item" v-for="item in items.slice(i * itemsPerRow, (i + 1) * itemsPerRow)" :key="item">
            {{ item.offertText }}
        </li>
    </ul>
    </div>

</div>
</template>

<script>

export default {
    name: 'TheOffert',
    data() {
        return {
    itemsPerRow: 3,
    items: [
          {
            offertText: 'Profilaktyka'
          },
          {
            offertText: 'Leczenie'
          },
          {
            offertText: 'Chirurgia'
          },
          {
            offertText: 'Diagnostyka laboratoryjna'
          },
          {
            offertText: 'USG - doppler color'
          },
          {
            offertText: 'Ultradźwięki'
          },
          {
            offertText: 'Echo serca'
          },
          {
            offertText: 'Strzyżenie'
          },
          {
            offertText: 'Implantacja mikroczipów'
          },
          {
            offertText: 'Paszporty'
          },
          {
            offertText: 'Konsultacje'
          },
          {
            offertText: 'Dietetyka'
          },
          {
            offertText: 'Stomatologia'
          },
          {
            offertText: 'Prowadzenie i kontrola ciąży'
          }, 
          {
            offertText: 'Okulistyka, Dermatologia'
          },
          {
            offertText: 'Dermatologia'
          },
          {
            offertText: 'Badania laboratoryjne (krew, mocz, zeskrobiny, wymazy)'
          },
          {
            offertText: 'Wizyty domowe (w niektórych przypadkach)'
          },
          {
            offertText: 'Odżywki'
          },
          {
            offertText: 'Preparaty'
          },
          {
            offertText: 'Karmy'
          },
          {
            offertText: 'Diety lecznicze'
          },
          {
            offertText: 'Akcesoria'
          },
          {
            offertText: 'Zabawki, Gryzaki'
          },
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
.list-group-item {
    background: rgb(27, 27, 27);
    color: white;
    border: none;
}

.offert {
    border-top: 1px solid rgb(15, 15, 15);
    border-bottom: 1px solid rgb(15, 15, 15);
    margin-bottom: 40px;
    
}
p {
  font-size: 22px;
}


</style>