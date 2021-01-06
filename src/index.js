import {GoogleCharts} from 'google-charts';
import * as data from './data.json';

const vaccinations = data.germany.historical.map(entry => [new Date(entry.date), entry.value]).reverse();

GoogleCharts.load(drawChart, {packages: ['line']});

function drawChart() {
  const data = new GoogleCharts.api.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'People vaccinated');

  data.addRows(vaccinations);

  const options = {
    chart: {
      title: 'COVID-19 Vaccination Graph for Germany',
    },
    hAxis: {
      format: 'dd.MM.y',
    },
    vAxis: {
      format: 'decimal',
    },
    width: 900,
    height: 500,
  };

  const chart = new GoogleCharts.api.charts.Line(document.getElementById('graph'));

  chart.draw(data, GoogleCharts.api.charts.Line.convertOptions(options));
}
