import React, { useState } from "react";
import { Header } from "./components/Header";
import { MainGrid } from "./components/MainGrid";
import { OrderBook } from "./components/OrderBook";
import { ExecutionLog } from "./components/ExecutionLog";
import { useOrderBook } from "./hooks/useOrderBook";
import { useLogs } from "./hooks/useLogs";
import {
  STRATEGY,
  INITIAL_SCORE,
  INITIAL_LOGS,
  INITIAL_PRICE,
  INITIAL_BNB_BALANCE,
} from "./constants/strategy";

/**
 * メインアプリケーション
 * Binance Japanグリッド取引監視ダッシュボード
 */
const App = () => {
  // オーダーブック管理
  const { currentPrice, orderBook } = useOrderBook(INITIAL_PRICE);

  // ログ管理
  const { logs, addLog } = useLogs(INITIAL_LOGS);

  // 状態管理
  const [bnbBalance, setBnbBalance] = useState(INITIAL_BNB_BALANCE);
  const [useBnbForFees, setUseBnbForFees] = useState(true);
  const [score, setScore] = useState(INITIAL_SCORE);

  // ハンドラー
  const handleUpdateExchange = () => {
    addLog("info", "Updating USD/JPY rates...");
  };

  const handleAddBnb = () => {
    setBnbBalance((prev) => prev + 0.1);
    addLog("success", "Market Buy: BNB added to balance.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-6 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ヘッダー統計 */}
        <Header currentPrice={currentPrice} strategy={STRATEGY} score={score} />

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左カラム */}
          <MainGrid
            currentPrice={currentPrice}
            strategy={STRATEGY}
            bnbBalance={bnbBalance}
            setBnbBalance={setBnbBalance}
            useBnbForFees={useBnbForFees}
            setUseBnbForFees={setUseBnbForFees}
            onUpdateExchange={handleUpdateExchange}
            onAddBnb={handleAddBnb}
          />

          {/* 右カラム */}
          <div className="lg:col-span-5 space-y-6">
            <OrderBook currentPrice={currentPrice} orderBook={orderBook} />
            <ExecutionLog logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
