<script>
  import { Navigate } from 'svelte-router-spa'

  export let item = [];

</script>

<style>
  li{font-size: 0.875rem;}
</style>

<!-- svelte-ignore a11y-missing-attribute -->

<li class="sidebar-item">
  <Navigate styles='sidebar-link' to="{item.link}">
    {@html item.icon}
    <span class="align-middle">{item.title}</span>
  </Navigate>
</li>

