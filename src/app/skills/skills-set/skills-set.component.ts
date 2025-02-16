import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js/dist/types/index';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-skills-set',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './skills-set.component.html',
  styleUrl: './skills-set.component.scss',
})
export class SkillsSetComponent {
  barChartLegend = false;
  barChartPlugins = [ChartDataLabels];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'HTML',
      'CSS',
      'SCSS',
      'Javascript',
      'Typescript',
      'Angular',
      'NodeJS',
      'RgRx',
      'Karma',
      'Jasmine',
      'Jest',
      'Component Libraries',
      'Postgres and Python',
    ],
    datasets: [
      {
        data: [8, 8, 7, 9, 8.5, 9, 7, 9, 8, 5, 5, 7, 6],
        label: 'My Rating',
        backgroundColor: [
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
          'rgba(2, 82, 155, 1)',
        ],
        borderColor: [],
        borderWidth: 0,
      },
    ],
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 0.7,
    plugins: {
      tooltip: {
        displayColors: false,
      },
      datalabels: {
        clamp: true,
        // anchor: 'start',
        // align: 'top',
        anchor: 'end',
        align: 'start',
        rotation: -90,
        formatter: (value, context) => {
          return context.chart.data.labels?.at(context.dataIndex);
        },
        color: '#fff',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 1,
        max: 10,
      },
    },
  };
}
