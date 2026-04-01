import React from "react";
import { Layers, ChevronUp } from "lucide-react";
import { calculateSpread } from "../utils/calculations";

/**
 * オーダーブックコンポーネント
 * Binance JPの板情報をリアルタイム表示
 */
export const OrderBook = ({ currentPrice, orderBook }) => {
  const spread = calculateSpread(orderBook);

  return (
    <section className="bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
      <div className="bg-zinc-900/80 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Layers size={16} className="text-blue-400" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            Binance JP Order Book
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500">
          Spread: {spread}
        </span>
      </div>

      <div className="flex-1 flex flex-col font-mono text-[11px] p-2 overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 to-black">
        {/* Ask(売り注文) */}
        <div className="flex-1 flex flex-col-reverse overflow-hidden mb-1">
          {orderBook.asks.map((ask, i) => (
            <div
              key={i}
              className="group flex justify-between px-3 py-0.5 hover:bg-red-500/5 relative transition-colors"
            >
              <div
                className="absolute right-0 top-0 bottom-0 bg-red-500/10 transition-all duration-700"
                style={{ width: `${(ask.amount * 40).toFixed(0)}%` }}
              />
              <span className="text-red-400/90 z-10">
                {ask.price.toFixed(2)}
              </span>
              <span className="text-zinc-500 z-10">
                {ask.amount.toFixed(4)}
              </span>
            </div>
          ))}
        </div>

        {/* 現在価格 */}
        <div className="py-3 px-3 my-1 bg-zinc-900/60 border-y border-zinc-800/50 flex items-center justify-between">
          <span className="text-xl font-mono font-bold text-blue-400">
            ${currentPrice.toFixed(2)}
          </span>
          <ChevronUp size={16} className="text-emerald-500 animate-bounce" />
        </div>

        {/* Bid(買い注文) */}
        <div className="flex-1 overflow-hidden mt-1">
          {orderBook.bids.map((bid, i) => (
            <div
              key={i}
              className="group flex justify-between px-3 py-0.5 hover:bg-emerald-500/5 relative transition-colors"
            >
              <div
                className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 transition-all duration-700"
                style={{ width: `${(bid.amount * 40).toFixed(0)}%` }}
              />
              <span className="text-emerald-400/90 z-10">
                {bid.price.toFixed(2)}
              </span>
              <span className="text-zinc-500 z-10">
                {bid.amount.toFixed(4)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
