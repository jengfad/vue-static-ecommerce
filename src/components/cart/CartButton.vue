<template>
    <div id="cart-button-view-wrapper" class="text-center text-md-right mb-5">
        <a role="button" @click="showCardBack" id="cart-button-view" class="d-inline-block border p-3 rounded" style="font-size: 24px; border-color: #61d3cb !important; color: #61d3cb;">
            <i class="fas fa-shopping-cart fa-lg align-middle"></i>
            <span v-if=" ! cart.itemsCount" class="d-inline-block ml-2 align-middle">Empty</span>
            <span v-else class="d-inline-block ml-2 align-middle">
                Items {{ cart.itemsCount }}, Price ${{ cart.itemsPrice }}
            </span>
        </a>
    </div>
</template>