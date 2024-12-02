import { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { CartesianChart, Bar, StackedBar } from "victory-native";

const DATA = (length: number = 10) =>
  Array.from({ length }, (_, index) => ({
    month: index + 1,
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
    favouriteCount: Math.floor(Math.random() * (100 - 50 + 1)) + 20,
    sales: Math.floor(Math.random() * (100 - 50 + 1)) + 25,
  }));

const innerPadding = 10;
const roundedCorner = 5;

const CHART_HEIGHT = 327;

export function StackedBarChart() {
  const [data] = useState(DATA(15));
  const SCREEN_WIDTH = useWindowDimensions().width;

  return (
    <View style={{ height: CHART_HEIGHT, width: SCREEN_WIDTH }}>
      <CartesianChart
        data={data}
        xKey="month"
        yKeys={["listenCount", "favouriteCount", "sales"]}
        domain={{ y: [0, 250] }}
        axisOptions={{
          formatXLabel: (value) => {
            const date = new Date(2023, value - 1);
            return date.toLocaleString("default", { month: "short" });
          },
          lineColor: "transparent",
          labelColor: "#333",
        }}
        padding={{ left: 16, right: 16, top: 20, bottom: 32 }}
        domainPadding={{ x: [0, 0] }}
      >
        {({ points, chartBounds }) => {
          return (
            <StackedBar
              animate={{ type: "spring" }}
              innerPadding={innerPadding}
              chartBounds={chartBounds}
              points={[points.listenCount, points.favouriteCount, points.sales]}
              colors={["orange", "gold", "sienna"]}
              barWidth={4}
              barOptions={({ isBottom, isTop }) => {
                // 
                return {
                  roundedCorners: isTop
                    ? {
                        topLeft: roundedCorner,
                        topRight: roundedCorner,
                      }
                    : isBottom
                      ? {
                          bottomRight: roundedCorner,
                          bottomLeft: roundedCorner,
                        }
                      : undefined,
                };
              }}
            />
          );
        }}
      </CartesianChart>
    </View>
  );
}