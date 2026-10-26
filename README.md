# English Loop — YouTube Edition (iPhone / GitHub Pages)

這是一套 **靜態網站**。沒有帳號、後端或 API 費用。使用 YouTube 官方嵌入播放器，影片需要網路，影片也可能禁止外部嵌入。

## 建置成 iPhone 網站（第一次設定使用電腦最方便）

1. 在 GitHub 新建 **public** repository，例如 `english-loop`。*重要：GitHub Pages 網站是公開可讀的；請勿將私人逐字稿、練習資料或 API Key 上傳到 repository。*
2. 將此 ZIP 解壓縮，把 `index.html`、`manifest.webmanifest`、`sw.js`、3 個 PNG 圖檔，以及 `README.md` 放到 repository 的**根目錄**，commit 到 `main` branch。
3. 在 repository **Settings → Pages → Build and deployment** 選 **Deploy from a branch**，選 `main`、`/(root)`，按 **Save**。
4. 網站網址會是 `https://<GitHub帳號>.github.io/<repository名稱>/`，等 GitHub Pages 顯示已部署後，在 iPhone Safari 開啟。
5. Safari：分享選單 → **加入主畫面** → 開啟 **作為 Web App 開啟** → 新增。此後從主畫面啟動練習。

## 新增 YouTube 練習

1. 在 YouTube 找影片，點分享並複製連結。
2. 在 English Loop 點 **▶ 加入 YouTube 影片**，貼上連結，設定起訖時間（例如 0:20–1:20），輸入教材名稱。
3. 貼入**對應片段**的英語字幕（建議 30–150 英文字）。你也可以直接貼上 **SRT / VTT** 格式且帶時間碼的字幕；程式會依起訖時間切出相應文字。這一步**目前需要自行提供字幕**，不會自動從 YouTube 抽取字幕。
4. 點 **建立影片練習**，即可看片、做 5 格克漏字、三輪換句話說、聽完口述主旨並回答 2 題。

## 保留紀錄

所有練習紀錄及自行貼入的短文存於 Safari 本機的 `localStorage`。瀏覽器清除網站資料或切換裝置**不會同步**。下方 **匯出我的練習紀錄** 可以將資料下載成 JSON 以備份。這版尚未包含備份還原功能。

## 重要限制

- **HTTPS 部署必要**：直接點開 `index.html` 的 `file://` 網址，YouTube 可能因缺少 HTTP Referer 而拒播（Error 153）。請使用 GitHub Pages 網站連結。
- **字幕不自動擷取**：YouTube 官方 Data API 的 `captions.download` 需要該影片的編輯權限；一般新聞／Podcast 無法靠公開 API Key 下載字幕。
- **播放器可能被禁止**：上傳者可關閉外部嵌入；可按「在 YouTube 開啟」。
- **影片與字幕不會自動核對**：務必貼相符的片段內容；無時間碼時程式無法確認字幕與播放起訖時間一致。
- **沒有語意 AI 評分**：改寫只檢查與原文或上一輪重複的用詞，複述及問答須自行比對，瀏覽器麥克風辨識因 iPhone 版本可能受限。
- **資料授權**：請僅匯入有權用於自己學習的字幕內容；不要在公開 repository 中發佈不屬於你的完整字幕。

## 技術

Vanilla HTML / CSS / JS、YouTube IFrame Player API、Web App Manifest、Service Worker。所有既有 8 篇原創文字教材保留。