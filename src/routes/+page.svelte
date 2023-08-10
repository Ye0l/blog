<script>
    export let data;
</script>
{data.test}
<div class="background">
    aa: {data.test}
</div>
<style>
    .background {
        position: fixed;
        inset: 0;
        z-index: -1;
    }
</style>