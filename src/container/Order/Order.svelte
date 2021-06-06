<script>
    import Columns from '../../components/Column/Column.svelte'
    import Sidebar from '../Order/Sidebar.svelte'
    import { onMount } from 'svelte';
    import { isOpen, order } from '../../stores/OrderStore'

    let col = [];
    let open;
    
    onMount(() => {
        order.subscribe(v => col = v)
        isOpen.subscribe(v => open = v)
    })  


    let actionSidebar = () => open = !open
</script>

<style>
    .colums-container{
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
    }

    .colums-container::-webkit-scrollbar {
        width: 5px;
        background-color: rgba(26, 24, 47, 0.15);
        border-radius: 5px;
        height: 7px;
    }  
    .colums-container::-webkit-scrollbar-thumb {
        background: #72b6ff;
        border-radius: 5px;
    } 
</style>

<div class="colums-container">
    {#each col as item}
        <Columns {actionSidebar} {item} />
    {/each}
</div>
<Sidebar {open} {actionSidebar}/>