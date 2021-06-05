<script>
    import { onMount } from 'svelte';
    import { search } from '../../stores/SearchStore.js' 
    import Input from '../../components/Search/Input.svelte' 
    import List from '../../components/Search/List.svelte'

    let product;
    onMount(() => search.subscribe(v => product = v))
</script>

<div class="input-group dropdown input-group-navbar position-relative">
    <Input/>
    <List {product}/>
</div>
