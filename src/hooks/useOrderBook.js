import { useState, useEffect } from "react";
import { generateOrderBook } from "../utils/calculations";

/**
 * オーダーブックと価格の同期管理
 */
export const useOrderBook = (initialPrice) => {
  const [currentPrice, setCurrentPrice] = useState(initialPrice);
  const [orderBook, setOrderBook] = useState({ asks: [], bids: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = currentPrice + (Math.random() * 10 - 5);
      setCurrentPrice(newPrice);
      setOrderBook(generateOrderBook(newPrice));
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  return {
    currentPrice,
    setCurrentPrice,
    orderBook,
    setOrderBook,
  };
};
