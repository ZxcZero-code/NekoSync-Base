# 🤖 NekoSync - WhatsApp Bot Base  

![Project Image](https://files.catbox.moe/ls0bg5.jpg)  

A WhatsApp bot base built using [Whiskeysockets](https://github.com/WhiskeySockets/WAWeb.js) and [adiwajshing](https://github.com/adiwajshing/Baileys) to create WhatsApp bots easily and quickly.  

## 📦 Prerequisites  
Before using this base, ensure you have:  
- [Node.js](https://nodejs.org/) v16 or newer  
- [WAWeb.js](https://github.com/WhiskeySockets/WAWeb.js) (via `npm install @whiskeysockets/wawebjs`)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- WhatsApp access (phone number to be used as the bot)  
- API Key (if using external services)  

## 🛠️ Installation  
1. Clone this repository:  

```bash  
git clone https://github.com/Stevens0856/NekoSync-Base.git  
cd NekoSync-Base  
npm install  
```  

Then run the bot with:  

```bash  
npm start / node index.js  
```  

## ⚙️ Configuration  

```js  
global.owner = '62XXXX' // Main Owner's WhatsApp Number  
global.nomerowner = ["62XXXX"] // Owner's WhatsApp Number  
global.botname = 'Base - MD' // Your Bot Name  
global.packname = 'Made by' // Customize as you like  
global.author = 'Base - MD' // Customize as you like  
global.urldb = ''; // MongoDB Link [Optional]  
```  

## 🤝 Contributing  
1. Fork this repository  
2. Create a new branch (`git checkout -b new-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin new-feature`)  
5. Create a Pull Request  

---  

Thank You for Using NekoSync - Base  

## 📄 License  
[MIT](LICENSE) © SkyNemesis  