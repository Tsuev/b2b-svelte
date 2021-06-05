<script>
    export let open;
    export let actionSidebar;
</script>

<style>
    .sidebar{ 
        background: #fff;
        border-left: 0 solid transparent;
        display: block;
        height: 100%;
        position: fixed;
        width: 400px;
        z-index: 100;
        top: 0;
        bottom: 0;
        right: -400px;
        transition: right .2s ease-in-out;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) !important;
        max-width: 400px !important;
    }

    /* .sidebar:before{
        content: "";
        background: rgba(0,0,0,.325);
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        pointer-events: none;
    } */

    .sidebar-content{
        height: 100%;
        overflow: auto;
        position: relative;
        background: #fff;
        display: flex;
        flex-direction: column;
    }

    :global(.active-sidebar){
        right: 0 !important;
    }


</style>

<div class:active-sidebar={open} class="sidebar shadow-lg">
    <div class="sidebar-content">
        <div class="sidebar-header d-flex align-items-center">
            <button on:click={() => actionSidebar()} type="button" class="btn-close float-right" aria-label="Close"></button>
            <h3 class="ms-3" style="margin-bottom: 0;">История заказа</h3>
        </div>
        <div class="sidebar-body p-4">
            <h3>Ассаляму lаляйкум</h3>
        </div>
    </div>
</div>