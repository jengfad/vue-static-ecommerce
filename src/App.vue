<template>
  <div class="page-container container p-0 mb-5">
      <div id="cart-button-view"></div>
      <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front mb-5">
                  <div class="product-preview flex-column flex-md-row d-flex">
                      <div class="product-info p-2 p-md-5 col-md-6">
                          <h1 class="mb-5">
                          <strong>My paintings shop!</strong>
                          </h1>
                          <div class="product-detail-info">
                              <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                      <label class="input-group-text" for="inputGroupSelect01">Painting</label>
                                  </div>
                                  <PaintingsSelectbox />
                              </div>
                              <PaintingDescription />
                              <div id="add-to-cart-form-view"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PaintingsSelectbox from './components/paintings/PaintingsSelectbox.vue';
import PaintingDescription from './components/paintings/PaintingDescription.vue';

export default {
  name: 'App',
  components: {
    PaintingsSelectbox,
    PaintingDescription,
  },
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
