# Auto Profit Birth - Grid Trading Dashboard

BinanceのJapan版でBTC/USDTグリッド取引を監視・管理するダッシュボードアプリケーション。

## 📁 プロジェクト構造

```
auto-profit-birth/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.jsx       # ヘッダー統計表示
│   │   ├── MainGrid.jsx     # 左カラムメインレイアウト
│   │   ├── OperationStatus.jsx    # 運用ステータスパネル
│   │   ├── QuickActions.jsx       # クイックアクションボタン
│   │   ├── OrderBook.jsx          # オーダーブック表示
│   │   └── ExecutionLog.jsx       # 実行ログターミナル
│   ├── hooks/               # カスタムReact Hooks
│   │   ├── useOrderBook.js  # オーダーブック管理
│   │   └── useLogs.js       # ログ管理
│   ├── constants/           # 定数と設定値
│   │   └── strategy.js      # 取引戦略パラメータ
│   ├── utils/               # ユーティリティ関数
│   │   ├── calculations.js  # 計算ロジック
│   │   └── formatters.js    # データフォーマッタ
│   ├── styles/              # CSS ファイル
│   │   └── globals.css      # グローバルスタイル
│   ├── App.jsx              # メインアプリケーション
│   └── index.jsx            # React マウントポイント
├── index.html               # HTML テンプレート
├── package.json             # 依存パッケージ管理
├── vite.config.js           # Vite ビルド設定
├── tailwind.config.js       # Tailwind CSS 設定
├── postcss.config.js        # PostCSS 設定
└── .gitignore              # Git 無視設定
```

## 🎯 リファクタリング内容

### ✅ 実装済み改善点

1. **コンポーネント分割**
   - 単一ファイルから6つの機能別「component」へ分離
   - 各コンポーネントが単一責任を持つ

2. **ビジネスロジック分離**
   - 計算ロジック → `utils/calculations.js`
   - フォーマット処理 → `utils/formatters.js`
   - 定数管理 → `constants/strategy.js`

3. **状態管理の最適化**
   - `useOrderBook` - オーダーブック管理
   - `useLogs` - ログ管理
   - 各Hookが独立した責任を持つ

4. **プロジェクト構造**
   - Vite ベースのモダンなビルド設定
   - Tailwind CSS の設定ファイル化
   - PostCSS 自動プリフィックス対応

5. **スタイル管理**
   - グローバリスト `styles/globals.css`
   - Tailwind Design System による一元管理

## 🚀 セットアップ手順

### 1. 依存パッケージをインストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

ブラウザが自動で `http://localhost:3000` でアプリを起動します。

### 3. 本番ビルド

```bash
npm run build
```

`dist/` ディレクトリに最適化されたファイルが出力されます。

### 4. ビルドプレビュー

```bash
npm run preview
```

## 📦 依存パッケージ

- **React 18** - UI フレームワーク
- **Vite** - 次世代ビルドツール
- **Tailwind CSS** - ユーティリティ CSS
- **lucide-react** - アイコンライブラリ

## 🔀 コンポーネント依存関係

```
App
├── Header
│   └── (utilities, constants)
├── MainGrid
│   ├── OperationStatus
│   │   └── (calculations, formatters)
│   └── QuickActions
└── (右カラム)
    ├── OrderBook
    │   └── (calculations)
    └── ExecutionLog
        └── (hooks)
```

## 💡 で使用可能な Hooks

### useOrderBook

オーダーブックと現在価格の同期管理

```javascript
const { currentPrice, orderBook } = useOrderBook(initialPrice);
```

### useLogs

実行ログの管理とログ追加

```javascript
const { logs, addLog } = useLogs(initialLogs);
addLog("success", "メッセージ");
```

## 📝 ユーティリティ関数

### Calculations (`utils/calculations.js`)

- `calculateDistanceToBottom()` - 大底までの距離
- `calculateSpread()` - 板のスプレッド計算
- `generateOrderBook()` - オーダーブック生成
- `calculateNetProfit()` - ネット利益計算

