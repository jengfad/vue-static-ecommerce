<template>
    <img :src="selectedPainting.imageUrl" alt="" class="mw-100 shadow">
</template>

<script>

import paintings from '../../data/static';

export default {
    computed: {
        selectedPainting() {
            return paintings[this.$store.state.paintings.selectedPainting];
        }
    },
}

</script>