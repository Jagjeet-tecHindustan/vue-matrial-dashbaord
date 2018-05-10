<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container-fluid">
        <a href="#" class="navbar-brand waves-effect">
          <strong>Jagjeet</strong>
        </a>
      </div>
    </nav>
    <div class="sidebar-fixed position-fixed">
      <a href="#" class="logo-wrapper waves-effect">
        <img src="https://mdbootstrap.com/img/logo/mdb-email.png" alt="">
      </a>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item active waves-effect">
          <i class="fa fa-pie-chart mr-3"></i>
          Dashboard
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 600px) .navbar.scrolling-navbar {
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  padding-top: 12px;
  padding-bottom: 12px;
}
.navbar,
.page-footer,
main {
  padding-left: 270px;
}
.navbar {
  padding-right: 1rem !important;
  font-weight: 300;
}
.sidebar-fixed {
  height: 100vh;
  width: 270px;
  z-index: 1050;
  background-color: #fff;
  padding: 0 1.5rem 1.5rem;
}
.position-fixed {
  position: fixed !important;
}
</style>