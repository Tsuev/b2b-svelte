<script>
    import { onMount } from 'svelte';
    import { brands } from '../../stores/BrandStore'
    import Brand from '../../components/Brand/Brand.svelte'
    
    let brand;
    onMount(() => brands.subscribe(v => brand = v))
</script>

<Brand {brand}/>