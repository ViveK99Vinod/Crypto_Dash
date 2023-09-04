import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor () {
    this.chartOptions={


      chart: {
        backgroundColor:'black',
        type: 'column',

        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40

        },

    },

    title: {
      text: ' CRYPTO MARKET STATUS 2019-2023',
      style: {
        color: 'white',
        align: 'center'
      }
    },

    xAxis: {
        labels: {
          alignTicks:{
            enabled:false
          },
            skew3d: true,
            style: {
              color: 'white',
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,

        title: {
          gridLineWidth:0,
            text: 'Market Growth',
            skew3d: true,
            style: {
                fontSize: '16px',
                color: 'white',
            },



        }
    },

    tooltip: {

        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        series: {
            pointStart: 2016
        },
        column: {
            stacking: 'normal',
            depth: 40
        },

    },

    series: [{

      name: 'Bit-coin',
      data: [650, 654, 643, 612, 572],
      stack: 'Europe',

    }, {

      name: 'Ethereum',
      data: [564, 562, 582, 571, 533],
      stack: 'Europe'

    }, {
        name: 'VIA-Coin',
        data: [368, 378, 378, 367, 363],
        stack: 'Asia'
    }, {

      name: 'Lite coin',
      data: [563, 567, 590, 582, 571],
      stack: 'Asia'

    }]










  }


}


}
