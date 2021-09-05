import React from 'react';
import {View} from 'react-native';
import LineChart from 'react-native-charts-wrapper/lib/LineChart';
import {processColor} from 'react-native-reanimated';
const COLOR_WHITE = processColor('#ffffff');
export const LineChartComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 0.08)',
        padding: 5,
        borderRadius: 10,
        justifyContent:'center'
      }}>
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
                {x: 9, y: 135},
                {x: 10, y:  0.77},
              ],
              config: {
                mode: "HORIZONTAL_BEZIER",
                drawCircles: false,
                drawHighlightIndicators: false,
                color: COLOR_WHITE,
                drawFilled: true,
                drawValues:false,
                lineWidth:2
              },
            },
          ],
        }}
        animation={{
          durationX: 0,
          durationY: 1500,
          easingY: "EaseInOutQuart"
        }}
        autoScaleMinMaxEnabled={true}
        touchEnabled={true}
        dragEnabled={true}
        doubleTapToZoomEnabled={true}
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
    </View>
  );
};
