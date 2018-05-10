<template>
  <div id="basic-container" class="container-fluid">
    <div class="row">
        <div class="col-md-8">
            <div class="card card-cascade narrower">
                <div class="view py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">
                  <div class="col-md-3 offset-md-4">
                    <a class="white-text mx-3" style="margin-left: 1rem!important;">Form</a>
                  </div>
                </div>
                <div class="card-body">
                  <edit-form></edit-form>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card testimonial-card" style="border:0px;">

                        <!--Bacground color-->
                        <div class="card-up purple-gradient">
                        </div>

                        <!--Avatar-->
                        <div class="avatar mx-auto white">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2820%29.jpg" class="rounded-circle">
                        </div>

                        <div class="card-body">
                            <!--Name-->
                            <h4 class="card-title">Abc Xyz</h4>
                            <hr>
                            <!--Quotation-->
                            <p>
                                <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                            <button class="btn aqua-gradient btn-rounded waves-effect waves-light">Follow</button>
                        </div>

             </div>
        </div>
    </div>
      
  </div>
</template>

<script>
import Editform from "./Editform";
export default {
  components: {
    "edit-form": Editform
  }
};
</script>

<style>
.info-color-dark {
  background-color: #2bbbad !important;
}

.testimonial-card .card-up {
  overflow: hidden;
  height: 120px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.purple-gradient {
  background: -webkit-linear-gradient(50deg, #ff6ec4, #51d0e0) !important;
  background: linear-gradient(40deg, #e782bf, #51d0e0) !important;
}
.testimonial-card .avatar {
  border-radius: 50%;
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
}
.carousel-thumbnails .carousel-indicators .active,
.picker__box .picker__header .picker__select--month.browser-default,
.picker__box .picker__header .picker__select--year.browser-default,
.picker__list-item,
.white {
  background-color: #fff !important;
}
.ml-auto,
.mx-auto {
  margin-right: auto !important;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.testimonial-card .avatar img {
  width: 100%;
}
.rounded-circle {
  border-radius: 50% !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
.testimonial-card .card-body {
  text-align: center;
}
.card-title {
  margin-bottom: 0.75rem;
}
.card-body p {
  font-weight: 300;
}

.aqua-gradient {
  background: -webkit-linear-gradient(50deg, #2096ff, #05ffa3) !important;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}
</style>