<template>
    <select class="custom-select mr-sm-2" id="shipping-methods" data-apicart-cart-add-parameter="shippingMethod.id">
        <option disabled selected>---</option>
        <option v-for="shippingMethod of shippingMethods" :key="shippingMethod.all.id" :value="shippingMethod.all.id">
            {{ shippingMethod.all.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: 'ShippingMethodsSelectbox',
    props: ['shippingMethods']
}
</script>