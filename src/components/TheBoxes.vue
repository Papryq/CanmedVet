<template>
    <div class="container">
        <div class="row mx-auto">
            <div class="col-xl-3 col-sm-12" v-for="column in columns" :column="column" :key="column">
                <img :src="column.icon" alt="">
                <p class="text-dark lead">{{ column.text }}</p>
            </div>
        </div>
        <div class="bgClass"></div>
    </div>
</template>

<script>
export default {
    name: 'TheBoxes',
    data() {
        return {
            columns: [
                {
                    id: 1,
                    text: 'Leczymy zwierzęta od 1995 roku...',
                    icon: require('@/assets/veterinarian.png')
                },
                {
                    id: 2,
                    text: 'Specjalizujemy sie w leczeniu małych zwierząt',
                    icon: require('@/assets/dog.png'),
                },
                {
                    id: 3,
                    text: 'Ciągle doskonalimy metody diagnostyczne i operacyjne',
                    icon: require('@/assets/stethoscope.png')
                },
                {
                    id: 4,
                    text: 'Doradzamy w kwestii żywienia i behawiorystyki',
                    icon: require('@/assets/veterinary.png')
                },
            ]
        }
    }
}
</script>

<style scoped>
img {
    padding: 15px;
    margin-left: 70px;
}

.row {
    width: 80%;
    color: black;
    background: white;
    border-radius: 20px;
    margin-top: 7em;
    -webkit-box-shadow: 0px 1px 12px -3px rgba(36, 36, 43, 1);
    -moz-box-shadow: 0px 1px 12px -3px rgba(36, 36, 43, 1);
    box-shadow: 0px 1px 12px -3px rgba(36, 36, 43, 1);
    align-items: center;
}


.col-xl-3 {
    border-right: 1px solid #333;
}

.bgClass {
    height: 80px;
}
p {
    text-align: center;
}


</style>