import {GoogleCharts} from 'google-charts';
import {germany as vaccinationData, lastUpdate} from './data.json';

const vaccinations = vaccinationData.historical.map(entry => [new Date(entry.date), entry.value]).reverse();
const lastUpdateDate = new Date(lastUpdate)

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

GoogleCharts.load(drawChart, {packages: ['line']});

const updatedElement = document.getElementById('updated')
updatedElement.innerHTML = `Updated on ${lastUpdateDate.toLocaleDateString()}, ${lastUpdateDate.toLocaleTimeString()}`
