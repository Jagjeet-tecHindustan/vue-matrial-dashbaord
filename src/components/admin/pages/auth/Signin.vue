<template>
<div class="row" id="signin">
<div class="col-md-6 offset-md-4">
<div class="card">

    <!-- Card body -->
    <div class="card-body">
      <div class="form-header blue accent-1">
        <h3>
          <i class="menu-icon fa fa-sign-in"></i>
           Signin
        </h3>
      </div>

        <!-- Material form Signin -->
        <form>

            <!-- Material input email -->
            <div class="md-form">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" id="materialFormCardEmailEx" class="form-control ">
                <label for="materialFormCardEmailEx" class="font-weight-light">Your email</label>
            </div>

            <!-- Material input password -->
            <div class="md-form">
                <i class="fa fa-lock prefix grey-text"></i>
                <input type="password" id="materialFormCardPasswordEx" class="form-control">
                <label for="materialFormCardPasswordEx" class="font-weight-light">Your password</label>
            </div>

            <div class="text-center py-4 mt-3">
                <button class="btn" style="background-color:#2BBBAD" type="submit">Signin</button>
            </div>
        </form>
        <!-- Material form register -->

    </div>
    <!-- Card body -->

</div>
</div>
</div>
<!-- Card -->
</template>

<script>
export default {};
</script>

<style>
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.blue.accent-1 {
  background-color: #2bbbad !important;
}
.form-header {
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  color: #fff;
  text-align: center;
  margin-top: -3.13rem;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 0.125rem;
}
form {
  padding-left: 28px;
  padding-right: 15px;
}
.md-form .prefix.active {
  /* Form icon color when icon is active */
  color: #2bbbad !important;
}
#signin {
  padding-top: 10%;
}
</style>