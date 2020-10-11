<template>
    <select class="custom-select" id="inputGroupSelect01" @change="selectPainting($event)">
        <option v-for="painting of paintings" class="" :key="painting.id" :value="painting.id">
            {{ painting.name }} - ${{ painting.price }}
        </option>
    </select>
</template>

<script>

import paintings from '../../data/static';
import { mapActions } from 'vuex';

export default {
    name: 'PaintingsSelectbox',
    ...mapActions('paintings', ['selectPainting']),
    computed: {
        paintings() {
            return paintings;
        },
    },
    methods: {
        selectPainting(event) {
            this.selectPainting(event.target.value);
        }
    },
}
</script>