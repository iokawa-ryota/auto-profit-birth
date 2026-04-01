import React from "react";
import { ArrowRightLeft, Coins } from "lucide-react";

/**
 * クイックアクションコンポーネント
 * 為替同期、BNB補充などの操作パネル
 */
export const QuickActions = ({ onUpdateExchange, onAddBnb }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-lg">
      <h3 className="text-[10px] font-black text-zinc-500 uppercase mb-5 flex items-center justify-center md:justify-start gap-2 tracking-[0.2em]">
        ⚙️ Quick Actions
      </h3>
      <div className="flex flex-wrap gap-3">
        <button
          className="flex-1 min-w-[140px] px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-xs font-bold transition-all border border-zinc-700 flex items-center justify-center gap-2"
          onClick={onUpdateExchange}
        >
          <ArrowRightLeft size={14} /> 為替同期
        </button>
        <button
          className="flex-1 min-w-[140px] px-4 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-xl text-xs font-black transition-all shadow-lg shadow-yellow-900/40 text-black flex items-center justify-center gap-2"
          onClick={onAddBnb}
        >
          <Coins size={14} fill="currentColor" /> BNB補充
        </button>
      </div>
    </div>
  );
};
