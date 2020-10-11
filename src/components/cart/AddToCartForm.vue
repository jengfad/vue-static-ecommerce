<template>
    <div id="add-to-cart-form-view">
        <div class="input-group mb-3 col-md-6 p-0 mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Quantity</span>
            </div>
            <input type="number" v-model="quantity" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div>
            <a role="button" class="btn btn-lg btn-primary d-block" @click="addPaintingToCart">Add To Cart</a>
        </div>
    </div>
</template>

<script>
import paintings from '../../data/static';

export default {
    name: 'AddToCartForm',
    data: function() {
        return {
            quantity: 1
        }
    },
    computed: {
        selectedPainting() {
            return paintings[this.$store.state.paintings.selectedPainting];
        }
    },
    methods: {
        addPaintingToCart() {
            console.log('selectedPainting', this.selectedPainting)

            // eslint-disable-next-line no-undef
            apicart.cart.manager.addItem(this.selectedPainting.productUrl, this.quantity, function (itemData) {
                // addToCartPopupView.itemImage = this.selectedPainting.imageUrl;
                // addToCartPopupView.itemName = itemData.name;
                // addToCartPopupView.showModal = true;
                self.quantity = 1;
            });
        }
    },
}
</script>