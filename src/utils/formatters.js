/**
 * 数値を通貨形式でフォーマット
 */
export const formatCurrency = (
  value,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

/**
 * 現在時刻をローカル形式でフォーマット
 */
export const formatCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

/**
 * BTC価格を表示用にフォーマット
 */
export const formatBtcPrice = (price) => {
  return `$${formatCurrency(price, 2, 2)}`;
};

/**
 * BTC価格を短縮形式でフォーマット（例: 65.4k）
 */
export const formatBtcPriceShort = (price) => {
  return `$${(price / 1000).toFixed(1)}k`;
};
