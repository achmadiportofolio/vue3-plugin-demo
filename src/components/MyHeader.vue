<template >
    <div>
        <h2 class="header-title">
            <slot name='title'>
                default title
            </slot>
        </h2>
        <h3 class="header-author">
            <slot name="author"> 
                default author
            </slot>
        </h3>
        <a :href="featuredLink"> {{featuredLink }}</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>