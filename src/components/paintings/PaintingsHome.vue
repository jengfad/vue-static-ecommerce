<template>
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
                <AddToCartForm />
                <div id="add-to-cart-form-view"></div>
            </div>
        </div>
        <div class="product-images p-2 p-md-5 col-md-6 bg-light align-items-center d-flex">
            <PaintingImage />
        </div>
    </div>
</template>

<script>
import PaintingsSelectbox from './PaintingsSelectbox.vue';
import PaintingDescription from './PaintingDescription.vue';
import PaintingImage from './PaintingImage.vue';
import AddToCartForm from '../cart/AddToCartForm';

export default {
    name: 'PaintingsHome',
    components: {
        PaintingsSelectbox,
        PaintingDescription,
        PaintingImage,
        AddToCartForm
    },
}

</script>