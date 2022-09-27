<template>
    <Navbar />
    <div class="max-w-5xl m-auto px-4">
        <router-view />
    </div>
    <Footer />
</template>

<script lang="ts" setup>
import '@akrc/fish/fish.min.css';
import '../src/index.less';
import Navbar from './component/navbar.vue';
import Footer from './component/footer.vue';
</script>

<style>
:root {
    font-family: Inter;
}
</style>
