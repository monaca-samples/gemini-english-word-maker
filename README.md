# Gemini English Word Maker
# Gemini英単語帳生成アプリ

[English](#english) | [日本語](#japanese)

<a name="english"></a>
## English

This project is a mobile application built with Framework7 v8 and Cordova, designed to generate detailed information about English words using Google's Gemini AI. The main focus is on demonstrating how to integrate Gemini into a Monaca project.

### Project Overview

- **Name**: Gemini English Vocabulary Generator
- **Framework**: Framework7 v8
- **AI Integration**: Google Gemini (gemini-1.5-flash model)
- **Platforms**: iOS, Android, Web

### Key Features

- Generate detailed information about English words using Gemini AI
- Cross-platform support (iOS, Android, Web)
- User-friendly interface for word input and information display

### Prerequisites

- Node.js (~18.16.0)
- npm (~9.5.0)
- Monaca CLI (for Monaca specific commands)

### Project Structure

- `gemini.js`: Initializes the Gemini AI client
- `app.js`: Main application setup using Framework7
- `index.html`: Root HTML file
- `app.f7`: Main application component
- `word.f7`: Word generation page component

### Integrating Gemini AI

1. The Gemini SDK is initialized in `gemini.js`:
   ```javascript
   import { GoogleGenerativeAI } from "@google/generative-ai";

   const API_KEY = "YOUR_API_KEY";
   const genAI = new GoogleGenerativeAI(API_KEY);

   window.geminiModel = genAI.getGenerativeModel({
     model: "gemini-1.5-flash",
     generationConfig: {
       responseMimeType: "application/json"
     }
   });
   ```

2. The word generation functionality is implemented in `word.f7`:
   ```javascript
   const send = async (e) => {
     const word = document.querySelector('[name="word"]').value;
     if (word === '') return;

     const prompt = `Provide the following information about "${word}" in JSON format:
       - Japanese name: key "japanese"
       - Definition (in English): key "definition"
       - Part of speech (in Japanese): key "parts"
       - Example sentence (in English): key "example"
       - Related words (in English): key "references" as an array
     `;

     const res = await geminiModel.generateContent([prompt]);
     try {
       data = JSON.parse(res.response.candidates[0].content.parts[0].text);
       $update();
     } catch (e) {
       data = {};
     }
     $update();
   };
   ```

### Development

Use `npm run dev` to start the development server. This template supports hot-reloading for efficient development.

### Building for Production

Run `npm run build` to create a production build. The output will be in the `www` directory.

### Monaca Specific Commands

- `npm run monaca:preview`: Preview in Monaca
- `npm run monaca:transpile`: Transpile for Monaca
- `npm run monaca:debug`: Debug in Monaca

<a name="japanese"></a>
## 日本語

このプロジェクトは、Framework7 v8とCordovaを使用して構築されたモバイルアプリケーションで、GoogleのGemini AIを使用して英単語に関する詳細情報を生成するように設計されています。主な焦点は、GeminiをMonacaプロジェクトに統合する方法を示すことです。

### プロジェクト概要

- **名前**: Gemini英単語帳生成アプリ
- **フレームワーク**: Framework7 v8
- **AI統合**: Google Gemini (gemini-1.5-flashモデル)
- **プラットフォーム**: iOS、Android、Web

### 主な機能

- Gemini AIを使用して英単語に関する詳細情報を生成
- クロスプラットフォームサポート（iOS、Android、Web）
- 単語入力と情報表示のためのユーザーフレンドリーなインターフェース

### 前提条件

- Node.js (~18.16.0)
- npm (~9.5.0)
- Monaca CLI（Monaca特有のコマンド用）

### プロジェクト構造

- `gemini.js`: Gemini AIクライアントの初期化
- `app.js`: Framework7を使用したメインアプリケーションのセットアップ
- `index.html`: ルートHTMLファイル
- `app.f7`: メインアプリケーションコンポーネント
- `word.f7`: 単語生成ページコンポーネント

### Gemini AIの統合

1. Gemini SDKは`gemini.js`で初期化されます：
   ```javascript
   import { GoogleGenerativeAI } from "@google/generative-ai";

   const API_KEY = "YOUR_API_KEY";
   const genAI = new GoogleGenerativeAI(API_KEY);

   window.geminiModel = genAI.getGenerativeModel({
     model: "gemini-1.5-flash",
     generationConfig: {
       responseMimeType: "application/json"
     }
   });
   ```

2. 単語生成機能は`word.f7`で実装されています：
   ```javascript
   const send = async (e) => {
     const word = document.querySelector('[name="word"]').value;
     if (word === '') return;

     const prompt = `"${word}"について、以下の情報をJSON形式で提供してください：
       - 日本語名：キー "japanese"
       - 定義（英語）：キー "definition"
       - 品詞（日本語）：キー "parts"
       - 例文（英語）：キー "example"
       - 関連語（英語）：キー "references"（配列として）
     `;

     const res = await geminiModel.generateContent([prompt]);
     try {
       data = JSON.parse(res.response.candidates[0].content.parts[0].text);
       $update();
     } catch (e) {
       data = {};
     }
     $update();
   };
   ```

### 開発

`npm run dev` を使用して開発サーバーを起動します。このテンプレートは効率的な開発のためのホットリローディングをサポートしています。

### プロダクションビルド

`npm run build` を実行してプロダクションビルドを作成します。出力は `www` ディレクトリに格納されます。

### Monaca特有のコマンド

- `npm run monaca:preview`: Monacaでプレビュー
- `npm run monaca:transpile`: Monaca用にトランスパイル
- `npm run monaca:debug`: Monacaでデバッグ
