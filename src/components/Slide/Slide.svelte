<script>
  export let slide = [];
</script>

{#each slide as item}
  <div class="carousel-item {item.active}">
    <img class="d-block w-100" src="{item.image}" alt="Unsplash"/>
    <div class="carousel-caption d-none d-md-block">
      <p class="d-none d-lg-block bg-dark">{item.description}</p>
    </div>
  </div>
{/each}
