<script>
  import Tabs from "../../components/Tab/Tabs.svelte";
  import Navbar from '../../components/Navbar/Navbar.svelte'
  import { tabs } from '../../stores/TabsStore'
  import { tree } from '../../stores/CatalogStore'
  import { onMount } from "svelte";
  import { navigateTo } from 'svelte-router-spa'

  let node, tab = [];
  onMount(() => {tree.subscribe(v => node = v); tabs.subscribe(v => tab = v)})
</script>

<style>
  li{
    font-size: 0.875rem;
  }
</style>

<nav id="sidebar" class="sidebar">
  <div class="sidebar-content js-simplebar" data-simplebar="init">
    <div class="simplebar-wrapper" style="margin: 0px;">
      <div class="simplebar-height-auto-observer-wrapper">
        <div class="simplebar-height-auto-observer" />
      </div>
      <div class="simplebar-mask">
        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
          <div
            class="simplebar-content-wrapper"
            style="height: 100%; overflow: hidden scroll;"
          >
            <div class="simplebar-content" style="padding: 0px;">
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click="{() => navigateTo('/')}" class="sidebar-brand">
                <img src="/img/logo.png" alt="" />
              </a>

              <!-- Для того кто сел читать мой код, всё происходит здесь -->
              <ul class="sidebar-nav mt-3">
                {#each tab as item}
                  <Tabs {item}/>
                {/each}
                <li class="sidebar-header">
                  Каталог
                </li>
                <Navbar tree={node}/>
              </ul>
              <!-- Для того кто сел читать мой код, всё происходит здесь -->
              
            </div>
          </div>
        </div>
      </div>
      <div class="simplebar-placeholder" style="width: auto; height: 1485px;" />
    </div>
    <div
      class="simplebar-track simplebar-horizontal"
      style="visibility: hidden;"
    >
      <div class="simplebar-scrollbar" style="width: 0px; display: none;" />
    </div>
    <div
      class="simplebar-track simplebar-vertical"
      style="visibility: visible;"
    >
      <div
        class="simplebar-scrollbar"
        style="height: 269px; transform: translate3d(0px, 0px, 0px); display: block;"
      />
    </div>
  </div>
</nav>
