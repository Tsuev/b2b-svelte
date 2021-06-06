<script>
  import Search from "../Search/Search.svelte";
  import User from "../../components/User/User.svelte";
  import Cart from "../../components/Cart/Cart.svelte";
  import Regime from "../../components/Regime/Regime.svelte";
  import { isAuth, regime } from '../../stores/AppStore'
  import { sum, cart } from '../../stores/CartStore'
  import { onMount } from "svelte";
  
  let basket = [];
  let total;
  let quantity;
  let mode;

  let logout = () => { $isAuth = false }
  let changeMode = () => {$regime = !$regime}

  onMount(() => {
    sum.subscribe( v => total = v )
    cart.subscribe( v => basket = v )
    cart.subscribe( v => quantity = v.length )
    regime.subscribe( v => mode = v )
    basket.map(item => sum.set( total + item.price ))
  })
  
</script>
 

<!-- svelte-ignore a11y-missing-attribute -->
<nav class="navbar navbar-expand navbar-light navbar-bg">
  <a class="sidebar-toggle">
    <i class="hamburger align-self-center" />
  </a>

  <form class="d-block w-100">
    <Search/>
  </form>

  <div class="navbar-collapse collapse">
    <ul class="navbar-nav navbar-align">
      <Regime {mode} {changeMode}/>
      <Cart {total} {quantity} {mode}/>
      <User {logout}/>
    </ul>
  </div>
</nav>
