<template>
    <div id="add-to-cart-form-view">
        <div class="input-group mb-3 col-md-6 p-0 mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Quantity</span>
            </div>
            <input type="number" v-model="quantity" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div>
            <a role="button" class="btn btn-lg btn-dark d-block" @click="addPaintingToCart">Add To Cart</a>
        </div>
        <AddToCartPopup :data="data" />
    </div>
</template>

<script>
import paintings from '../../data/static';
import AddToCartPopup from './AddToCartPopup';

export default {
    name: 'AddToCartForm',
    components: { AddToCartPopup },
    data: function() {
        return {
            quantity: 1,
            data: null
        }
    },
    computed: {
        selectedPainting() {
            return paintings[this.$store.state.paintings.selectedPainting];
        }
    },
    methods: {
        addPaintingToCart() {
            const self = this;
            // eslint-disable-next-line no-undef
            apicart.cart.manager.addItem(this.selectedPainting.productUrl, this.quantity, function (itemData) {
                self.data = {
                    showModal: true,
                    itemImage: itemData.dataUrl,
                    itemName: itemData.name
                };
                self.quantity = 1;
            });
        }
    },
}
</script>