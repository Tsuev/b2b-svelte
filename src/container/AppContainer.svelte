<script>
    import { Router } from 'svelte-router-spa'
    import { routes } from '../routes';
	import { isAuth } from '../stores/AppStore'
    import Header from './Header/Header.svelte'
    import Sidebar from './Sidebar/Sidebar.svelte'
	import Login from '../routes/Login.svelte';
</script>

{#if $isAuth}
    <div class="wrapper">
        <Sidebar/>
        <div class="main">
            <Header/>
            <main class="content">
                <div class="container-fluid p-0">
                    <Router {routes} />
                </div>
            </main>
        </div>
    </div>
{:else}
	<Login/>
{/if}
