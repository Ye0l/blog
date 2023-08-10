<script>
    export let data;
</script>

{#each data.data as e}
    {e.text}
{/each}