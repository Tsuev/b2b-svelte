<script>
    import { onMount } from 'svelte';
    import { cart, sum } from '../../stores/CartStore'
    import List from '../../components/Cart/List.svelte'
    import Footer from '../../components/Cart/Footer.svelte'

    let basket = [];
    let total;
    let changeSum = (elem, value) => basket.map(item => { sum.set( elem * value ) });
 
    onMount(() => {
        cart.subscribe(v => basket = v)
        sum.subscribe(v => total = v)
    })

    
</script>

<div class="col-12">
    <div class="card">
        <table class="table">
            <thead>
                <tr>
                    <th style="width:40%;">Наименование</th>
                    <th style="width:25%">Количество</th>
                    <th class="d-none d-md-table-cell" style="width:25%">Цена</th>
                    <th>Сумма</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each basket as item}
                    <List {changeSum} {item}/>
                {/each}
                <Footer {total} />
            </tbody>
        </table>
    </div>
</div>