const config = {
    yt_api_key: "",
    BOT_TOKEN: "NzI1MDE1NTM2OTk5NTk2MDMy.XvIlVg.4Xwbw_DcsyR89obXBPgIZvOFXPA",
    prefix: "^",
    bot_version: "2.1.3",
    DefaultGuildID: "412262889156771842",
    dbl_token: process.env.dbl_token,

    //MySQL
    MySQL_host: process.env.MySQL_host,
    MySQL_user: process.env.MySQL_user,
    MySQL_database: process.env.MySQL_database,
    MySQL_password: process.env.MySQL_password,
    MySQL_DB_Model: process.env.MySQL_DB_Model
}
module.exports = {
    config: config
}
