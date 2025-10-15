# Hide Members-Only Videos

This Tampermonkey userscript automatically hides **YouTube members-only videos** from your homepage, subscriptions, and recommended sections. It works by scanning for the “Members only” badge and removing those videos from view.

## ✨ Features

- Removes members-only videos from all visible sections  
- Supports legacy and experimental YouTube layouts  
- Lightweight and runs automatically on page load and scroll  

## 📦 Installation

### 1. Install Tampermonkey

Tampermonkey is a browser extension that lets you run custom userscripts.  
Install it from your browser’s extension store:

- [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dghacgflmklpobfdbbbhijgblfepjocg)

### 2. Add the Script

Once Tampermonkey is installed:

- Click the Tampermonkey icon in your browser toolbar  
- Select **Dashboard**  
- Click the **+** button to create a new script  
- Copy the contents of [`hide-members-only.user.js`](./hide-members-only.user.js) into the editor  
- Save the script (`File → Save` or `Ctrl+S`)  
- Ensure the script is **enabled**

### 3. Reload YouTube

Visit [youtube.com](https://www.youtube.com) and refresh the page.  
Members-only videos should now be hidden automatically.

## 🧪 Compatibility

Tested on:

- YouTube homepage  
- Subscriptions feed  
- Recommended sidebar  
- Channel pages with experimental layouts

## 📝 License

MIT License — feel free to fork, modify, and improve.

