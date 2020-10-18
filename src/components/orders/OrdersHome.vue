<template>
    <div>
        <h2 class="text-center py-3">Delivery Information</h2>

        <form class="text-left col-md-6 ml-auto mr-auto mb-5">
            <div class="d-flex flex-column flex-md-row">
                <div class="col-12 col-md-6 pr-md-0 form-group">
                    <label for="payment-methods">Payment method</label>
                    <PaymentMethodsSelectbox :paymentMethods="paymentMethods"></PaymentMethodsSelectbox>
                </div>

                <div class="col-12 col-md-6 pr-md-0 form-group">
                    <label for="shipping-methods">Delivery method</label>
                    <ShippingMethodsSelectbox :shippingMethods="shippingMethods"></ShippingMethodsSelectbox>
                </div>
            </div>

            <div class="form-group">
                <label for="customer-email">Email address</label>
                <input type="email" class="form-control" id="customer-email" placeholder="Enter email" data-apicart-cart-add-parameter="shippingAddress.email">
            </div>

            <div class="d-flex flex-column flex-md-row">
                <div class="col-12 col-md-6 pl-md-0 form-group">
                    <label for="customer-first-name">First name</label>
                    <input type="text" class="form-control" id="customer-first-name" placeholder="First name" data-apicart-cart-add-parameter="shippingAddress.firstName">
                </div>

                <div class="col-12 col-md-6 pr-md-0 form-group">
                    <label for="customer-last-name">Last name</label>
                    <input type="text" class="form-control" id="customer-last-name" placeholder="Last name" data-apicart-cart-add-parameter="shippingAddress.lastName">
                </div>
            </div>

            <div class="form-group">
                <label for="customer-street-and-number">Street and number</label>
                <input type="text" class="form-control" id="customer-street-and-number" placeholder="Street and number" data-apicart-cart-add-parameter="shippingAddress.streetAndNumber">
            </div>

            <div class="d-flex flex-column flex-md-row">
                <div class="col-12 col-md-6 pl-md-0 form-group">
                    <label for="customer-city">City</label>
                    <input type="text" class="form-control" id="customer-city" placeholder="City" data-apicart-cart-add-parameter="shippingAddress.city">
                </div>

                <div class="col-12 col-md-6 pr-md-0 form-group">
                    <label for="customer-zip">Zip</label>
                    <input type="number" class="form-control" id="customer-zip" placeholder="Zip" data-apicart-cart-add-parameter="shippingAddress.zip">
                </div>
            </div>
            <div class="justify-content-between d-flex">
                <a role="button" class="btn btn-lg btn-light border show-card-front">
                    <i class="fas fa-chevron-circle-left align-middle"></i> <span class="align-middle">Continue shopping</span>
                </a>
                <button class="btn btn-danger apicart-cart-finish">
                    <i class="fas fa-chevron-circle-right align-middle"></i> <span class="align-middle">Finish order</span>
                </button>
            </div>
        </form>
        <div class="mb-5 px-1">
            <h2>Order recapitulation</h2>
            <OrderCapitulation></OrderCapitulation>
        </div>
    </div>
</template>

<script>

import ShippingMethodsSelectbox from './ShippingMethodsSelectbox'
import PaymentMethodsSelectbox from './PaymentMethodsSelectbox'
import OrderCapitulation from './OrderCapitulation'

export default {
    name: 'OrdersHome',
    components: {
        ShippingMethodsSelectbox,
        PaymentMethodsSelectbox,
        OrderCapitulation
    },
    data: function() {
        return {
            shippingMethods: [],
            paymentMethods: []
        }
    },
    methods: {
        runSetInterval(duration, condition, callback) {
            let timer = setInterval(
                function(){ 
                    if (condition())
                    {
                        callback();
                        clearInterval(timer);
                    }
                }, duration);
        },
        getDropdownItemsFromApi() {
            let self = this;
            // eslint-disable-next-line no-undef
            apicart.shippingMethods.manager.getShippingMethods(null, function(responseIsOk, response) {
                self.shippingMethods = responseIsOk ? response.data.findShippingMethods.shippingMethods : null;
            });

            // eslint-disable-next-line no-undef
            apicart.paymentMethods.manager.getPaymentMethods(null, function(responseIsOk, response) {
                self.paymentMethods = responseIsOk ? response.data.findPaymentMethods.paymentMethods : null;
            });
        }
    },
    created() {
        this.runSetInterval(
            1000, 
            // eslint-disable-next-line no-undef
            () => apicart.config.token !== "", 
            () => (this.getDropdownItemsFromApi())
        );
    }
}
</script>