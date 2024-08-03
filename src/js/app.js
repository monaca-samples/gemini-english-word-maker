// Framework7とDOM操作ライブラリ（dom7）のインポート
import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Framework7のスタイルをインポート
import 'framework7/css/bundle';

// カスタムアイコンとアプリケーション固有のスタイルをインポート
import '../css/icons.css';
import '../css/app.css';

// ルート定義をインポート
import routes from './routes.js';

// メインアプリケーションコンポーネントをインポート
import App from '../app.f7';

// Framework7アプリケーションのインスタンスを作成
var app = new Framework7({
  name: 'framework7-v8-core-blank', // アプリケーション名
  theme: 'auto', // 自動テーマ検出
  el: '#app', // アプリケーションのルート要素
  component: App, // メインアプリケーションコンポーネント
  routes: routes, // アプリケーションのルート
});