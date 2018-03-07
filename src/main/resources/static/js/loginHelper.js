var identityServer = "https://localhost:8443/cas/oidc/authorize";
var scope = "openid";
var audience = "ref:webclient";
var responseType = "id_token%20token";
var clientId = "reference_client";
var redirectUri = "https://localhost:8445/callback.html";
var nonce = "123456";


function buildLoginLink() {
    return identityServer + "?scope=" + scope
        + "&audience=" + audience
        + "&response_type=" + responseType
        + "&client_id=" + clientId
        + "&redirect_uri=" + redirectUri
        + "&nonce=" + nonce;

}


