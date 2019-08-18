<template>
    <div>
        <h2>admin</h2>
        <p>商品管理，只有管理员能进来</p>
    </div>
</template>

<script>
    export default {
        middleware: ['auth']
    }
</script>

<style lang="scss" scoped>

</style>