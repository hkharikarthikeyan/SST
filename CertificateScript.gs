// ============================================================
// SST Membership Registration — Congratulations Mail Sender
// Google Apps Script — paste in Extensions > Apps Script
// ============================================================

function setupTrigger() {
  // Replace this with your Google Sheet URL or ID
  var SHEET_ID = '19Ta30QTTEgXYv0gMZd-efS5wpUd4BrdzTnyN2Jitf-8';
  var ss = SpreadsheetApp.openById(SHEET_ID);
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

  if (!email || !name) { Logger.log('Missing email or name.'); return; }

  sendEmail(email, name, association);
}

function sendEmail(email, name, association) {
  var assocLine = association
    ? '<p>You have successfully registered as a member of <strong>' + association + '</strong>.</p>'
    : '';

  GmailApp.sendEmail(email, 'Congratulations! Your SST Membership Registration is Confirmed', '', {
    name: 'SST Membership Team',
    htmlBody:
      '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 8px;">' +
        '<h2 style="color: #073A59;">🎉 Congratulations, ' + name + '!</h2>' +
        '<p>We are delighted to inform you that your membership registration with <strong>Shazu Soft Technologies</strong> has been successfully received.</p>' +
        assocLine +
        '<p>Our team will review your application and get in touch with you shortly with further details regarding your membership benefits and next steps.</p>' +
        '<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">' +
        '<p style="color: #555;">If you have any questions, feel free to reach us at <a href="mailto:info@shazusofttechnologies.org">info@shazusofttechnologies.org</a></p>' +
        '<br>' +
        '<p>Warm regards,<br><strong>SST Membership Team</strong><br>Shazu Soft Technologies<br>Salem, Tamil Nadu</p>' +
      '</div>'
  });
  Logger.log('Congratulations email sent to ' + email);
}

function testEmail() {
  sendEmail('kharikumarhd690@gmail.com', 'MR. JOHN DOE', 'Institute of Science, Engineering and Innovation (ISEI)');
  Logger.log('Test email sent — check inbox.');
}
