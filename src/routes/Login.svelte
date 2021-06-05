<script>
    import { isAuth } from "../stores/AppStore";
</script>

<div class="main d-flex justify-content-center w-100">
  <main class="content d-flex p-0">
    <div class="container d-flex flex-column">
      <div class="row h-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 px-5">
          <div class="d-table-cell align-middle">
            <div class="text-center bg-primary p-3 rounded-top">
                <img src="img/logo.png" alt="">
            </div>
            <div class="card">
              <div class="card-body p-0">
                <div class="m-sm-4">
                  <form>
                    <div class="mb-3">
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="email"
                        placeholder="Логин"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        required
                      />
                    </div>
                    <div>
                      <div class="form-check align-items-center">
                        <input
                          id="customControlInline"
                          type="checkbox"
                          class="form-check-input"
                          value="remember-me"
                          name="remember-me"
                          checked=""
                        />
                        <label
                          class="form-check-label text-small"
                          for="customControlInline">Запомнить меня</label
                        >
                      </div>
                    </div>
                    <div class="text-center mt-3">
                      <!-- svelte-ignore a11y-missing-attribute -->
                      <a
                        on:click={()=> $isAuth = true}
                        class="btn btn-lg btn-primary w-100">Войти</a
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
