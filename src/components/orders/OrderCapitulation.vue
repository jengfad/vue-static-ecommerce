<template>
    <div class="col-lg-8 px-0 bg-white border d-inline-block">
        <div v-for="painting of paintings" :key="painting.id" class="d-flex flex-row p-2 order-item border-bottom align-items-center">
            <div class="mr-2">
                <img width="50" :src="painting.images.primary.url" alt>
            </div>
            <div class="w-100 d-flex justify-content-between">
                <strong class="mr-2 text-left col-6 px-0">{{ painting.name }}</strong>
                <span class="mr-2">${{ painting.price }}</span>
                <span class="mr-2">{{ painting.quantity }}x</span>
                <a role="button" @click="removeItemFromCart(painting.id)">
                    <i class="fas fa-times-circle"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderCapitulation',
    computed: {
        paintings() {
            return this.$store.state.cart.items;
        }
    },
    methods: {
        removeItemFromCart(itemId) {
            // eslint-disable-next-line no-undef
            apicart.cart.manager.removeItem(itemId);
        }
    },
}
</script>