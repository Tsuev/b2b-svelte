<script>
    import formatter from '../../helper/currency'
    export let orders = []
    export let actionSidebar;
</script>

<div class="card flex-fill">
    <div class="card-body py-2 px-2">
        <div class="row">
            <div class="col-7">
                <p class="mb-1 text-dark">{orders.client}</p>
                <h4 on:click={ () => actionSidebar() } class="mb-3 text-primary cursor-pointer">Заказ № {orders.order_num}</h4>
                <h5 class="text-dark">{formatter(orders.price)}</h5>
            </div>
            <div class="col-5 d-flex flex-column justify-content-between">
                <p class="mb-1 text-dark d-flex justify-content-end">
                    {orders.order_date}
                </p>
                <p class="mb-1 text-dark d-flex justify-content-end">
                    {orders.after_days} дн.
                </p>
            </div>
        </div>
    </div>
</div>
