import { useState } from "react";
import { formatCurrentTime } from "../utils/formatters";

/**
 * 実行ログの管理
 */
export const useLogs = (initialLogs) => {
  const [logs, setLogs] = useState(initialLogs);

  const addLog = (type, msg) => {
    const now = formatCurrentTime();
    setLogs((prev) =>
      [{ id: Date.now(), type, msg, time: now }, ...prev].slice(0, 10),
    );
  };

  return {
    logs,
    addLog,
  };
};
