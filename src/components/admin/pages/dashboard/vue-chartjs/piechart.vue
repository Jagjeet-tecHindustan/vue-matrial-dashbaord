<template>
  <pie-chart></pie-chart>
</template>

<script>
import Vue from "vue";
import VueChartJs from "vue-chartjs";
Vue.component("pie-chart", {
  extends: VueChartJs.Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
});
export default {};
</script>
