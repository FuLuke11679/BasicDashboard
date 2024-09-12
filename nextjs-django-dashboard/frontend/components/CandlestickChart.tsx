import { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current && data) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 300,
        layout: {
          background: { type: ColorType.Solid, color: 'white' },
        },
      });

      const candlestickSeries = chart.addCandlestickSeries();
      candlestickSeries.setData(data);

      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} />;
};