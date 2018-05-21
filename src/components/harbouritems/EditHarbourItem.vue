<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--{{ harbouritem.name }}-->
                </h3>
                <p>Hello</p>
                <p>Ok so you selected</p>{{ harbouritem.id }}
                <button @click="navigateToItems" class="btn btn-primary">Done</button>
            </div>
            <div class="panel-body">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-1">
                            Code:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.code }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Unit:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.unit }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Name:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.name}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Code:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.fundCode }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            VAT Code:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.vatCode }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Narrative:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.narrative }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Harbour:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.harbour }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Category:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.category }}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-1">
                            Price:
                        </div>
                        <div class="col-xs-4">
                            {{ harbouritem.price }}
                        </div>
                    </div>
                </div>

            </div>
            <div class="panel-footer">
                <!--<router-link :to="{ name: 'harbourItemEdit', params: { id: harbouritem.id } }"-->
                <!--activeClass="active"><a>Edit Item</a></router-link>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditHarbourItem.vue",
        computed: {
            harbouritem: this.$store.getters.harbouritems[this.$route.params.id]
        },
        methods: {
            navigateToItems() {
                this.$router.push({ name: 'home'});
            },
        },
    }
</script>

<style scoped>

</style>