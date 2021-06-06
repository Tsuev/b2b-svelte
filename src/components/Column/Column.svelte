<script>
    import OrderCard from './OrderCard.svelte'

    export let item = [];
    export let actionSidebar;
    export let getOrderInfo;
    

</script>

<style>
    .card{
        background-color: rgb(212, 212, 212);
        border-right: 1px solid white;
		padding: 1rem;
		min-width: 300px;
		height: 80vh;
		scroll-snap-align: start;
    }
    span{
        font-size: 0.95rem;
        font-weight: 600;
    }
    .card-header{
        background-color: rgba(255, 255, 255, 0);
    }

</style>

<div class="card mx-3">
    <div class="card-header p-0">
        <span class="mb-0 text-dark">{item.title} ({item.order.length})</span>
    </div>
    <div class="card-body p-0 mt-3">
        <div class="wrap">
            {#each item.order as item}
                <OrderCard {actionSidebar} {item}/> 
            {/each}
        </div>
    </div>
</div>
