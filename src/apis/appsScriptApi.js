const readline = require("readline");
const fs = require("fs");
const { google } = require("googleapis");

module.exports = {
  mail: async function (message) {
    var status = "starting";
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
    return new Promise((resolve,reject) => {
      fs.readFile("./src/apis/credentials.json", async (err, content) => {
        if (err) {
          reject("Error loading client secret file:", err)
          return console.log("Error loading client secret file:", err)};
        // Authorize a client with credentials, then call the Google Apps Script API.
        await authorize(JSON.parse(content), callAppsScript).then((res) => {
          status = res;
          resolve(status);
        },(err)=>{
          reject(err)
        });
      });

      /**
       * Create an OAuth2 client with the given credentials, and then execute the
       * given callback function.
       * @param {Object} credentials The authorization client credentials.
       * @param {function} callback The callback to call with the authorized client.
       */
      async function authorize(credentials, callback) {
        const { client_secret, client_id, redirect_uris } = credentials;
        const oAuth2Client = new google.auth.OAuth2(
          client_id,
          client_secret,
          redirect_uris[0]
        );

        // Check if we have previously stored a token.
        return new Promise((resolve,reject) => {
          var status = "Not changed";
          fs.readFile(TOKEN_PATH, async (err, token) => {
            if (err) {
              reject("Token Expired/NotAvailable")
              return getAccessToken(oAuth2Client, callback);}
            oAuth2Client.setCredentials(JSON.parse(token));
            status = await callback(oAuth2Client);
            resolve(status);
          });
          return status;
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
          approval_prompt: "force",
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

      var scriptId =
        "1JI5y3eTll4inwaN06cxRZAcRDgfEjQf4FSLN_3-_4ljsiKltWjLMklPN";
      async function callAppsScript(auth) {
        const script = google.script({ version: "v1", auth });
        await script.scripts
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
            if (resp.data.error) {
              status = resp.data.error.details;
              console.log("Error :" + resp.data.error.details);
            }

            //Response that the function or script returns
            console.log("\n\tresponse:", resp.data.response.result);
            status = resp.data.response.result;
          }).catch((err)=>{
            status="Encountered an Error While sending Mail(OuterScript)";
            console.log("The i made recently +"+err.error)
          }
          )
        return "\n\nThe new Response:", status;
      }
    });
  },

  MakeCertificate: async function (para) {
    // If modifying these scopes, delete token.json.
    var status = "Starting"
    //scopes for access to drive(edit/create/update) document(edit/create), and Mail(for sending mails only)
    const SCOPES = [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/documents",
      "https://www.googleapis.com/auth/script.send_mail",
    ];

    const TOKEN_PATH = "./src/apis/token.json";

    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    return new Promise((resolve,reject) => {
      fs.readFile("./src/apis/credentials.json", async (err, content) => {
        if (err) {
          reject("Error loading client secret file:", err)
          return console.log("Error loading client secret file:", err)};
        // Authorize a client with credentials, then call the Google Apps Script API.
        await authorize(JSON.parse(content), callAppsScript).then((res) => {
          status = res;
          resolve(status);
        },(err)=>{
          reject(err)
        });
      });

      /**
       * Create an OAuth2 client with the given credentials, and then execute the
       * given callback function.
       * @param {Object} credentials The authorization client credentials.
       * @param {function} callback The callback to call with the authorized client.
       */
      async function authorize(credentials, callback) {
        const { client_secret, client_id, redirect_uris } = credentials;
        const oAuth2Client = new google.auth.OAuth2(
          client_id,
          client_secret,
          redirect_uris[0]
        );
        return new Promise((resolve,reject) => {
          var status = "Not changed";
          fs.readFile(TOKEN_PATH, async (err, token) => {
            if (err) {
              reject("Token Expired/NotAvailable")
              return getAccessToken(oAuth2Client, callback);}
            oAuth2Client.setCredentials(JSON.parse(token));
            status = await callback(oAuth2Client);
            resolve(status);
          });
          return status;
        });
        // Check if we have previously stored a token.
      }

      /**
       * Get and store new token after prompting for user authorization, and then
       * execute the given callback with the authorized OAuth2 client.
       * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
       * @param {getEventsCallback} callback The callback for the authorized client.
       */
      function getAccessToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({
          approval_prompt: "force",
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

      var scriptId =
        "1JI5y3eTll4inwaN06cxRZAcRDgfEjQf4FSLN_3-_4ljsiKltWjLMklPN";
      async function callAppsScript(auth) {
        const script = google.script({ version: "v1", auth });
        await script.scripts
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
            if (resp.data.error) {
              status = resp.data.error.details;
              console.log("Error :" + resp.data.error.details);
            }

            //Response that the function or script returns
            console.log("\n\tresponse:", resp.data.response.result);
            status = resp.data.response.result;
          }).catch((err)=>{
            status="Encountered an Error While sending Mail(OuterScript)";
            console.log("The i made recently +"+err.error)
          }
          )
        return "\n\nThe new Response:", status;
      }
    });
  },
  verifyDocument: async function (document) {
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
    var status="starting"

    return new Promise((resolve,reject) => {
      fs.readFile("./src/apis/credentials.json", async (err, content) => {
        if (err) {
          reject("Error loading client secret file:", err)
          return console.log("Error loading client secret file:", err)};
        // Authorize a client with credentials, then call the Google Apps Script API.
        await authorize(JSON.parse(content), callAppsScript).then((res) => {
          status = res;
          resolve(status);
        },(err)=>{
          reject(err)
        });
      });
  
      /**
       * Create an OAuth2 client with the given credentials, and then execute the
       * given callback function.
       * @param {Object} credentials The authorization client credentials.
       * @param {function} callback The callback to call with the authorized client.
       */
       async function authorize(credentials, callback) {
        const { client_secret, client_id, redirect_uris } = credentials;
        const oAuth2Client = new google.auth.OAuth2(
          client_id,
          client_secret,
          redirect_uris[0]
        );

        // Check if we have previously stored a token.
        return new Promise((resolve,reject) => {
          var status = "Not changed";
          fs.readFile(TOKEN_PATH, async (err, token) => {
            if (err) {
              reject("Token Expired/NotAvailable")
              return getAccessToken(oAuth2Client, callback);}
            oAuth2Client.setCredentials(JSON.parse(token));
            status = await callback(oAuth2Client);
            resolve(status);
          });
          return status;
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
          approval_prompt: "force",
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
      async function callAppsScript(auth) {
        const script = google.script({ version: "v1", auth });
        await script.scripts
          .run({
            scriptId: scriptId,
            resource: {
              function: "sendToVerify",
              parameters: document,
              devMode: true,
            },
          })
          .then(function (resp) {
            //for handling errors
            if (resp.data.error) {
              status = resp.data.error.details;
              console.log("Error :" + resp.data.error.details);
            }

            //Response that the function or script returns
            console.log("\n\tresponse:", resp.data.response.result);
            status = resp.data.response.result;
          }).catch((err)=>{
            status="Encountered an Error While sending Mail(OuterScript)";
            console.log("The i made recently +"+err.error)
          }
          )
        return "\n\nThe new Response:", status;
      }
    })
  },
};
