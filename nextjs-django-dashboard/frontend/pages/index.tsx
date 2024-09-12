import { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { CandlestickChart } from '../components/CandlestickChart';

ChartJS.register(...registerables);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export default function Home() {
  const [candlestickData, setCandlestickData] = useState<any>(null);
  const [lineChartData, setLineChartData] = useState<ChartData | null>(null);
  const [barChartData, setBarChartData] = useState<ChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestick, line, bar, pie] = await Promise.all([
          fetch('http://localhost:8000/api/candlestick-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/line-chart-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/bar-chart-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/pie-chart-data/').then(res => res.json())
        ]);

        setCandlestickData(candlestick);
        setLineChartData({
          labels: line.labels,
          datasets: [{
            label: 'Line Chart',
            data: line.data,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        });
        setBarChartData({
          labels: bar.labels,
          datasets: [{
            label: 'Bar Chart',
            data: bar.data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          }]
        });
        setPieChartData({
          labels: pie.labels,
          datasets: [{
            label: 'Pie Chart',
            data: pie.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candlestickData && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2>
            <CandlestickChart data={candlestickData.data} />
          </div>
        )}
        {lineChartData && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
            <Line data={lineChartData} />
          </div>
        )}
        {barChartData && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
            <Bar data={barChartData} />
          </div>
        )}
        {pieChartData && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
            <Pie data={pieChartData} />
          </div>
        )}
      </div>
    </div>
  );
}