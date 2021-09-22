<template>
    <div class="row mt-4">
        <div class="col-md-4 p-3" v-for="product in products" :key="product.id">
            <div class="card">
                <div class="card-header">
                    <img class="card-img-top" :src="product.image" />
                </div>
                <div class="card-body justify-content-center">
                    {{ product.name }} - {{ product.price }}
                </div>
                <div class="card-footer justify-content-center ">
                    <button
                        type="button"
                        class="btn btn-danger"
                        v-on:click.prevent="deleteProduct(product)"
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: {}
        };
    },
    methods: {
        getProducts() {
            axios.get("/products").then(response => {
                this.products = response.data;
            });
        },
        deleteProduct(product) {
            axios.delete("/products/" + product.id).then(response => {
                this.$toastr.s(`The product ${product.keep} was deleted.`);
                this.getProducts();
            });
        }
    },
    created() {
        this.getProducts();
    }
};
</script>
