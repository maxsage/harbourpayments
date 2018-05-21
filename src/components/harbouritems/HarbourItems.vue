<template>
    <div>
        <app-stock v-for="harbouritem in harbouritems" :harbouritem="harbouritem"></app-stock>
    </div>
</template>

<script>
    import HarbourItem from './HarbourItem.vue';

    export default {
        components: {
            appStock: HarbourItem
        },
        computed: {
            harbouritems() {
                return this.$store.getters.harbouritems;
            }
        }
    }
</script>