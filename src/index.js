import {GoogleCharts} from 'google-charts';
import {germany as vaccinationData, lastUpdate} from './data.json';

const vaccinations = vaccinationData.historical.reverse().map(entry => [new Date(entry.date), entry.value]);
const lastUpdateDate = new Date(lastUpdate);

function drawChart() {
  const data = new GoogleCharts.api.visualization.arrayToDataTable([['date', 'People vaccinated'], ...vaccinations]);

  const options = {
    hAxis: {
      backgroundColor: '#55aa00',
      format: 'dd.MM.y',
    },
    width: 900,
    height: 500,
  };

  const chart = new GoogleCharts.api.visualization.AreaChart(document.getElementById('chart'));

  chart.draw(data, options);
}

GoogleCharts.load(drawChart, {packages: ['corechart']});

const updatedElement = document.getElementById('updated');
updatedElement.innerHTML = `Updated on ${lastUpdateDate.toLocaleDateString()}, ${lastUpdateDate.toLocaleTimeString()}`;
