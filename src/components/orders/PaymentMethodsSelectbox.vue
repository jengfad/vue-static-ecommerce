<template>
    <select class="custom-select mr-sm-2" id="payment-methods" data-apicart-cart-add-parameter="paymentMethod.id">
        <option disabled selected>---</option>
        <option v-for="paymentMethod of paymentMethods" :key="paymentMethod.all.id" :value="paymentMethod.all.id">
            {{ paymentMethod.all.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: 'PaymentMethodsSelectbox',
    props: ['paymentMethods']
}
</script>