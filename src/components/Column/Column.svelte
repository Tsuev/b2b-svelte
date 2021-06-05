<script>
    import Request from './Request.svelte'
    export let item = [];
    export let actionSidebar;
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

    /* .card-body{
        overflow-y: scroll;
    } */

    /* .card-body::-webkit-scrollbar {
        width: 5px;
        background-color: rgba(26, 24, 47, 0.15);
        border-radius: 5px;
        height: 7px;
        position: relative;
    }  
    .card-body::-webkit-scrollbar-thumb {
        background: #72b6ff;
        border-radius: 5px;
    }  */
</style>


    <div class="card mx-3">
        <div class="card-header p-0">
            <span class="mb-0 text-dark">{item.title} ({item.order.length})</span>
        </div>
        <div class="card-body p-0 mt-3 mx-2">
            <div class="wrap">
                {#each item.order as orders}
                    <Request {actionSidebar} {orders}/> 
                {/each}
            </div>
        </div>
    </div>
