# Implementation Plan: Responsive Grid Icon Layout

## Overview

既存のAppIconとAppIconGridコンポーネントをリファクタリングし、12カラムのレスポンシブグリッドシステムと柔軟なサイズバリエーション（1×1、2×2、3×2、3×3、3×4）をサポートする。CSS Gridを活用し、モバイル（6カラム）、タブレット（8カラム）、デスクトップ（12カラム）に対応する。

## Tasks

- [x] 1. 型定義の拡張とヘルパー関数の実装
  - AppIconItem型の拡張（colSpan、rowSpanのサポート確認）
  - SizeVariant型の定義（"1x1" | "2x2" | "3x2" | "3x3" | "3x4"）
  - sizeVariantToSpan関数の実装
  - IconAction型とApplicationIconItem型の定義
  - _Requirements: 2.6, 2.8, 8.1, 8.2, 8.3, 10.3, 10.6_

- [ ] 1.1 型定義のプロパティベーステスト
  - sizeVariantToSpan関数が正しいcolSpan/rowSpanを返すことを検証
  - _Requirements: 2.6, 2.8_

- [ ] 2. GridItemコンポーネントの実装
  - [ ] 2.1 GridItemコンポーネントの作成
    - colSpan、rowSpanプロパティを受け取る
    - CSS Gridのgrid-columnとgrid-rowスタイルを適用
    - 子要素として任意のReactコンポーネントを受け入れる
    - _Requirements: 2.7, 5.1, 9.5_

  - [ ]* 2.2 GridItemのプロパティベーステスト
    - **Property 1: Grid Item Size Styling**
    - **Validates: Requirements 2.6, 2.7, 2.8**
    - 任意のcolSpan/rowSpanに対してスタイルが正しく適用されることを検証

- [ ] 3. AppIconGridコンポーネントのリファクタリング
  - [ ] 3.1 レスポンシブカラム数の拡張
    - grid-cols-6 md:grid-cols-8 lg:grid-cols-12に変更
    - _Requirements: 1.1, 3.1, 3.2, 3.3_

  - [ ] 3.2 gapプロパティの追加
    - gapプロパティを受け取る（デフォルト: 16px）
    - 動的にgapスタイルを適用
    - バリデーション関数でgap値を検証（負の数の場合はデフォルト値）
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ] 3.3 maxWidthプロパティの追加
    - maxWidthプロパティを受け取る（デフォルト: "720px"）
    - 動的にmax-widthスタイルを適用
    - _Requirements: 9.2_

  - [ ] 3.4 GridItemコンポーネントの統合
    - インラインdivをGridItemコンポーネントに置き換え
    - colSpan、rowSpanのデフォルト値（1）を適用
    - _Requirements: 1.3, 1.4, 2.7, 9.4_

  - [ ]* 3.5 AppIconGridのプロパティベーステスト
    - **Property 2: Gap Styling**
    - **Validates: Requirements 4.1, 4.3**
    - 任意のgap値に対してスタイルが正しく適用されることを検証

- [ ] 4. Checkpoint - 基本機能の動作確認
  - すべてのテストが通ることを確認し、質問があればユーザーに確認する

- [ ] 5. AppIconコンポーネントの検証と調整
  - [ ] 5.1 既存実装の確認
    - aria-label属性が正しく設定されているか確認
    - フォーカススタイルが適用されているか確認
    - button要素として実装されているか確認
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ]* 5.2 AppIconのプロパティベーステスト
    - **Property 3: Aria Label Attribute**
    - **Validates: Requirements 6.4**
    - 任意のlabel文字列に対してaria-label属性が正しく設定されることを検証

  - [ ]* 5.3 AppIconのonClickプロパティベーステスト
    - **Property 4: OnClick Callback Execution**
    - **Validates: Requirements 10.7**
    - 任意のonClickコールバックが正確に1回実行されることを検証

- [ ] 6. ProfileGridコンポーネントの更新
  - [ ] 6.1 アクション解決ロジックの実装
    - ApplicationIconItemのactionをAppIconItemのonClickに変換
    - "link"タイプ: window.open(href, "_blank")を実行
    - "dialog"タイプ: setOpenDialogId(dialogId)を実行
    - _Requirements: 10.1, 10.2, 10.4, 10.5, 10.7_

  - [ ]* 6.2 ProfileGridのユニットテスト
    - "link"タイプのアクションでwindow.openが呼び出されることを検証
    - "dialog"タイプのアクションでsetOpenDialogIdが呼び出されることを検証
    - _Requirements: 10.1, 10.2, 10.4, 10.5_

- [ ] 7. レスポンシブ動作のユニットテスト
  - [ ]* 7.1 ブレークポイントテストの実装
    - 画面幅768px未満で6カラムグリッドが適用されることを検証
    - 画面幅768px以上1024px未満で8カラムグリッドが適用されることを検証
    - 画面幅1024px以上で12カラムグリッドが適用されることを検証
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 8. サイズバリエーションの統合テスト
  - [ ]* 8.1 各サイズバリエーションのレンダリングテスト
    - 1×1、2×2、3×2、3×3、3×4サイズのアイコンが正しく表示されることを検証
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 9. エラーハンドリングとバリデーション
  - [ ] 9.1 バリデーション関数の実装
    - validateSpan関数: 負の数や0の場合にデフォルト値を返す
    - validateGap関数: 負の数の場合にデフォルト値を返す
    - エラーメッセージを日本語で出力
    - _Requirements: 4.2_

  - [ ]* 9.2 バリデーション関数のユニットテスト
    - 無効なcolSpan/rowSpan値がデフォルト値にフォールバックすることを検証
    - 無効なgap値がデフォルト値にフォールバックすることを検証

- [ ] 10. Final Checkpoint - 統合テストと動作確認
  - すべてのテストが通ることを確認し、質問があればユーザーに確認する

## Notes

- `*`マークのタスクはオプショナルで、MVP実装時にスキップ可能
- 各タスクは特定の要件を参照してトレーサビリティを確保
- プロパティベーステストはfast-checkを使用して実装
- ユニットテストはVitestと@testing-library/reactを使用
- 既存のProfileGridでの動作を維持するため、後方互換性を重視
