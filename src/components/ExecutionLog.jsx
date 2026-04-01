import React from "react";
import { Terminal } from "lucide-react";

/**
 * 実行ログコンポーネント
 * トレード実行ログをターミナル風に表示
 */
export const ExecutionLog = ({ logs }) => {
  return (
    <div className="bg-black border border-zinc-800 rounded-3xl overflow-hidden flex flex-col h-[280px] shadow-2xl">
      <div className="bg-zinc-900/80 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
        <Terminal size={16} className="text-emerald-500" />
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          Execution Log
        </span>
      </div>
      <div className="flex-1 p-4 font-mono text-[10px] overflow-y-auto space-y-2 scrollbar-hide bg-zinc-950/50">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 text-left">
            <span className="text-zinc-600 shrink-0">[{log.time}]</span>
            <span
              className={
                log.type === "success"
                  ? "text-emerald-400"
                  : log.type === "warning"
                    ? "text-amber-400"
                    : "text-blue-400"
              }
            >
              {log.type === "success"
                ? "●"
                : log.type === "warning"
                  ? "▲"
                  : "■"}{" "}
              {log.msg}
            </span>
          </div>
        ))}
        <div className="animate-pulse text-emerald-500 font-black">_</div>
      </div>
    </div>
  );
};
