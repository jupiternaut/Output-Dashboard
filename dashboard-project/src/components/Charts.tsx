import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ConstructionData } from '../types';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface ChartProps {
  data: ConstructionData[];
  selectedStore: string;
  selectedCity: string;
}

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#6366f1', '#ec4899'];

export const ChartSection: React.FC<ChartProps> = (props) => {
    const [chartType, setChartType] = useState<'line' | 'bar'>('bar');

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    {props.selectedStore === '全部' ? '各门店产值趋势对比' : '关键指标趋势分析'}
                </h3>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setChartType('bar')}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                            chartType === 'bar' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <BarChart3 size={14} />
                        <span>对比图</span>
                    </button>
                    <button
                        onClick={() => setChartType('line')}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                            chartType === 'line' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <TrendingUp size={14} />
                        <span>趋势图</span>
                    </button>
                </div>
            </div>
            
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'line' ? <LineTrendChart {...props} /> : <BarCompositionChart {...props} />}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const BarCompositionChart: React.FC<ChartProps> = ({ data, selectedStore, selectedCity }) => {
     // Prepare data: Aggregate by month
     // If All Stores: Show Stacked or Side-by-side total Output vs Received vs Profit for the whole filtered set?
     // Or show breakdown by store?
     // The "nice" bar chart usually compares simple metrics over time.
     
     const chartData = React.useMemo(() => {
        const dates = Array.from(new Set(data.map(d => d.date))).sort();
        return dates.map(date => {
            const entry: any = { date };
            let totalOutput = 0;
            let totalReceived = 0;
            let totalProfit = 0;

            data.forEach(d => {
                if (d.date !== date) return;
                if (selectedCity !== '全部' && d.city !== selectedCity) return;
                if (selectedStore !== '全部' && d.store !== selectedStore) return;

                totalOutput += d.totalOutputValue;
                totalReceived += d.received;
                totalProfit += d.totalGrossProfit;
            });

            entry['总产值'] = totalOutput;
            entry['已收回款'] = totalReceived;
            entry['总毛利'] = totalProfit;
            return entry;
        });
     }, [data, selectedStore, selectedCity]);

     return (
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
            <YAxis tickLine={false} axisLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
            <Tooltip 
                cursor={{ fill: '#f9fafb' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="总产值" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="已收回款" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="总毛利" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={40} />
        </BarChart>
     );
}

const LineTrendChart: React.FC<ChartProps> = ({ data, selectedStore, selectedCity }) => {
  const isAllStores = selectedStore === '全部';
  
  const chartData = React.useMemo(() => {
    const dates = Array.from(new Set(data.map(d => d.date))).sort();
    
    return dates.map(date => {
      const entry: any = { date };
      
      data.forEach(d => {
        if (d.date !== date) return;
        if (selectedCity !== '全部' && d.city !== selectedCity) return;
        
        if (isAllStores) {
           if (!entry[d.store]) entry[d.store] = 0;
           entry[d.store] += d.totalOutputValue;
        } else {
           if (d.store !== selectedStore) return;
           entry['总产值'] = (entry['总产值'] || 0) + d.totalOutputValue;
           entry['已收回款'] = (entry['已收回款'] || 0) + d.received;
           entry['总毛利'] = (entry['总毛利'] || 0) + d.totalGrossProfit;
        }
      });
      return entry;
    });
  }, [data, selectedStore, selectedCity, isAllStores]);

  const linesToDraw = React.useMemo(() => {
    if (chartData.length === 0) return [];
    const keys = Object.keys(chartData[0]).filter(k => k !== 'date');
    return keys;
  }, [chartData]);

  return (
      <LineChart data={chartData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
        <XAxis 
            dataKey="date" 
            tickLine={false} 
            axisLine={false} 
            tick={{fill: '#9ca3af', fontSize: 12}} 
            dy={10}
        />
        <YAxis 
            tickLine={false} 
            axisLine={false} 
            tick={{fill: '#9ca3af', fontSize: 12}}
            tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
            contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        
        {linesToDraw.map((key, index) => (
            <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={key}
                stroke={COLORS[index % COLORS.length]}
                strokeWidth={3}
                dot={{ r: 4, fill: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
            />
        ))}
      </LineChart>
  );
};