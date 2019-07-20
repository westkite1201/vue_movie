<template>
    <div>
        <li v-for= "(f, key) in this.$store.state.fruits" :key=key>{{f.price}}</li>
    </div>
</template>

<script>
    export default {

    mounted:function(){
        console.log("mounted", this.$store.state)
        },
        
    }
</script>

<style lang="scss" scoped>

</style>