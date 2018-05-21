<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
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
                            {{ stock.code }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Unit:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.unit}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Name:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.name}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Code:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.fundCode }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            VAT Code:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.vatCode }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Narrative:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.narrative }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Harbour:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.harbour }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-1">
                            Category:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.category }}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-1">
                            Price:
                        </div>
                        <div class="col-xs-4">
                            {{ stock.price }}
                        </div>
                    </div>
                </div>

            </div>
            <div class="panel-footer">
                    <!--<router-link :to="'/portfolio/' + stock.id"-->
                        <!--activeClass="active"><a>Edit Item</a></router-link>-->
                <router-link :to="{ name: 'harbourItemEdit', params: { id: stock.id } }"
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
            ['stock'],
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
                const newPrice = this.stock.price += parseFloat(this.quantity);
                this.stock.price = parseFloat(newPrice.toFixed(2));
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