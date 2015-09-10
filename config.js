require('dotenv').load();
var defaults = {
    "STEAM_API_KEY": "", //for API reqs, in worker
    "STEAM_USER": "", //for getting replay salt/profile data, in retriever
    "STEAM_PASS": "",
    "RECAPTCHA_PUBLIC_KEY": "", //for preventing automated requests, in web
    "RECAPTCHA_SECRET_KEY": "",
    "PAYPAL_ID": "", //for donations, in web
    "PAYPAL_SECRET": "",
    "RETRIEVER_SECRET": "", //string to use as shared secret with retriever/parser
    "SESSION_SECRET": "secret to encrypt cookies with", //string to encrypt cookies
    "ROOT_URL": "http://localhost:5000", //base url to redirect to after steam oauth login
    "START_SEQ_NUM": "", //REDIS: use redis number, truthy: use sequence number, else: use auto
    "KUE_USER": "user",
    "KUE_PASS": "pass",
    "NODE_ENV": "development",
    "LANG": "en_US.UTF-8", //this value ensures that encoding is set properly on the parser (LANG is not present when running under upstart)
    "WEB_PORT": "5000",
    "RETRIEVER_PORT": "5100",
    "PARSER_PORT": "5200",
    "PROXY_PORT": "5300",
    "MONGO_URL": "mongodb://localhost/dota",
    "REDIS_URL": "redis://127.0.0.1:6379/0",
    "RETRIEVER_HOST": "localhost:5100",
    "PARSER_HOST": "localhost:5200",
    "UNTRACK_DAYS": 7,
    "GOAL": 5,
    "PROXY_URLS": "", //comma separated list of proxy urls to use
    "STEAM_API_HOST": "api.steampowered.com",
    "ROLE": "", //for specifying a node type
    "DISABLE_RECAPTCHA": "", // set to disable the recaptcha on the Request page,
    "DISABLE_PRO_PARSING": "", // set to disable parsing pro matches from sequential API
    "DISABLE_ADS": "", //disable ads
    //the following are deprecated
    "AWS_S3_BUCKET": "",
    "AWS_ACCESS_KEY_ID": "",
    "AWS_SECRET_ACCESS_KEY": "",
    "STEAM_GUARD_CODE": ""
};
//ensure that process.env has all values in defaults, but prefer the process.env value
for (var key in defaults) {
    process.env[key] = process.env[key] || defaults[key];
}
if (process.env.NODE_ENV === "development") {
    //force PORT to null in development so we can run multiple web services without conflict
    process.env.PORT = "";
}
//now processes can use either process.env or config
module.exports = process.env;
