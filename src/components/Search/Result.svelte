<script>
    import { navigateTo } from 'svelte-router-spa'

    export let product = [];
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#each product as item}
    <a on:click={() => navigateTo(item.link)} class="nav-link d-flex align-items-center">
        <img src="{item.image}" class="avatar img-fluid rounded-circle shadow" alt="Товар"> 
        <div class="ms-3">
            <div class="text-dark">{item.title}</div>
            <div class="text-muted">{item.category}</div>
        </div>
    </a>
{/each}
