<script>
    import { navigateTo } from 'svelte-router-spa'
</script>

<style>
    div{
        position: absolute;
        top: 50%;
        left: 50%;
    }
    h1:first-child{
        font-size: 50px;
        font-weight: 700;
    }
</style>
<div>
    <h1 class='text-center'>404</h1>
    <h1 class='text-center'>Страница не найдена 😕</h1>
    <h3 on:click={() => navigateTo('/')} class='text-center text-primary cursor-pointer'>Вернутся на главную</h3>
</div>