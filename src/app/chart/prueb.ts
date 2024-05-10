// import { Component, Input, OnInit } from '@angular/core';
// import { Chart, ChartType, registerables } from 'chart.js';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {

//   constructor() {
//     Chart.register(...registerables)
//   }

//   financialChart: any = {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: 'CHRT - Chart.js Corporation',
//         data: [12, 19, 3, 5, 2, 3], //* esta data debe cambiar
//       },
//       {
//         label: 'Close price',
//         type: 'line',
//         data: [14, 21, 5, 7, 4, 5], //* esta data debe cambiar
//         hidden: true,
//       }]
//     }
//   };


//   ngOnInit() {
//     new Chart('barChart', this.financialChart)
//   }

// }
