<script lang="ts" setup>
    const route = useRoute();
    console.log(route.params.id);
</script>

<template>
    <div>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
