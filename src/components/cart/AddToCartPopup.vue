<template>
    <div>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Cart Updated</h3>
            <div slot="body">
                <p>
                    Item <strong>{{ itemName}}</strong> was successfully added into the cart.
                </p>
                <img :src="itemImage" class="mw-100" alt>
            </div>
            <div slot="footer" class="w-100 justify-content-between d-flex">
                <button class="btn btn-lg btn-outline-dark" @click="showModal = false">
                    <i class="fas fa-chevron-circle-left align-middle"></i> <span class="align-middle">Continue shopping</span>
                </button>
                <button class="btn btn-lg btn-danger" @click="showOrderRecapitulation">
                    <span class="align-middle">Finish order</span> <i class="fas fa-chevron-circle-right align-middle"></i>
                </button>
            </div>
        </modal>
    </div>
</template>

<script>
import showCardBack from '../../shared/functions' 
export default {
    name: 'AddToCartPopup',
    data: function() {
        return {
            showModal: false,
            itemName: '',
            itemImage: ''
        }
    },
    methods: {
        showOrderRecapitulation() {
            this.showModal = false;
            showCardBack();
        }
    }
}
</script>