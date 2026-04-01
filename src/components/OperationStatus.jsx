import React from "react";
import { BarChart3, AlertTriangle } from "lucide-react";
import {
  calculateDistanceToBottom,
  calculateNetProfit,
} from "../utils/calculations";
import { formatCurrency, formatBtcPrice } from "../utils/formatters";

/**
 * 運用ステータスコンポーネント
 * グリッド取引の状況、手数料最適化等を表示
 */
export const OperationStatus = ({
  currentPrice,
  strategy,
  bnbBalance,
  useBnbForFees,
  setUseBnbForFees,
}) => {
  const distanceToBottom = calculateDistanceToBottom(
    currentPrice,
    strategy.bottomTarget,
  );
  const netProfit = calculateNetProfit(useBnbForFees);

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
      <div className="bg-zinc-800/30 px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
        <h2 className="font-bold flex items-center gap-2 text-sm">
          <BarChart3 size={18} className="text-blue-400" />
          Binance Japan 運用ステータス
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-zinc-500">
            FEE DISCOUNT
          </span>
          <button
            onClick={() => setUseBnbForFees(!useBnbForFees)}
            className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${
              useBnbForFees ? "bg-yellow-500" : "bg-zinc-700"
            }`}
          >
            <div
              className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                useBnbForFees ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="p-8">
        {/* プログレスバー */}
        <div className="relative h-20 bg-zinc-950/50 rounded-2xl mb-10 flex items-center px-6 border border-zinc-800/50">
          <div
            className="absolute left-0 top-0 bottom-0 bg-blue-500/5 rounded-l-2xl border-r border-blue-500/20"
            style={{ width: "45%" }}
          />
          <div className="z-10 flex justify-between w-full items-center">
            <div className="text-center">
              <div className="text-[9px] text-zinc-500 mb-1 font-black uppercase">
                大底ターゲット
              </div>
              <div className="text-sm font-mono font-bold text-emerald-500">
                ${formatCurrency(strategy.bottomTarget)}
              </div>
            </div>
            <div className="flex-1 px-10">
              <div className="h-[2px] bg-zinc-800 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 text-[10px] text-zinc-500 font-mono">
                  {distanceToBottom}% TO GO
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[9px] text-blue-400 mb-1 font-black uppercase underline decoration-2 underline-offset-4">
                Current
              </div>
              <div className="text-sm font-mono font-bold text-blue-400">
                ${(currentPrice / 1000).toFixed(1)}k
              </div>
            </div>
          </div>
        </div>

        {/* 統計情報グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-zinc-950/40 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors text-center md:text-left">
            <h4 className="text-[10px] font-black text-zinc-600 uppercase mb-4 tracking-widest">
              Fee Optimizer
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-500">BNB Balance</span>
                <span className="font-mono text-lg font-bold text-yellow-500">
                  {bnbBalance.toFixed(4)} BNB
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-500">Estimated Runs</span>
                <span className="font-mono text-lg font-bold">
                  ~4,000 trades
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 bg-zinc-950/40 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors text-center md:text-left">
            <h4 className="text-[10px] font-black text-zinc-600 uppercase mb-4 tracking-widest">
              Active Rotation
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-500">Grid Target</span>
                <span className="font-mono text-lg font-bold">
                  {(strategy.rotationTarget * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-500">Net Profit/Trade</span>
                <span className="font-mono text-orange-400 font-bold text-lg">
                  {netProfit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
