<template>
  <div id="basic-container" class="container-fluid">

    <div class="row">

      <div class="col-xl-3 col-md-6 mb-r">
        <div class="card card-cascade cascading-admin-card">
          <div class="admin-up">
            <i class="fa fa-money primary-color"></i>
            <div class="data">
              <p>SALES</p>
              <h4><strong>$2000</strong></h4>
            </div>
          </div>
          <div class="card-body">
            <div class="progress">
              <div class="progress-bar bg-primary" aria-valuemin="0" aria-valuemax="100" role="progressbar" style="width: 25%"></div>
            </div>
            <p class="card-text">Better than last week (25%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-r">
        <div class="card card-cascade cascading-admin-card">
          <div class="admin-up">
            <i class="fa fa-line-chart warning-color"></i>
            <div class="data">
              <p>SUBSCRIPTIONS</p>
              <h4><strong>200</strong></h4>
            </div>
          </div>
          <div class="card-body">
            <div class="progress">
              <div class="progress-bar bg grey darken-2" aria-valuemin="0" aria-valuemax="100" role="progressbar" style="width: 25%"></div>
            </div>
            <p class="card-text">Better than last week (25%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-r">
        <div class="card card-cascade cascading-admin-card">
          <div class="admin-up">
            <i class="fa fa-pie-chart light-blue lighten-1"></i>
            <div class="data">
              <p>TRAFFIC</p>
              <h4><strong>20000</strong></h4>
            </div>
          </div>
          <div class="card-body">
            <div class="progress">
              <div class="progress-bar bg grey darken-2" aria-valuemin="0" aria-valuemax="100" role="progressbar" style="width: 75%"></div>
            </div>
            <p class="card-text">Better than last week (75%)</p>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-r">
        <div class="card card-cascade cascading-admin-card">
          <div class="admin-up">
            <i class="fa fa-bar-chart red accent-2"></i>
            <div class="data">
              <p>ORGANIC TRAFFIC</p>
              <h4><strong>2000</strong></h4>
            </div>
          </div>
          <div class="card-body">
            <div class="progress">
              <div class="progress-bar bg-danger" aria-valuemin="0" aria-valuemax="100" role="progressbar" style="width: 25%"></div>
            </div>
            <p class="card-text">Better than last week (25%)</p>
          </div>
        </div>
      </div>

    </div>
  
  <div style="height:20px;"></div>

    <div class="row">

      <div class="col-md-8">
        <div class="card">
            <div class="card-body">
              <line-chart></line-chart> 
            </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <doughnut-chart></doughnut-chart>
            </div>
        </div>        
      </div>
    </div>
    
    <div style="height:20px;"></div>

    <div class="row">
      <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <pie-chart></pie-chart> 
            </div>
        </div>
      </div>

      <div class="col-md-9">
        <div class="card">
            <div class="card-body">
                <bar-chart></bar-chart>
            </div>
        </div>
      </div>
    </div>

    <div style="height:20px;"></div>

    <div class="row">
      <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <bubble-chart></bubble-chart> 
            </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <polar-chart></polar-chart>
            </div>
        </div>
      </div>
    </div>

    <div style="height:20px;"></div>

    <div class="row">
      <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <radar-chart></radar-chart> 
            </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <scatter-chart></scatter-chart>
            </div>
        </div>
      </div>
    </div>

<div style="height:20px;"></div>
  </div>
</template>

<script>
import Barchart from "./vue-chartjs/Barchart";
import Bubble from "./vue-chartjs/Bubble";
import Doughnut from "./vue-chartjs/Doughnut";
import Linechart from "./vue-chartjs/Linechart";
import piechart from "./vue-chartjs/piechart";
import Polar from "./vue-chartjs/Polar";
import Radar from "./vue-chartjs/Radar";
import Scatter from "./vue-chartjs/Scatter";
export default {
  components: {
    "line-chart": Linechart,
    "bubble-chart": Bubble,
    "bar-chart": Barchart,
    "doughnut-chart": Doughnut,
    "pie-chart": piechart,
    "polar-chart": Polar,
    "radar-chart": Radar,
    "scatter-chart": Scatter
  }
};
</script>

<style>
/* Main container */
#basic-container {
  padding-left: 22%;
  padding-top: 8%;
  background-color: rgb(240, 236, 236);
}

/* First row with 4 cols */
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fa {
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
}
.white-skin .primary-color {
  background-color: #4285f4 !important;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.cascading-admin-card .admin-up .data p {
  color: #999;
  font-size: 12px;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.card.card-cascade .card-body {
  padding-top: 1.8rem;
}
.progress {
  height: 4px !important;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
}
.card .card-body p {
  margin-bottom: 1rem;
}
.card .card-text {
  font-size: 0.9rem;
  color: #747373;
  font-weight: 400;
}
</style>