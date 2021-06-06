<script>
    import { onMount } from 'svelte';
    import { regime } from '../../stores/AppStore'
    import Card from '../../components/Card/Card.svelte'
    import Modal from '../../components/Modal/Modal.svelte'

    let mode;
    onMount(() => regime.subscribe(v => mode = v))

    let temp_var = [1, 2, 3, 4, 5, 6]
</script>

<div class="row">
    {#each temp_var as item}
        <Card {mode}/>
    {/each}
</div>
<Modal/>