import React from "react";
import { OperationStatus } from "./OperationStatus";
import { QuickActions } from "./QuickActions";

/**
 * メイングリッドコンポーネント
 * 左カラムに運用ステータスと操作パネルを配置
 */
export const MainGrid = ({
  currentPrice,
  strategy,
  bnbBalance,
  setBnbBalance,
  useBnbForFees,
  setUseBnbForFees,
  onUpdateExchange,
  onAddBnb,
}) => {
  return (
    <div className="lg:col-span-7 space-y-6">
      <OperationStatus
        currentPrice={currentPrice}
        strategy={strategy}
        bnbBalance={bnbBalance}
        useBnbForFees={useBnbForFees}
        setUseBnbForFees={setUseBnbForFees}
      />

      <QuickActions onUpdateExchange={onUpdateExchange} onAddBnb={onAddBnb} />
    </div>
  );
};
