<script>
    import { navigateTo } from 'svelte-router-spa'
    import formatter from '../../helper/currency'

    export let total;
    export let quantity;
</script>
<style>
    .indicator{
        top: -8px !important;
        height: 23px !important;
        width: 23px !important;
        right: -15px !important;
    }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<li class="nav-item d-flex">
    <span class="d-none d-md-flex align-items-center pt-1">{formatter(total)} руб.</span>
    <a on:click="{() => {navigateTo('cart')}}" class="nav-icon">
        <div class="position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle me-2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span class="indicator d-flex align-items-center justify-content-center">{quantity}</span>
        </div>
    </a>
</li>