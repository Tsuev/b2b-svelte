<script>
    import Result from './Result.svelte'

    export let product = [];
</script>

<style>
    .dropdown-menu{top: 100% !important;}
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="dropdown-menu dropdown-menu-start dropdown-mega w-100" aria-labelledby="servicesDropdown">
    <Result {product}/>
</div>