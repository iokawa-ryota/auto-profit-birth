import React from "react";
import { BarChart3, AlertTriangle, Calculator, Coins } from "lucide-react";
import { formatCurrency, formatBtcPrice } from "../utils/formatters";
import { calculateDistanceToBottom } from "../utils/calculations";

/**
 * ヘッダーコンポーネント
 * 主要な取引統計を表示
 */
export const Header = ({ currentPrice, strategy, score }) => {
  const distanceToBottom = calculateDistanceToBottom(
    currentPrice,
    strategy.bottomTarget,
  );

  return (
    <header className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* BTC/USDT */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        </div>
        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1 text-center md:text-left">
          BTC/USDT (Binance JP)
        </div>
        <div className="text-2xl font-mono text-blue-400 font-bold text-center md:text-left">
          {formatBtcPrice(currentPrice)}
        </div>
      </div>

      {/* Target Bottom */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl backdrop-blur-sm">
        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1 text-center md:text-left">
          Target Bottom
        </div>
        <div className="text-2xl font-mono text-emerald-500 font-bold text-center md:text-left">
          ${formatCurrency(strategy.bottomTarget)}
        </div>
        <div className="text-[10px] text-emerald-500/70 mt-1 text-center md:text-left">
          Gap: {distanceToBottom}%
        </div>
      </div>

      {/* Accumulated Profit */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl backdrop-blur-sm">
        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1 text-center md:text-left">
          Accumulated Profit
        </div>
        <div className="text-2xl font-mono text-orange-400 font-bold text-center md:text-left">
          +{formatCurrency(score.totalProfit)}{" "}
          <span className="text-xs">JPY</span>
        </div>
      </div>

      {/* Fee Savings */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl backdrop-blur-sm">
        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1 text-center md:text-left">
          Fee Savings (BNB)
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-yellow-500">
          <Calculator size={18} />+{formatCurrency(score.savedFees)}{" "}
          <span className="text-xs text-zinc-500">JPY SAVED</span>
        </div>
      </div>
    </header>
  );
};
