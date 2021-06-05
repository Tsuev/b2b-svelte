<script>
  export let tree = [];
</script>

<style>
  a{font-size: 0.875rem;}
</style>

{#each tree as node}
  {#if node.child}
    <li class="sidebar-item">
      <a href={node.link} data-bs-target="#multi-{node.id}" data-bs-toggle="{node.child ? 'collapse': null}" class="sidebar-link collapsed" aria-expanded="false">{node.title}</a>
      <ul id="multi-{node.id}" class="sidebar-dropdown list-unstyled collapse" style="">
        <svelte:self tree={node.child}/>
      </ul>
    </li>
  {:else}
    <li class="sidebar-item">
      <a href={node.link} class="sidebar-link" aria-expanded="false">{node.title}</a>
    </li>
  {/if}
{/each}











