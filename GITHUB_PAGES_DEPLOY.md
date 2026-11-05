# GitHub Pages 部署步驟

## 重要
本專案已設定 Vite `base: '/work-progress/'`，請將 GitHub Repository 名稱建立為 **work-progress**，否則網站路徑會不正確。

## 建立 Repository
1. 登入 GitHub，按右上角 `+` → `New repository`。
2. Repository name 輸入 `work-progress`。
3. 建議選 **Private**（程式碼不公開）；GitHub Pages 是否可用依帳號方案與 Repository 設定為準。
4. 建立 Repository。

## 上傳程式
1. 解壓縮本 ZIP。
2. 進入 `program-progress-web` 資料夾。
3. 將資料夾內所有檔案及 `.github` 資料夾內容上傳至 Repository 根目錄（不要多包一層 `program-progress-web`）。
4. Commit changes，推送到 `main` 分支。

也可以在 GitHub 網頁 Repository 使用 `Add file` → `Upload files`，拖曳所有檔案；請確認隱藏資料夾 `.github` 也有上傳。若網頁上傳隱藏資料夾不方便，建議使用 GitHub Desktop。

## 啟用 Pages
1. Repository → `Settings` → `Pages`。
2. `Build and deployment` 的 Source 選 **GitHub Actions**。
3. 到 `Actions` 分頁，等待 `Deploy to GitHub Pages` 工作完成（綠色勾勾）。
4. 網址會是 `https://你的GitHub帳號.github.io/work-progress/`。

## 資料安全
- 此程式使用 IndexedDB，資料留在瀏覽器，不會因部署而上傳到 GitHub。
- 第一次使用新的 GitHub Pages 網址時，會是新的瀏覽器儲存空間。請先在舊版網站匯出 JSON 備份，再到新網址匯入。
- 請確認資料已匯入且筆數、順序、日期正確後，再繼續使用。
- 不要清除瀏覽器網站資料；建議定期匯出 JSON 備份。
