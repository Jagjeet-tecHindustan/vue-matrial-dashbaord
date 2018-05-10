<template>
    <div class="side-container">
       <nav class="navbar navbar-expand-lg">
           <div class="navbar-header" style="margin-top:15px;font-style: oblique;">
                 <b><strong>Admin Dashboard</strong></b>
                 <hr style="background-color:#c8c9ce;" />
           </div>   
           <div id="main-menu" role="navigation" class="main-menu collapse navbar-collapse">
               <ul class="navbar-nav">
                   <li class="nav-item">
                       <router-link to="/admin/dashboard">
                           <i class="menu-icon fa fa-dashboard"></i>
                           <span class="menu-title-text">Dashboard</span>
                       </router-link>
                   </li>
                   <li class="nav-item">
                       <router-link to="/admin/tables">
                           <i class="menu-icon fa fa-table"></i>
                           <span class="menu-title-text">Tables</span>
                       </router-link>
                   </li>
                   <li class="nav-item">
                       <router-link to="/admin/forms">
                           <i class="menu-icon fa fa-pencil-square-o"></i>
                           <span class="menu-title-text">Forms</span>
                       </router-link>
                   </li>
                   <li class="nav-item">
                       <router-link to="/admin/signin">
                           <i class="menu-icon fa fa-sign-in"></i>
                           <span class="menu-title-text">Login</span>
                       </router-link>
                   </li>
                    <li class="nav-item">
                       <router-link to="/admin/signup">
                           <i class="menu-icon fa fa-sign-in"></i>
                           <span class="menu-title-text">Signup</span>
                       </router-link>
                   </li>
               </ul>
           </div>
       </nav>
    </div>
</template>

<script>
export default {};
</script>

<style>
.side-container {
  background-color: #272c33;
  display: table-cell;
  height: 100%;
  min-height: 100%;
  vertical-align: top;
  width: 230px !important;
  padding: 0 25px;
  color: aliceblue;
}
.side-container .navbar-expand-lg {
  flex-direction: column;
}
.navbar {
  background: #272c33;
  border-radius: 0;
  border: none;
  margin: 0;
  margin-bottom: 0;

  position: relative;
}
.navbar-collapse {
  padding: 0;
  max-width: 100%;
  width: 100%;
  display: flex !important;
  flex-basis: 100%;
  align-items: center;
}
.navbar-expand-lg .navbar-nav {
  flex-direction: column;
  max-width: 100%;
  width: 100%;
}
.navbar .navbar-nav {
  float: none;
  position: relative;
}
.navbar-nav {
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
ul {
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}
.navbar .navbar-nav li {
  width: 100%;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.navbar .navbar-nav li > a {
  background: none !important;
  color: #c8c9ce !important;
  display: inline-block;
  font-size: 18px;
  font-family: Open Sans;
  line-height: 30px;
  padding: 10px 0 10px 35px;
  position: relative;
  width: 100%;
}
a {
  text-decoration: none;
  outline: none !important;
  transition: all 0.25s ease;
}
a:-webkit-any-link {
  cursor: pointer;
}
.navbar .navbar-nav li > a .menu-title-text {
  font-size: 17px;
}
i {
  margin-left: -15px;
  margin-right: 8px;
}
</style>