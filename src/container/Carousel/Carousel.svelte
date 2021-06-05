<script>
  import { onMount } from 'svelte';
  import { slides } from '../../stores/SliderStore'
  import Slide from '../../components/Slide/Slide.svelte'

  let slide;
  onMount(() => slides.subscribe(v => slide = v))
</script>

<div class="col-12">
    <div class="card">
      <div class="card-body p-0">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
            />
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              class=""
            />
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              class=""
            />
          </ol>
          <div class="carousel-inner">
            <Slide {slide}/>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>