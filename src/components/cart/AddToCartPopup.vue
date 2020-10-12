<template>
    <div>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Cart Updated</h3>
            <div slot="body">
                <p style="color: black">
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
import toggleDisplayMixin from '../../shared/toggle-display-mixin';
import Modal from '../../shared/Modal';
export default {
    name: 'AddToCartPopup',
    mixins: [toggleDisplayMixin],
    components: { Modal },
    data() {
        return {
            showModal: false,
            itemName: '',
            itemImage: ''
        }
    },
    props: ['data'],
    watch: {
        data: function(newVal) {
            if (!newVal) return;
            this.showModal = newVal.showModal;
            this.itemName = newVal.itemName;
            this.itemImage = newVal.itemName;
        }
    },
    methods: {
        showOrderRecapitulation() {
            this.showModal = false;
            this.showCardBack();
        }
    }
}
</script>