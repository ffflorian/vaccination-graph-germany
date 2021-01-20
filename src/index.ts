import {germany as vaccinationData, lastUpdate} from './data.json';
const Google: typeof google = google;

const vaccinations = vaccinationData.historical
  .reverse()
  .map(entry => [new Date(entry.date), entry.peopleVaccinated, entry.peopleFullyVaccinated]);
const lastUpdateDate = new Date(lastUpdate);

function drawChart() {
  const data = Google.visualization.arrayToDataTable([
    ['date', 'People vaccinated', 'People fully vaccinated'],
    ...vaccinations,
  ]);

  const options: google.visualization.AreaChartOptions = {
    hAxis: {
      format: 'dd.MM.y',
    },
    colors: ['#55aa00', '#0fa8a5'],
    width: 900,
    height: 500,
  };

  const chart = new Google.visualization.AreaChart(document.getElementById('chart'));

  chart.draw(data, options);
}

Google.charts.load('current', {packages: ['corechart']});
Google.charts.setOnLoadCallback(drawChart);

const updatedElement = document.getElementById('updated');
updatedElement.innerHTML += ` ${lastUpdateDate.toLocaleDateString()}, ${lastUpdateDate.toLocaleTimeString()}`;
