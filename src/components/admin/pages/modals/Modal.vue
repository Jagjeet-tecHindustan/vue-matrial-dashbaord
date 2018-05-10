<template>
  <div id="basic-container" class="container-fluid">

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalQuickView">Launch modal</button>
                    <!-- Modal: modalQuickView -->
                    <div class="modal fade" id="modalQuickView" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-lg-5">
                                <!--Carousel Wrapper-->
                                <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                                    <!--Slides-->
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" alt="Second slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" alt="Third slide">
                                        </div>
                                    </div>
                                    <!--/.Slides-->
                                    <!--Controls-->
                                    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    <!--/.Controls-->
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel-thumb" data-slide-to="0" class="active"> <img class="d-block img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"></li>
                                        <li data-target="#carousel-thumb" data-slide-to="1"><img class="d-block img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"></li>
                                        <li data-target="#carousel-thumb" data-slide-to="2"><img class="d-block img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" ></li>
                                    </ol>
                                </div>
                                <!--/.Carousel Wrapper-->
                            </div>
                            <div class="col-lg-7">
                                <h2 class="h2-responsive product-name">
                                <strong>Product Name</strong>
                                </h2>
                                <h4 class="h4-responsive">
                                <span class="green-text">
                                    <strong>$49</strong>
                                </span>
                                <span class="grey-text">
                                    <small>
                                    <s>$89</s>
                                    </small>
                                </span>
                                </h4>

                                <!--Accordion wrapper-->
                                <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">

                                    <!-- Accordion card -->
                                    <div class="card">

                                        <!-- Card header -->
                                        <div class="card-header" role="tab" id="headingOne">
                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h5 class="mb-0">
                                                    Description <i class="fa fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        <!-- Card body -->
                                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Accordion card -->

                                    <!-- Accordion card -->
                                    <div class="card">

                                        <!-- Card header -->
                                        <div class="card-header" role="tab" id="headingTwo">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h5 class="mb-0">
                                                    Details <i class="fa fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        <!-- Card body -->
                                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion" >
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Accordion card -->

                                    <!-- Accordion card -->
                                    <div class="card">

                                        <!-- Card header -->
                                        <div class="card-header" role="tab" id="headingThree">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <h5 class="mb-0">
                                                    Shipping <i class="fa fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>

                                        <!-- Card body -->
                                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Accordion card -->
                                </div>
                                <!--/.Accordion wrapper-->

                                <!-- Add to Cart -->
                                <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                    
                                    </div>
                                    <div class="col-md-6">
                                    </div>
                                    </div>
                                </div>
                                <div class="text-center">

                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button class="btn btn-primary">Add to cart
                                    <i class="fa fa-cart-plus ml-2" aria-hidden="true"></i>
                                    </button>
                                </div>
                                </div>
                                <!-- /.Add to Cart -->
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>



                    <!-- Button trigger modal-->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalYT">Launch modal</button>
                    <!--Modal: modalYT-->
                    <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <!--Content-->
                            <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <!--Footer-->
                                <div class="modal-footer justify-content-center flex-column flex-md-row">
                                    <span class="mr-4">Spread the word!</span>
                                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <!--/.Content-->
                        </div>
                    </div>
                    <!--Modal: modalYT-->
                         
                
                <!-- Button trigger modal-->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCart">Launch modal</button>
                <!-- Modal: modalCart -->
                <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <!--Header-->
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel">Your cart</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <!--Body-->
                            <div class="modal-body">

                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product name</th>
                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Product 1</td>
                                            <td>100$</td>
                                            <td><a><i class="fa fa-remove"></i></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Product 2</td>
                                            <td>100$</td>
                                            <td><a><i class="fa fa-remove"></i></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Product 3</td>
                                            <td>100$</td>
                                            <td><a><i class="fa fa-remove"></i></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Product 4</td>
                                            <td>100$</td>
                                            <td><a><i class="fa fa-remove"></i></a></td>
                                        </tr>
                                        <tr class="total">
                                            <th scope="row">5</th>
                                            <td>Total</td>
                                            <td>400$</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <!--Footer-->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                                <button class="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal: modalCart -->


                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalPoll">Launch modal</button>
                <!-- Modal: modalPoll -->
                <div class="modal fade right" id="modalPoll" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                data-backdrop="false">
                <div class="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
                    <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <p class="heading lead">Feedback request
                        </p>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">×</span>
                        </button>
                    </div>

                    <!--Body-->
                    <div class="modal-body">
                        <div class="text-center">
                        <i class="fa fa-file-text-o fa-4x mb-3 animated rotateIn"></i>
                        <p>
                            <strong>Your opinion matters</strong>
                        </p>
                        <p>Have some ideas how to improve our product?
                            <strong></strong>Give us your feedback.</strong>
                        </p>
                        </div>

                        <hr>

                        <!-- Radio -->
                        <p class="text-center">
                        <strong>Your rating</strong>
                        </p>
                        <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-179" value="option1" checked>
                    <label class="form-check-label" for="radio-179">Very good</label>
                    </div>

                    <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-279" value="option2">
                    <label class="form-check-label" for="radio-279">Good</label>
                    </div>

                    <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-379" value="option3">
                    <label class="form-check-label" for="radio-379">Mediocre</label>
                    </div>
                    <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-479" value="option4">
                    <label class="form-check-label" for="radio-479">Bad</label>
                    </div>
                    <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-579" value="option5">
                    <label class="form-check-label" for="radio-579">Very bad</label>
                    </div>
                        <!-- Radio -->

                        <p class="text-center">
                        <strong>What could we improve?</strong>
                        </p>
                        <!--Basic textarea-->
                        <div class="md-form">
                        <textarea type="text" id="form79textarea" class="md-textarea form-control" rows="3"></textarea>
                        <label for="form79textarea">Your message</label>
                        </div>

                    </div>

                    <!--Footer-->
                    <div class="modal-footer justify-content-center">
                        <a type="button" class="btn btn-primary waves-effect waves-light">Send
                        <i class="fa fa-paper-plane ml-1"></i>
                        </a>
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</a>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Modal: modalPoll -->
                        
                        

                    <!-- Button trigger modal-->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDiscount">Launch modal</button>
                    <!--Modal: modalDiscount-->
                    <div class="modal fade right" id="modalDiscount" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
                    data-backdrop="false">
                    <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" role="document">
                        <!--Content-->
                        <div class="modal-content">
                            <!--Header-->
                            <div class="modal-header">
                                <p class="heading">Discount offer: <strong>10% off</strong></p>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text">&times;</span>
                            </button>
                            </div>

                            <!--Body-->
                            <div class="modal-body">

                                <div class="row">
                                    <div class="col-3">
                                        <p></p>
                                        <p class="text-center"><i class="fa fa-gift fa-4x"></i></p>
                                    </div>

                                    <div class="col-9">
                                        <p>Sharing is caring. Therefore, from time to time we like to give our visitors small gifts.
                                            Today is one of those days.</p>
                                        <p><strong>Copy the following code and use it at the checkout. It's valid for <u>one day</u>.</strong></p>
                                        <h2><span class="badge">v52gs1</span></h2>

                                    </div>
                                </div>
                            </div>

                            <!--Footer-->
                            <div class="modal-footer flex-center">
                                <button href="https://mdbootstrap.com/product/material-design-for-bootstrap-pro/" class="btn btn-danger">Get it now <i class="fa fa-diamond ml-1"></i></button>
                                <button type="button" class="btn btn-outline-danger waves-effect" data-dismiss="modal">No, thanks</button>
                            </div>
                        </div>
                        <!--/.Content-->
                    </div>
                    </div>
                    <!--Modal: modalDiscount-->


                <!-- Button trigger modal-->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCoupon">Launch modal</button>

                <!--Modal: modalCoupon-->
                <div class="modal fade top" id="modalCoupon" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
                data-backdrop="false">
                <div class="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
                    <!--Content-->
                    <div class="modal-content">
                        <!--Body-->
                        <div class="modal-body">
                            <div class="row d-flex justify-content-center align-items-center">

                                <h2><span class="badge">v52gs1</span></h2>
                                <p class="pt-3 mx-4">We have a gift for you! Use this code to get a <strong>10% discount</strong>.</p>

                                <button type="button" class="btn btn-success">Get it <i class="fa fa-book ml-1"></i></button>
                                <button type="button" class="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</button>
                            </div>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
                </div>
                <!--Modal: modalCoupon-->
                                 
                                            
 </div>   
</template>

<script>
export default {};
</script>

<style>
.carousel .carousel-indicators li {
  width: 2.625rem;
  height: 2.625rem;
}
</style>