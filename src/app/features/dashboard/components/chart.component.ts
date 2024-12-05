import { AfterViewInit, Component } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard-chart',
  host: {
    class: 'block shadow bg-my-bg-light p-4 rounded-lg',
  },
  template: ` <div id="data-series-chart"></div> `,
})
export class ChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      series: [
        {
          name: 'Developer Edition',
          data: [1500, 1418, 1456, 1526, 1356, 1256],
          color: '#000',
        },
      ],
      chart: {
        height: 200,
        type: 'area',
        toolbar: { show: false },
        dropShadow: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: { show: false },
      yaxis: { show: false },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.15,
          opacityTo: 0,
        },
      },

      tooltip: { enabled: true },
    };

    const chart = new ApexCharts(
      document.querySelector('#data-series-chart'),
      options
    );
    chart.render();
  }
}
