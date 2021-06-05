<script>
    import { navigateTo } from 'svelte-router-spa'
    export let logout;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<li class="nav-item dropdown">
  <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" data-bs-toggle="dropdown">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user align-middle me-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  </a>

  <a class="nav-link dropdown-toggle d-none d-sm-inline-block" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="text-dark">Турпал Бертаев</span>
  </a>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="dropdown-menu dropdown-menu-end">
    <a on:click={() => navigateTo('profile')} class="dropdown-item">Профиль</a>
    <div class="dropdown-divider"></div>
    <a on:click={() => logout()} class="dropdown-item">Выйти</a>
  </div>
</li>