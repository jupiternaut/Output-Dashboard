import React from 'react';
import { ArrowUp, ArrowDown, HelpCircle } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../utils';

interface MetricCardProps {
  title: string;
  value: number;
  deltaPercent?: number; // Optional now
  unit?: string;
  variant?: 'default' | 'primary';
  tooltip?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  deltaPercent,
  unit = '',
  variant = 'default',
  tooltip,
}) => {
  const isPrimary = variant === 'primary';
  // Check if deltaPercent is defined (including 0)
  const hasDelta = deltaPercent !== undefined;
  const isPositive = hasDelta ? deltaPercent! >= 0 : false;
  
  const trendColor = isPositive ? 'text-red-500' : 'text-green-500';
  const TrendIcon = isPositive ? ArrowUp : ArrowDown;

  return (
    <div
      className={`
        relative p-5 rounded-xl border shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between
        ${isPrimary ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-100'}
      `}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-sm font-medium ${isPrimary ? 'text-blue-100' : 'text-gray-500'} flex items-center gap-1`}>
            {title}
            {tooltip && <HelpCircle size={14} className="opacity-70 cursor-help" title={tooltip} />}
          </h3>
        </div>

        <div className="mb-2">
          <span className="text-3xl font-bold tracking-tight">
            {formatCurrency(value)}
          </span>
          <span className={`ml-1 text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-400'}`}>{unit}</span>
        </div>
      </div>

      {hasDelta && (
        <div className="flex items-center text-xs font-medium mt-2">
            <span className={`${isPrimary ? 'text-blue-100' : 'text-gray-500'} mr-2`}>
            较上月
            </span>
            <span
            className={`
                flex items-center
                ${isPrimary ? (isPositive ? 'text-red-200' : 'text-green-200') : trendColor}
            `}
            >
            {formatPercentage(Math.abs(deltaPercent!))}
            <TrendIcon size={14} className="ml-0.5" />
            </span>
        </div>
      )}
      
      {!hasDelta && (
          <div className="h-4 mt-2"></div> /* Spacer to keep alignment if needed, or remove for compact */
      )}
    </div>
  );
};

export default MetricCard;