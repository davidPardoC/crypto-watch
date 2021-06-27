import React from 'react';
import LineChart from 'react-native-charts-wrapper/lib/LineChart';
import {processColor} from 'react-native-reanimated';
const COLOR_WHITE = processColor('#ffffff');
export const LineChartComponent = () => {
  return (
    <LineChart
      style={{flex: 1}}
      data={{
        dataSets: [
          {
            label: '',
            values: [
              {x: 1, y: 0.88},
              {x: 2, y: 0.77},
              {x: 3, y: 105},
              {x: 4, y: 135},
              {x: 5, y: 0.88},
              {x: 6, y: 0.77},
              {x: 7, y: 105},
              {x: 8, y: 135},
            ],
            config: {
              drawCircles: false,
              drawHighlightIndicators: false,
              color: COLOR_WHITE,
            },
          },
        ],
      }}
      chartDescription={{text: ''}}
      legend={{enabled: false}}
      yAxis={{
        right: {
          enabled: true,
          textColor: processColor('#ffffff'),
        },
        left: {
          enabled: false,
        },
      }}
      xAxis={{
        enabled: true,
        textColor: processColor('#ffffff'),
        position: 'BOTTOM',
      }}
    />
  );
};
