<script setup>
   const {isEmailOpened} = useEmailStore();
</script>
<template>
    <div class="container">
        <div v-if="isEmailOpened" class="overlay"></div>
        <Sidebar />
        <slot />     
    </div>
</template>
 <style lang="scss" scoped>   
    .container {
        display: flex;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(116 133 154 / 80%);
        z-index: 10;
    }
 </style>