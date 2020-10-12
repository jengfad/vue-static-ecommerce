<template>
  <div class="page-container container p-0 mb-5">
      <div id="cart-button-view"></div>
      <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front mb-5">
                  <PaintingsHome />
              </div>
              <div class="flip-card-back border bg-light text-dark p-md-5 mb-5">
                  <OrdersHome />
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import PaintingsHome from './components/paintings/PaintingsHome';
import OrdersHome from './components/orders/OrdersHome';

export default {
  name: 'App',
  components: {
      PaintingsHome,
      OrdersHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