### Formatters (`utils/formatters.js`)

- `formatCurrency()` - 通貨形式
- `formatCurrentTime()` - 現在時刻
- `formatBtcPrice()` - BTC価格表示
- `formatBtcPriceShort()` - BTC短縮表示

## 🎨 デザイントークン

Tailwind ConfigにPreset化している主要色：

- **Primary**: `blue-400/500`
- **Success**: `emerald-400/500`
- **Warning**: `amber-400`
- **Error**: `red-400/500`
- **Neutral**: `zinc-800/900/950`

---

## 💼 ビットコイン長期・中期ハイブリッド投資戦略 (2026.03版)

### 🎯 全体コンセプト：ハイブリッド・アプローチ

「歴史的な大底（-60%下落）」を虎視眈々と狙いながら、それまでの停滞期間やレンジ相場を「2～3%の短期回転」で軍資金稼ぎに変える。

---

### 🛡️ 【守りの一手】SBI VCトレード × 50,000ドル・クジラ待ち

**目的**: サイクル的な大底での「本命買い」を確実に実行する

#### 戦略詳細

- **ターゲット価格**: 約 $50,518（最高値 $126,296 からの -60% 下落を想定）
- **通貨ペア**: JPY / BTC（日本円建て）
- **理由**: 円安・円高の影響を最小限にし、純粋に「円」で安値を叩く

#### 指値戦略

- $50,000 という心理的節目を意識
- $55,000 付近のクジラの買い壁（Depth）を確認し、数回に分けて分散指値

#### メリット

- ✓ SBIの信頼性による資産保護
- ✓ 入出金手数料無料を活かした「絶対防衛資金」の効率的管理

---

### 🚀 【攻めの一手】Binance Japan × 短期回転・複利運用

**目的**: 板の厚さを利用して、2～3%の利益をコツコツ積み上げ、軍資金を増やす

#### 運用ルール

| 項目           | 内容                                                             |
| -------------- | ---------------------------------------------------------------- |
| **通貨ペア**   | BTC / USDT（テザー建て）                                         |
| **エントリー** | 直近サポート（例: $62,000 や $68,000）の「買い壁」の少し上で拾う |
| **利確**       | 購入価格から +2～3% で機械的に利確指値を設定                     |

#### 待機資金の最大化

- **Simple Earn（フレキシブル）**: 指値待機中の USDT は Earn に預け、微益（金利）を得る
- **機動力**: 注文実行時に即座に解除し、現物ウォレットへ戻すルーティンを徹底

---

### 📊 リスク管理・出口戦略

| 項目                 | 内容                                                                      |
| -------------------- | ------------------------------------------------------------------------- |
| **税金対策**         | 利益の3～5割を納税用として「円」に戻し、SBI口座へ隔離（総合課税対策）     |
| **センチメント監視** | CoinMarketCapで「80%強気」なのに停滞している時は、短期回転を優先          |
| **クジラ監視**       | $55,000の「緑の絶壁」が上昇してきたら、トレンド転換を警戒し短期売りを停止 |

---

### ✅ 運用チェックリスト（定期確認）

- [ ] **FX調整**: ドル円レートの変動に合わせ、SBIの円建て指値価格を微調整したか？
- [ ] **金利回収**: BinanceのSimple Earnに利息が溜まっていないか？
- [ ] **本番準備**: 2026年10月（予想される底打ち時期）に向けて、余剰資金の準備は万全か？

#### 📌 2026.03 メモ

現在の最高値 $126,296 を基準とした下落率計算をベースに、市場のセンチメントとデプスチャートを週次で再評価すること。

---

## 📌 今後の拡張ポイント

- [ ] WebSocket による真のリアルタイム価格更新
- [ ] State Management（Redux/Zustand）導入
- [ ] API 連携層を分離
- [ ] ダークモード/ライトモード切り替え
- [ ] ユニットテスト & E2E テスト
- [ ] ErrorBoundary の実装

## 📄 ライセンス

MIT
