<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ harbouritem.name }}
                </h3>
            </div>
            <div class="panel-body">
                            <!--<input-->
                                    <!--type="number"-->
                                    <!--class="form-control"-->
                                    <!--placeholder="Quantity"-->
                                    <!--v-model="quantity"-->
                                    <!--:class="{danger: insufficientFunds}">-->
                            <!--<button-->
                                    <!--class="btn btn-success"-->
                                    <!--@click="increasePercentage"-->
                                    <!--:disabled="insufficientQuantity || quantity <= 0">-->
                                <!--Increase</button>-->
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
                    <!--<router-link :to="'/portfolio/' + stock.id"-->
                        <!--activeClass="active"><a>Edit Item</a></router-link>-->
                <router-link :to="{ name: 'harbourItemEdit', params: { id: harbouritem.id } }"
                             activeClass="active"><a>Edit Item</a></router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props:
            ['harbouritem'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            // insufficientFunds() {
            //     return this.quantity * this.stock.price > this.funds;
            // }
        },
        methods: {
            increasePercentage() {
                const newPrice = this.harbouritem.price += parseFloat(this.quantity);
                this.harbouritem.price = parseFloat(newPrice.toFixed(2));
                // const order = {
                //     stockId: this.stock.id,
                //     stockPrice: this.stock.price,
                //     quantity: this.quantity
                // };
                // this.$store.dispatch('increasePercentage', order);
                // this.quantity = 0;
            },

        }
    }
</script>