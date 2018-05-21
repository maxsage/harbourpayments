<template>
    <div>
        <p>Hello</p>
        <p>Ok so you selected</p>{{ id }}
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        <button @click="navigateToItems" class="btn btn-primary">Done</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        },
        methods: {
            navigateToItems() {
                this.$router.push({ name: 'home'});
            }
        }
    }
</script>