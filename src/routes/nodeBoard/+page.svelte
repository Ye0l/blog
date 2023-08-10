<script>
    export let data;
</script>

{#each data.data as e}
    <div class="card">
        <div class="card-body">
            {e.text}
        </div>
    </div>
{/each}