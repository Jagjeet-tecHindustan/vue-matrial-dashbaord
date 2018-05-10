<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container-fluid">
        <a href="#" class="navbar-brand waves-effect">
          <strong>{{$route.name}}</strong>
        </a>
        <div >
        
          <a class="navbar-brand waves-effect" data-toggle="modal" data-target="#modalConfirmDelete">
            <i class="fa fa-power-off" aria-hidden="true"></i>
          </a>  
                  <div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-sm modal-notify modal-danger" role="document">
                          <div class="modal-content text-center">
                              <div class="modal-header d-flex justify-content-center">
                                  <p class="heading">Are you sure?</p>
                              </div>
                              <div class="modal-body">
                                  <i class="fa fa-times fa-4x animated rotateIn"></i>
                              </div>
                              <div class="modal-footer flex-center">
                                  <a class="btn  btn-outline-default">Yes</a>
                                  <button type="button" class="btn  btn-default waves-effect waves-light" data-dismiss="modal">No</button>
                              </div>
                          </div>
                      </div>
                  </div>
        </div>
      </div>
    </nav>
    <div class="sidebar-fixed position-fixed">
      <a href="#" class="logo-wrapper waves-effect">
        <font size="4px">Admin Dashboard</font>
      </a>
      <div class="list-group list-group-flush">
        <router-link active-class="active" to="/admin/dashboard" class="list-group-item waves-effect" tag="a">
          <i class="fa fa-pie-chart mr-3"></i>
          Dashboard
        </router-link>
        <router-link active-class="active" to="/admin/tables" class="list-group-item waves-effect" tag="a">
          <i class="menu-icon fa fa-table mr-3"></i>
          Tables
        </router-link>
        <router-link active-class="active" to="/admin/forms" class="list-group-item waves-effect" tag="a">
          <i class="menu-icon fa fa-pencil-square-o mr-3"></i>
          Forms
        </router-link>
        <router-link active-class="active" to="/admin/modal" class="list-group-item waves-effect" tag="a">
          <i class="fa fa-bolt mr-3" aria-hidden="true"></i>
          Modal
        </router-link>
        <router-link active-class="active" to="/admin/signin" class="list-group-item waves-effect" tag="a">
          <i class="menu-icon fa fa-sign-in mr-3"></i>
          Sign In
        </router-link>
         <router-link active-class="active" to="/admin/signup" class="list-group-item waves-effect" tag="a">
          <i class="menu-icon fa fa-sign-in mr-3"></i>
          Sign Up
        </router-link>
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
  max-width: 270px;
  z-index: 1050;
  background-color: #fff;
  padding: 0 1.5rem 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.list-group-item.active {
  background-color: #2bbbad;
  border-color: #2bbbad;
}
.position-fixed {
  position: fixed !important;
}
.sidebar-fixed .logo-wrapper {
  padding: 2.5rem;
}
a :hover {
  color: #2bbbad;
}
a.waves-effect,
a.waves-light {
  display: inline-block;
}
.waves-effect {
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 1;
}
.view,
.view .mask,
.waves-effect {
  overflow: hidden;
}
a {
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  color: #616161;
}
.list-group-item .waves-effect .active {
  color: white;
}
/*                                     Sidebar logo
.sidebar-fixed .logo-wrapper img {
  max-height: 50px;
}
.img-fluid,
.modal-dialog.cascading-modal.modal-avatar .modal-header,
.video-fluid {
  max-width: 100%;
  height: auto;
}
img {
  vertical-align: middle;
  border-style: none;
}*/
*,
::after,
::before {
  box-sizing: border-box;
}
.modal-backdrop {
  position: inherit !important;
}
.modal-dialog.modal-notify.modal-danger .badge,
.modal-dialog.modal-notify.modal-danger .modal-header {
  background-color: #2bbbad;
}
.modal-dialog.modal-notify.modal-danger .fa {
  color: #2bbbad;
}
</style>