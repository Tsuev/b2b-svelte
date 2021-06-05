<script>
    import formatter from '../../helper/currency'

    export let total;
    
</script>

<style>
    strong{font-weight: 800;}
</style>

<tr>
    <td></td>
    <td></td>
    <td class="text-right"> 
        <strong>Итого</strong> 
    </td>
    <td class="text-right">
        <strong id="cart-product-total">{formatter(total)} руб.</strong>
    </td>
</tr>