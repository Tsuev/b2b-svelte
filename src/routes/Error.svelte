<script>
    import { navigateTo } from 'svelte-router-spa'
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="row my-auto h-100">
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div class="d-table-cell align-middle">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="h1">Страница не найдена 😕</p>
                <a on:click={() => navigateTo('/')} class="btn btn-primary btn-lg">Вернутся на главную</a>
            </div>
        </div>
    </div>
</div>  