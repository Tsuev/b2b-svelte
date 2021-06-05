<script>
    import { navigateTo } from 'svelte-router-spa'

    export let brand = [];
</script>

<style>
    .card:hover{
        transform: translateY(-5px);
        transition-duration: 0.5s;
        box-shadow: 0px 7px 8px 3px rgba(34, 60, 80, 0.2);
    }
    .card{
        transform: translateY(0);
        transition-duration: 0.5s;
    }
</style>

{#each brand as item}
<!-- svelte-ignore a11y-missing-attribute -->
    <div class="col-12 col-lg-4 col-xl mb-2">
        <div class="card">
            <a on:click={() => navigateTo(item.link)}>
                <img class="card-img-top" src="{item.image}" alt="Unsplash">
            </a>
        </div>
    </div>
{/each}
