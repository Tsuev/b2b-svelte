<script>
    import formatter from '../../helper/currency'
    export let item = []
    export let actionSidebar;
    
</script>

<div class="card flex-fill">
    <div class="card-body py-2 px-2">
        <div class="d-flex">
            <div class="col-7">
                <p class="mb-1 text-dark">{item.client}</p>
                <h4 on:click={ () => actionSidebar() } class="mb-3 text-primary cursor-pointer">
                    Заказ № {item.order_num}
                </h4>
                <h5 class="text-dark">{formatter(item.price)}</h5>
            </div>
            <div class="col-5 d-flex flex-column justify-content-between">
                <p class="mb-1 text-dark d-flex justify-content-end">
                    {item.order_date}
                </p>
                <p class="mb-1 text-dark d-flex justify-content-end">
                    {item.after_days} дн.
                </p>
            </div>
        </div>
    </div>
</div>
