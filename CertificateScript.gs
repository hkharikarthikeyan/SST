// ============================================================
// SST Membership Certificate Generator
// Google Apps Script — paste in Extensions > Apps Script
// ============================================================

var CERT_IMAGES = {
  'Institute of Science, Engineering and Innovation (ISEI)':               '1XTAsIcg_jMHJWi3FjJHIwB8Sg6O_-7QB',
  'International Association of Medical and Health Professionals (IAMHP)': '16A8ydvZrqMYDSd7wuR88OfjQPu0lwo8w',
  'Association of Creative Arts and Research (ACAR)':                      '13k4--nEDZlqbTbsRCBL776eXj0P30pNF',
  'World Association of Scholars and Professionals (WASP)':                '18WvrX3yuh2HRMgEBA9Vwc7astUHSoMiv'
};

var MEM_PREFIX = {
  'Institute of Science, Engineering and Innovation (ISEI)':               'ISEI',
  'International Association of Medical and Health Professionals (IAMHP)': 'IAMHP',
  'Association of Creative Arts and Research (ACAR)':                      'ACAR',
  'World Association of Scholars and Professionals (WASP)':                'WASP'
};

// Certificate portrait ratio 4419 x 6250
var CERT_RATIO = 4419 / 6250; // 0.7070

// ── Overlay positions (ratio of imgW or imgH) ───────────────
var NAME_TOP_RATIO  = 0.53;   // name vertical position
var NAME_FONT_SIZE  = 22;
var NAME_COLOR      = '#1a237e';

var MEM_LEFT_RATIO  = 0.04;   // membership no. from left of image
var MEM_TOP_RATIO   = 0.845;  // membership no. from top of image
var MEM_FONT_SIZE   = 7;

var DATE_LEFT_RATIO = 0.58;   // date from left of image
var DATE_TOP_RATIO  = 0.845;  // date from top of image
var DATE_FONT_SIZE  = 7;

// ─────────────────────────────────────────────────────────────

function setupTrigger() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.getProjectTriggers().forEach(function(t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('onFormSubmit').forSpreadsheet(ss).onFormSubmit().create();
  Logger.log('Trigger created.');
}

function onFormSubmit(e) {
  var sheet   = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var values  = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  var data = {};
  headers.forEach(function(h, i) { data[h.toString().trim().toLowerCase()] = values[i]; });

  var association = data['association name'] || '';
  var name        = data['name (mr/ms/prof/dr)'] || data['name'] || '';
  var email       = data['email id'] || data['email'] || '';

  if (!email || !association) { Logger.log('Missing email or association.'); return; }
  var imageId = CERT_IMAGES[association];
  if (!imageId) { Logger.log('No image for: ' + association); return; }

  var pdf = generateCertificate(name, imageId, association);
  sendEmail(email, name, association, pdf);
}

function generateCertificate(name, imageId, association) {
  var token    = ScriptApp.getOAuthToken();
  var response = UrlFetchApp.fetch('https://lh3.googleusercontent.com/d/' + imageId + '=w2000', {
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true
  });
  Logger.log('Image: ' + response.getResponseCode() + ' | ' + response.getContent().length + ' bytes');

  var imgBlob = response.getBlob().copyBlob();
  imgBlob.setContentType('image/png');

  var deck   = SlidesApp.create('CERT_TEMP_' + name);
  var deckId = deck.getId();
  var slide  = deck.getSlides()[0];
  slide.getPageElements().forEach(function(el) { el.remove(); });

  var sw = deck.getPageWidth();   // 720 pt
  var sh = deck.getPageHeight();  // 405 pt

  // Fit portrait image into landscape slide without whitespace
  var imgH = sh;
  var imgW = sh * CERT_RATIO;
  if (imgW > sw) { imgW = sw; imgH = sw / CERT_RATIO; }
  var imgX = (sw - imgW) / 2;
  var imgY = (sh - imgH) / 2;

  var bg = slide.insertImage(imgBlob);
  bg.setLeft(imgX).setTop(imgY).setWidth(imgW).setHeight(imgH);

  // ── Name ──────────────────────────────────────────────────
  var nameBox = slide.insertTextBox(
    name,
    imgX, imgY + (imgH * NAME_TOP_RATIO), imgW, 50
  );
  nameBox.getText().getTextStyle()
    .setFontSize(NAME_FONT_SIZE).setBold(true).setForegroundColor(NAME_COLOR);
  nameBox.getText().getParagraphStyle()
    .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  nameBox.getFill().setTransparent();

  // ── Membership Number ─────────────────────────────────────
  var prefix = MEM_PREFIX[association] || 'SST';
  var year   = new Date().getFullYear();
  var serial = Math.floor(1000 + Math.random() * 9000);
  var memNo  = prefix + '/MEM/' + year + '/' + serial;

  var memBox = slide.insertTextBox(
    memNo,
    imgX + (imgW * MEM_LEFT_RATIO),
    imgY + (imgH * MEM_TOP_RATIO),
    imgW * 0.38,
    20
  );
  memBox.getText().getTextStyle()
    .setFontSize(MEM_FONT_SIZE).setBold(true).setForegroundColor('#1a237e');
  memBox.getFill().setTransparent();

  // ── Date of Issue ─────────────────────────────────────────
  var today  = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy');

  var dateBox = slide.insertTextBox(
    today,
    imgX + (imgW * DATE_LEFT_RATIO),
    imgY + (imgH * DATE_TOP_RATIO),
    imgW * 0.35,
    20
  );
  dateBox.getText().getTextStyle()
    .setFontSize(DATE_FONT_SIZE).setBold(true).setForegroundColor('#1a237e');
  dateBox.getFill().setTransparent();

  deck.saveAndClose();

  var pdfBlob = DriveApp.getFileById(deckId).getAs('application/pdf').copyBlob();
  pdfBlob.setName('SST_Certificate_' + name.replace(/ /g, '_') + '.pdf');
  DriveApp.getFileById(deckId).setTrashed(true);

  return pdfBlob;
}

function sendEmail(email, name, association, pdfBlob) {
  GmailApp.sendEmail(email, 'Your SST Membership Certificate — ' + association, '', {
    name: 'SST Membership Team',
    htmlBody:
      '<p>Dear ' + name + ',</p>' +
      '<p>Congratulations on your membership with <strong>' + association + '</strong>!</p>' +
      '<p>Please find your official <strong>SST Membership Certificate</strong> attached.</p>' +
      '<p>Welcome to our global community.</p>' +
      '<br><p>Warm regards,<br><strong>SST Membership Team</strong></p>',
    attachments: [pdfBlob]
  });
  Logger.log('Certificate emailed to ' + email);
}

function testCertificate() {
  var testAssociation = 'Institute of Science, Engineering and Innovation (ISEI)';
  var testName        = 'MR. JOHN DOE';
  var testEmail       = 'kharikumarhd690@gmail.com';
  var pdf = generateCertificate(testName, CERT_IMAGES[testAssociation], testAssociation);
  sendEmail(testEmail, testName, testAssociation, pdf);
  Logger.log('Test done — check inbox.');
}
