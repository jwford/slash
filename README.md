**Slash**

*To Use*
- Install dependencies with `npm install`
- Rename `config.example.json` to `config.json` and fill in the fields
    - `bot_token`: Your bot's token
    - `client_id`: Your bot's client id
    - `cmd_description`: The description of the slash command you'd like to register
    - `cmd_name`: The name of the slash command you'd like to register
    - `global`: Use `true` if you'd like your slash command to work globally. Use `false` if you'd like it to work in a specific guild
    - `guild_id`: Only required if you set `global` to `false`. The snowflake of the guild you want to register the slash command in
- Run `npm start`
    - If a response that shows the name and description of your slash command was logged, you did it right!

**Note**: As of 2020 December 16th, ou must grant your app the `applications.commands` OAuth scope in the guilds you'd like your slash commands to run in, even if you register a slash command globally.