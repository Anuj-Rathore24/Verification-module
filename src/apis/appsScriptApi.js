const readline = require("readline")
const fs = require("fs");
const { google } = require("googleapis");


module.exports={

 mail:async function(message) {
  // If modifying these scopes, delete token.json.

  //scopes for access to drive(edit/create/update) document(edit/create), and Mail(for sending mails only)
  const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/script.send_mail",
  ];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = "./src/apis/token.json";

  // Load client secrets from a local file.
  fs.readFile("./src/apis/credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Apps Script API.
    authorize(JSON.parse(content), callAppsScript);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error("Error retrieving access token", err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log("Token stored to", TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Creates a new script project, upload a file, and log the script's URL.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */


  var scriptId = "1JI5y3eTll4inwaN06cxRZAcRDgfEjQf4FSLN_3-_4ljsiKltWjLMklPN";
  function callAppsScript(auth) {
    const script = google.script({ version: "v1", auth });
    script.scripts
      .run({
        scriptId: scriptId,
        resource: {
          function: "sendMail",
          parameters: message,
          devMode: true,
        },
      })
      .then(function (resp) {
        //for handling errors
        if (resp.data.error) console.log("Error :" + resp.data.error.details);

        //Response that the function or script returns
        console.log("\n\tresponse:", resp.data.response.result);
      });
  }
},


MakeCertificate:async function() {
  // If modifying these scopes, delete token.json.

  //scopes for access to drive(edit/create/update) document(edit/create), and Mail(for sending mails only)
  const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/script.send_mail",
  ];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = "./src/apis/token.json";

  // Load client secrets from a local file.
  fs.readFile("./src/apis/credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Apps Script API.
    authorize(JSON.parse(content), callAppsScript);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error("Error retrieving access token", err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log("Token stored to", TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Creates a new script project, upload a file, and log the script's URL.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */

  let para = {
    Date:12/32/23,
    OutwardNumber:"Don't Know",
    EmailId:"1234@gmail.com",
    userId: "a213a381dasda15s3",
    queryId:"a3sd21adf3a2s1",
    name: "Test Name",
    prn: 10032201083,
    programme: "DK",
    mode: "Offline",
    status: "Verified",
    document: [
       "docType1",
       "docType2",
    ],
  };

  var scriptId = "1JI5y3eTll4inwaN06cxRZAcRDgfEjQf4FSLN_3-_4ljsiKltWjLMklPN";
  function callAppsScript(auth) {
    const script = google.script({ version: "v1", auth });
    script.scripts
      .run({
        scriptId: scriptId,
        resource: {
          function: "makeCert",
          parameters: para,
          devMode: true,
        },
      })
      .then(function (resp) {
        //for handling errors
        if (resp.data.error) console.log("error :" + resp.data.error);

        //Response that the function or script
        console.log("\n\tresponse:", resp.data);
      });
  }
}


}

/*possible Solutions for error
1)Give Permissions Again googleaccount>security>ManageThirdPartyApps
2)Didn't toggle "run function" button in apps script permission
3)Scope not set auth0 screen
4)Not using web type service
5)Use Email given by google rather than service id   
*/
