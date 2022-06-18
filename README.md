# 餐廳清單 1.0
這是一個提供使用者查詢餐廳的網站，使用者可檢視詳細的餐廳資訊。

<img width="1338" alt="image" src="https://user-images.githubusercontent.com/106903594/174432937-9d3c8c72-7291-4a28-b833-b4576b75bcee.png">




<h2>功能介紹</h2>

使用者可在首頁看到所有的餐廳清單，包含下面的簡介：
- 使用者可在首頁看到所有的餐廳清單，以及簡介(照片、名稱、類別、評分)
- 使用者可點擊個別的餐廳卡片，檢視餐廳的詳細資訊(類別、地址、電話、描述、圖片)
- 使用者可用 餐廳名稱(中/英皆可)、餐廳類別來找到特定的餐廳


<h2>開發工具</h2>

- Node.js v16.15.1
- Express v4.16.4
- Express-handlebars v3.0.0
- Bootstrap v4.3.1

<h2>安裝指南</h2>

1. 請先確認環境已經有安裝 Node.js，並建議使用 v16.15.1版本
2. 開啟終端機，輸入以下指令將此專案複製到本機：
   ```
   git clone https://github.com/thisIsBun/2-3_A1_restaurant_list.git
   ```
3. 因為此專案在 github上，並沒有把 npm需要的工具存在專案裡，所以須用以下步驟把專案需要的工具，安裝到專案資料夾裡。

   3.1 用終端機用 cd指令，移動到專案資料夾後，先輸入以下指令來安裝 package.json：
       ```
       npm init -y
       ```
   
   3.2 再輸入以下指令安裝 Express
      ```
      npm install Express@4.16.4
      ```
   3.3 最後再安裝 Express-Handlebars
      ```
      npm install express-handlebars@3.0.0
      ``` 
