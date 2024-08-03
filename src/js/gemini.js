// Google Generative AIライブラリをインポート
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini AIのAPIキー
const API_KEY = "YOUR_API_KEY";

// GoogleGenerativeAIのインスタンスを作成
const genAI = new GoogleGenerativeAI(API_KEY);

// Geminiモデルを初期化し、グローバルスコープで利用可能にする
window.geminiModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // 使用するモデルのバージョン
    generationConfig: {
        responseMimeType: "application/json" // レスポンスをJSON形式で受け取るよう設定
    }
});
