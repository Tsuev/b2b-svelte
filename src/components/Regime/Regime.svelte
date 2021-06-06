<script>
    export let mode;
    export let changeMode;
</script>

<li class="nav-item d-flex align-items-center me-4">
    <button on:click={() => changeMode()} class="btn { mode ? 'btn-info' : 'btn-success' } btn-sm rounded">
        <i class="align-middle me-2 fas fa-fw fa-undo"></i> 
        { mode ? 'Режим администратора' : 'Режим клиента' }
    </button>
</li>