/**
 * 大底までの距離を計算
 */
export const calculateDistanceToBottom = (currentPrice, bottomTarget) => {
  return (((currentPrice - bottomTarget) / currentPrice) * 100).toFixed(1);
};

/**
 * スプレッドを計算
 */
export const calculateSpread = (orderBook) => {
  if (orderBook.asks.length === 0 || orderBook.bids.length === 0) {
    return 0;
  }
  return (
    orderBook.asks[orderBook.asks.length - 1].price - orderBook.bids[0].price
  ).toFixed(2);
};

/**
 * オーダーブックを生成
 */
export const generateOrderBook = (basePrice) => {
  const asks = [];
  const bids = [];

  for (let i = 0; i < 8; i++) {
    asks.push({
      price: basePrice + (i + 1) * 2.5 + Math.random(),
      amount: Math.random() * 1.5 + 0.5,
      total: 0,
    });
    bids.push({
      price: basePrice - (i + 1) * 2.5 - Math.random(),
      amount: Math.random() * 1.5 + 0.5,
      total: 0,
    });
  }

  return {
    asks: asks.sort((a, b) => b.price - a.price),
    bids: bids.sort((a, b) => b.price - a.price),
  };
};

/**
 * ネット利益を計算
 */
export const calculateNetProfit = (useBnbForFees) => {
  return useBnbForFees ? "2.35%" : "2.30%";
};
