<script>
  import Search from "../Search/Search.svelte";
  import User from "../../components/User/User.svelte";
  import Cart from "../../components/Cart/Cart.svelte";
  import { isAuth } from '../../stores/AppStore'
  import { sum, cart } from '../../stores/CartStore'
  import { onMount } from "svelte";
  
  let basket = [];
  let total;
  let quantity;

  let logout = () => { $isAuth = false }
  
  onMount(() => {
    sum.subscribe( v => total = v )
    cart.subscribe( v => basket = v )
    cart.subscribe( v => quantity = v.length )
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
      <Cart {total} {quantity}/>
      <User {logout}/>
    </ul>
  </div>
</nav>
