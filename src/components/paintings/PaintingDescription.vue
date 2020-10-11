<template>
    <div id="painting-description-view" class="mb-5">
        <strong class="h3">Painting description</strong>
        <div>{{ selectedPainting.description}}</div>
    </div>
</template>

<script>

import paintings from '../../data/static';

export default {
    name: 'PaintingDescription',
    computed: {
        selectedPainting() {
            return paintings[this.$store.state.paintings.selectedPainting];
        }
    },
}
</script>