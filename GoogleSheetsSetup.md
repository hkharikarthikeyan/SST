# Google Sheets Integration Setup Guide

Follow these steps to connect the contact form in your React application directly to a Google Sheet.

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a blank spreadsheet.
2. Name the spreadsheet (e.g., `Contact Form Responses`).
3. Set the column headers in the first row (A1 to F1):
   - **Timestamp**
   - **Name**
   - **Email**
   - **Phone**
   - **Subject**
   - **Message**

## Step 2: Open Google Apps Script
1. In your Google Sheet menu, go to **Extensions** > **Apps Script**.
2. Delete any default code in the editor (`Code.gs`) and paste the following script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Create headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Subject", "Message"]);
  }
  
  try {
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    var timestamp = new Date();
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var subject = data.subject || "";
    var message = data.message || "";
    
    sheet.appendRow([timestamp, name, email, phone, subject, message]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Response submitted successfully!" 
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

## Step 3: Deploy the Script
1. Click the **Save** icon (floppy disk) at the top of the editor.
2. Click **Deploy** > **New deployment**.
3. Click the gear icon next to "Select type" and choose **Web app**.
4. Configure the settings:
   - **Description**: `Contact Form Endpoint`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` (This is critical so the React app can submit data without authentication).
5. Click **Deploy**.
6. Google will ask you to authorize access. Click **Authorize Access**, log in to your account, and choose **Advanced** > **Go to Untitled project (unsafe)**, then click **Allow**.
7. Copy the **Web App URL** provided under the Deployment ID (it looks like `https://script.google.com/macros/s/.../exec`).

## Step 4: Configure the React App
1. Open `src/pages/Contact.jsx`.
2. Find the configuration variable:
   ```javascript
   const GOOGLE_SHEET_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `"YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"` with the URL you copied in Step 3.
4. Save the file. Any form submissions will now be logged directly into your Google Sheet!
