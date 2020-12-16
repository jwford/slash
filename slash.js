const fetch = require('node-fetch');
const util = require('util');
const { bot_token, client_id, cmd_description, cmd_name, global, guild_id } = require('./config.json');

const url = global
    ? `https://discord.com/api/v8/applications/${client_id}/commands`
    : `https://discord.com/api/v8/applications/${client_id}/guilds/${guild_id}/commands`;

const json = {
    "name": cmd_name,
    "description": cmd_description,
};

const headers = {
    "Authorization": `Bot ${bot_token}`,
    "Content-Type": "application/json"
};

fetch(url, { method: 'POST', headers, body: JSON.stringify(json) })
    .then(res => res.json())
    .then(resJson => console.log(util.inspect(resJson, { depth: 4 })));