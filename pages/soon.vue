<template>
    <section id="soon">
        <Creation></Creation>
    </section>
</template>

<style scoped>
 #soon {
     position: relative;
     height:100vh;
    margin-bottom: -60px;
    background: #d9bb56;
}


</style >

<script>
import Creation from '~/components/Creation.vue';

export default {
    // name: "Service Technique",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {

    },
    beforeMount() { },
    beforeDestroy() { },
    watch: {},
    computed: {},
    methods: {},
    head() {
        return this.$seo({});
    },
    components: { Creation },
};
</script>