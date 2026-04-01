/**
 * 戦略設定 - 取引パラメータ
 */
export const STRATEGY = {
  allTimeHigh: 126296,
  bottomTarget: 50518, // -60%
  rotationTarget: 0.025, // 2.5% 利益
};

/**
 * 初期スコア
 */
export const INITIAL_SCORE = {
  totalProfit: 124500,
  savedFees: 8400, // BNBで節約できた手数料
  winRate: 85,
  tradeCount: 14,
  currentPhase: "Binance グリッド稼働中",
};

/**
 * 初期ログエントリ
 */
export const INITIAL_LOGS = [
  {
    id: 4,
    type: "success",
    msg: "Deposit: 7,500 JPY worth of BNB received",
    time: "13:35:12",
  },
  {
    id: 1,
    type: "info",
    msg: "Binance Japan API: Authenticated",
    time: "13:20:01",
  },
  {
    id: 2,
    type: "success",
    msg: "BNB Fee Deduction: Active (-25%)",
    time: "13:20:05",
  },
  {
    id: 3,
    type: "info",
    msg: "Monitoring 50 grids for BTC/USDT",
    time: "13:25:00",
  },
];

/**
 * 初期価格
 */
export const INITIAL_PRICE = 65432.1;

/**
 * 初期BNB残高
 */
export const INITIAL_BNB_BALANCE = 0.12;
