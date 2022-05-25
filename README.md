<div align="center">
    <h1>Telegram Channels Publisher</h1>

[![Developer](https://img.shields.io/badge/Developer-Telegram-blue?style=for-the-badge)](https://t.me/ExposedCat)
[![Cats](https://img.shields.io/badge/Cats-Meowgram%20V3-gold?style=for-the-badge)](https://t.me/MeowgramV3)
![Updated Badge](https://badges.pufler.dev/updated/exposedcat/tg-channels-publisher?style=for-the-badge)

<img src="https://s.tcdn.co/cfc/5ba/cfc5bad2-7088-3375-90ce-23dce235b7ef/9.png" alt="Creepy Cat">

</div>

<div align="center">
    <h2>➕ See also</h2>
</div>
<ul>
    Check out also <a href="https://github.com/ExposedCat/tg-channels-parser">TG Channels Parser</a>
</ul>

<div align="center">
    <h2>⭐️ Features</h2>
</div>
<ul>
    <li>Posting by schedule</li>
    <li>Security: Receives posts only from admins</li>
    <li>Simple running: 100% configuration placed in one config</li>
</ul>

<div align="center">
    <h2>⚙️ Stack</h2>
</div>
<ul>
    <li>Language: Node.JS 17.9.0</li>
    <li>Telegram Client API library: Telegraf 3.39</li>
</ul>

<div align="center">
    <h2>Running</h2>
</div>

1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/tg-channels-publisher.git
```

2. Go to project root:

```bash
cd tg-channels-publisher
```

3. Rename `example.env` to `.env` and replace example data with with yours. API credentials should be registered here: [Bot Father](https://t.me/BotFather)
4. Run app:

```bash
node src/index.js
```

Or you can use PM2 to run in background:

```bash
pm2 start src/index.js --name=tgpublisher
```

**Done**.  
You can stop PM2 process via

```bash
pm2 stop tgpublisher
```
