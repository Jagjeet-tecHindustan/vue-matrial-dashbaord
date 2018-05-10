<template>
  <div id="basic-container" class="container-fluid">
    <div class="card card-cascade narrower">
      <div class="view py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">
        <div>
          <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 waves-effect waves-light">
            <i class="fa fa-th-large mt-0"></i>
          </button>
          <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 waves-effect waves-light">
            <i class="fa fa-columns mt-0"></i>
          </button>
        </div>
        <a class="white-text mx-3" style="margin-left: 1rem!important;">Table name</a>
        <div>
          <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 waves-effect waves-light">
            <i class="fa fa-pencil mt-0"></i>
          </button>
          <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 waves-effect waves-light" data-toggle="modal" data-target="#modalConfirmDelete">
            <i class="fa fa-remove mt-0"></i>
          </button>
          <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2 waves-effect waves-light">
            <i class="fa fa-info-circle mt-0"></i>
          </button>
        </div>
      </div>
      <div class="card-body">

                        <div class="table-responsive">

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" id="checkbox">
                                            <label for="checkbox" class="label-table"></label>
                                        </th>
                                        <th class="th-lg">First column <i class="fa fa-sort ml-1"></i></th>
                                        <th class="th-lg">Second column <i class="fa fa-sort ml-1"></i></th>
                                        <th class="th-lg">Third column <i class="fa fa-sort ml-1"></i></th>
                                        <th class="th-lg">Fourth column <i class="fa fa-sort ml-1"></i></th>
                                        <th class="th-lg">Fifth column <i class="fa fa-sort ml-1"></i></th>
                                        <th class="th-lg">Sixth column <i class="fa fa-sort ml-1"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" id="checkbox1">
                                            <label for="checkbox1" class="label-table"></label>
                                        </th>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" id="checkbox2">
                                            <label for="checkbox2" class="label-table"></label>
                                        </th>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" id="checkbox3">
                                            <label for="checkbox3" class="label-table"></label>
                                        </th>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <hr class="my-0">

                        <!--Bottom Table UI-->
                        <div class="d-flex justify-content-between">

                            <!--Name-->
                            <div class="select-wrapper mdb-select colorful-select dropdown-primary mt-2 hidden-md-down">
                              <span class="caret">▼</span>
                              <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-4b32cb30-bf45-44e2-8ce4-33e66979033a" value="10 rows">
                              <ul id="select-options-4b32cb30-bf45-44e2-8ce4-33e66979033a" class="dropdown-content select-dropdown" style="width: 200px; position: absolute; top: 0px; left: 0px; opacity: 1; display: none;">
                                <li class="disabled"><span class="filtrable">Rows number</span></li>
                                <li class=""><span class="filtrable">10 rows</span></li>
                                <li class="active"><span class="filtrable">25 rows</span></li>
                                <li class=""><span class="filtrable">50 rows</span></li>
                                <li class=""><span class="filtrable">100 rows</span></li>
                                </ul>
                               </div>

                            <!--Pagination -->
                            <nav class="my-4">
                                <ul class="pagination pagination-circle pg-blue mb-0">

                                    <!--First-->
                                    <li class="page-item disabled">
                                        <a class="page-link waves-effect waves-effect">First</a>
                                    </li>

                                    <!--Arrow left-->
                                    <li class="page-item disabled">
                                        <a class="page-link waves-effect waves-effect" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>

                                    <!--Numbers-->
                                    <li class="page-item active">
                                        <a class="page-link waves-effect waves-effect">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect">5</a>
                                    </li>

                                    <!--Arrow right-->
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>

                                    <!--First-->
                                    <li class="page-item">
                                        <a class="page-link waves-effect waves-effect">Last</a>
                                    </li>

                                </ul>
                            </nav>
                            <!--/Pagination -->

                        </div>
                        <!--Bottom Table UI-->

                    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card.card-cascade.narrower {
  margin-top: 20px;
}
.card.card-cascade {
  width: 100%;
}
.card.card-cascade.narrower .view {
  margin-top: -20px;
}
.card.card-cascade .view.gradient-card-header {
  padding: 1.6rem 1rem;
  text-align: center;
}
.card.card-cascade .card-body {
  padding-top: 1.8rem;
}
.btn .fa,
.card .card-body {
  position: relative;
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
table {
  border-collapse: collapse;
  display: table;
  border-spacing: 2px;
  border-color: grey;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
table.table .label-table {
  margin: 0;
  padding: 0;
  line-height: 15px;
  height: 15px;
}
[type="checkbox"] + label,
[type="radio"] + label {
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
}
[type="checkbox"],
[type="radio"] {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}
.btn-rounded {
  border-radius: 10em;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
input[type="radio" i],
input[type="checkbox" i] {
  background-color: initial;
  cursor: default;
  border: initial;
}
[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border: 1.5px solid #8a8a8a;
  border-radius: 1px;
  margin-top: 2px;
  transition: 0.2s;
}
.light-blue-skin input[type="checkbox"]:checked + label:before {
  border-right: 2px solid #b4c2c9;
  border-bottom: 2px solid #b4c2c9;
}
[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #4285f4 #4285f4 transparent;
  transform: rotate(40deg);
  transform-origin: 100% 100%;
}

/*Dropdown select pagination*/
.select-wrapper {
  position: relative;
}
.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}
.select-wrapper span.caret {
  color: initial;
  position: absolute;
  right: 0;
  top: 16px;
  font-size: 10px;
}
.select-wrapper input.select-dropdown {
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #bdbdbd;
  outline: 0;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 15px;
  padding: 0;
  display: block;
}
.select-wrapper .select-dropdown {
  -webkit-user-select: none;
}
.colorful-select .dropdown-content {
  padding: 0.5rem;
}
.dropdown-primary .dropdown-content li a,
.dropdown-primary .dropdown-content li span:hover,
.dropdown-primary .dropdown-content li.active {
  background-color: #4285f4;
}
.dropdown-content li {
  clear: both;
  color: #000;
  cursor: pointer;
  line-height: 1.3rem;
  width: 100%;
  text-align: left;
  text-transform: none;
}
</style>