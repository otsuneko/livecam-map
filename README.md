# LiveCam Map

## 概要

[ライブカメラ地図](https://livecam-map.vercel.app/)

[バックエンド側のGitHubリポジトリ](https://github.com/otsuneko/livecam-map-backend)

- ~~日本中~~世界中のライブカメラ([日本](https://livecam.asia/)、[海外](https://www.cametan.com/world/))を地図上にプロットする
- 雨雲レーダーを重畳する
- 雨が降ってる地点のライブカメラ映像を眺めると落ち着くので良い

## ToDo

- [x] ベースマップの表示機能作成
- [x] 雨雲レーダーをAPIから取得し重畳するUI機能追加  
- [x] ライブカメラの位置情報整備  
⇒現状Google SpreadSheetに位置情報保存してGASでGeoJSON APIとして取得。今後はRestAPIサーバを立ててDBで管理予定。
- [ ] ライブカメラの管理コンソールUI作成
- [ ] 雨雲に覆われたエリアに含まれるライブカメラ一覧の表示機能作成
- [ ] 世界地図上で昼/夜区別用レイヤ重畳機能作成

## 参考
- [React Leaflet](https://react-leaflet.js.org/)
- [Google Spreadsheet を簡易 Webサーバーとして動かして、手軽にWebHookを受け取る方法](https://qiita.com/kunichiko/items/7f64c7c80b44b15371a3)
- [スプレッドシートからGAS(Apps Scirpt)のスクリプトエディタ起動方法が変更](https://auto-worker.com/blog/?p=4607)
- [30分でGoogleスプレッドシートを使ってgeojsonを返すAPIを公開する](https://qiita.com/zero3/items/0a56be4f7dfc4b74ca88)
- [LeafletでGeoJSONを読み込みカスタムアイコンを表示する](https://qiita.com/asahina820/items/7ea0ac3fc2fbbbe7512a)
- [react-component-depot](https://github.com/codegeous/react-component-depot/blob/master/src/pages/Leaflet/markers.js)
