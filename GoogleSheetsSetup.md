# SST Certificate Auto-Generation — Setup Guide

## How It Works
```
Form Submit → Google Sheet → Apps Script
  → Reads "Association Name" field
  → Picks correct certificate PNG (ISEI/IAMHP/ACAR/WASP)
  → Overlays member Name in centre blank space
  → Exports as PDF
  → Emails PDF to member automatically
```

---

## Step 1: Download 4 Certificate PNGs from Canva

1. Open your Canva design: `canva.com/design/DAHN1VwDvUQ/...`
2. Click **Share → Download → PNG**
3. Download **each page separately**:
   - Page 1 → save as `ISEI.png`
   - Page 2 → save as `IAMHP.png`
   - Page 3 → save as `ACAR.png`
   - Page 4 → save as `WASP.png`

---

## Step 2: Upload PNGs to Google Drive

1. Upload all 4 PNGs to Google Drive
2. For **each file**, right-click → **Share** → change to "Anyone with the link"
3. Copy each file's **ID** from the URL:
   ```
   drive.google.com/file/d/  ←FILE_ID_HERE→  /view
   ```

---

## Step 3: Paste Script into Apps Script

1. Open the **Google Sheet** linked to your membership form
2. Click **Extensions → Apps Script**
3. Delete any existing code
4. Paste the full contents of `CertificateScript.gs`
5. Replace the 4 file IDs in `CERT_IMAGES`:

```js
var CERT_IMAGES = {
  'Institute of Science, Engineering and Innovation (ISEI)':               'PASTE_ISEI_FILE_ID',
  'International Association of Medical and Health Professionals (IAMHP)': 'PASTE_IAMHP_FILE_ID',
  'Association of Creative Arts and Research (ACAR)':                      'PASTE_ACAR_FILE_ID',
  'World Association of Scholars and Professionals (WASP)':                'PASTE_WASP_FILE_ID'
};
```

> ⚠️ The association name strings must match **exactly** what appears in your Google Form dropdown

---

## Step 4: Test First

1. In `testCertificate()`, replace `your-test-email@gmail.com` with your own email
2. Click **Run → testCertificate**
3. Grant permissions when prompted
4. Check your inbox — you should receive the ISEI certificate as PDF
5. If the **name position is off**, adjust `NAME_TOP` value in the script:
   - Increase `NAME_TOP` → moves name lower
   - Decrease `NAME_TOP` → moves name higher
   - Current value: `240` (roughly centre of a 504pt tall slide)

---

## Step 5: Activate Auto-Trigger

Once test looks good:
1. Click **Run → setupTrigger** (only once)
2. From now on every form submission auto-generates and emails the correct certificate

---

## Form Field Mapping

| Form Field Label        | Used For           |
|-------------------------|--------------------|
| Association Name        | Selects certificate image |
| Name (Mr/Ms/Prof/Dr)    | Printed on certificate |
| Email ID                | Certificate sent here |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "No certificate image mapped" in logs | Association name in script doesn't match form dropdown exactly |
| Name printed in wrong position | Adjust `NAME_TOP` in script (line ~20) |
| No email received | Check Gmail quota / spam folder |
| Permission denied | Re-run `setupTrigger()` and grant all permissions |
