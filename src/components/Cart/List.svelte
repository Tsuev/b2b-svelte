<script>
    import formatter from '../../helper/currency'
    
    export let item = [];
    export let changeSum; 
    
</script>

<style>
    input{width: 20%}
    button{padding: 1px 4px}
</style>


<tr>
    <td>{item.title}</td>
    <td>
        <input bind:value={item.quantity} on:change={() => changeSum(item.price, item.quantity)} type="number" class="form-control mb-2 mr-5" id="inlineFormInputName2">    
    </td>
    <td class="d-none d-md-table-cell">{formatter(item.price)}</td>
    <td class="table-action">{formatter(item.price * item.quantity)}</td>
    <td>
        <button class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x align-middle"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    </td>
</tr>

