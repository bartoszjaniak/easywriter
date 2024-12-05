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
          name: 'Written words',
          data: [
            { x: '2022-01-01', y: 150 },
            { x: '2022-01-02', y: 200 },
            { x: '2022-01-03', y: 300 },
            { x: '2022-01-04', y: 100 },
            { x: '2022-01-05', y: 500 },
          ],
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
      yaxis: { min: 0, show: false },
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
