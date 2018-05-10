<template>
  <bar-chart></bar-chart>
</template>

<script>
import Vue from "vue";
import VueChartJs from "vue-chartjs";
Vue.component("bar-chart", {
  extends: VueChartJs.Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#2bbbad",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
});
export default {};
</script>
