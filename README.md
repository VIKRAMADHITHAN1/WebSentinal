# 🛡️ WebSentinel

### Real-Time Browser Threat Protection

WebSentinel is a lightweight Chrome browser extension designed to help protect users from phishing and malicious websites by monitoring web navigation and analyzing URLs through threat intelligence.

The project provides real-time URL security checks, threat-based blocking, and a modern security-focused browser interface.

---

## 🚀 Features

- 🔍 **Real-Time URL Scanning**  
  Monitors browser navigation and analyzes URLs for potential threats.

- 🛡️ **Threat Detection**  
  Uses VirusTotal threat intelligence to identify malicious and suspicious URLs.

- 🚫 **Dynamic Website Blocking**  
  Flagged websites can be blocked and redirected to a dedicated security warning page.

- ⚡ **Lightweight Browser Extension**  
  Built using Chrome Extension Manifest V3 without requiring a separate backend server.

- 🎨 **Modern Security UI**  
  Includes a redesigned WebSentinel popup with interactive animations and security status indicators.

- 🔄 **Protection Toggle**  
  Users can enable or disable browser protection directly from the extension popup.

- 📊 **Security Status**  
  Displays the current protection state and detection engine status.

---

## 🧠 How WebSentinel Works

```text
              User Opens a Website
                       │
                       ▼
              Browser Navigation
                       │
                       ▼
             WebSentinel Extension
                       │
                       ▼
                URL Analysis
                       │
                       ▼
             VirusTotal Intelligence
                       │
              ┌────────┴────────┐
              ▼                 ▼
            SAFE          SUSPICIOUS /
                              MALICIOUS
              │                 │
              ▼                 ▼
        Continue Browsing   Block / Warn
                                │
                                ▼
                         Security Warning
```

### Detection Flow

1. The browser navigates to a URL.
2. WebSentinel monitors the navigation event.
3. The URL is analyzed using VirusTotal threat intelligence.
4. The returned threat information is evaluated.
5. Safe URLs can continue normally.
6. Suspicious or malicious URLs can be blocked.
7. The user is redirected to a security warning page.

---

## 🏗️ Project Structure

```text
WebSentinal/
│
├── background.js          # Background service worker
├── blocked.html           # Security warning page
├── content.js             # Content script
├── manifest.json          # Chrome Manifest V3 configuration
├── rules.json             # Declarative network rules
│
├── popup/
│   ├── popup.html         # Extension popup interface
│   ├── popup.css          # Popup styling and animations
│   └── popup.js           # Popup functionality
│
├── icons/                 # Extension icons
│
└── static/                # Static assets
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Extension interface |
| CSS3 | UI, animations and visual effects |
| JavaScript | Extension logic |
| Chrome Extension APIs | Browser integration |
| Manifest V3 | Extension architecture |
| VirusTotal API | URL threat intelligence |
| Chrome Storage API | Protection state management |
| Declarative Net Request | Network blocking |

---

## 🔐 VirusTotal API Configuration

WebSentinel requires a VirusTotal API key for URL threat analysis.

### Step 1 — Obtain an API Key

Create or access your VirusTotal account and obtain an API key.

### Step 2 — Configure the Extension

Open:

```text
background.js
```

Locate the VirusTotal API key configuration and replace the placeholder with your own key.

**Never commit your real API key to a public GitHub repository.**

For a production implementation, the API key should be handled through a secure architecture rather than being exposed directly inside a browser extension.

---

## 🌐 Installation

### Option 1 — Load the Extension Locally

Clone the repository:

```bash
git clone https://github.com/VIKRAMADHITHAN1/WebSentinal.git
```

Open Chrome:

```text
chrome://extensions/
```

Then:

1. Enable **Developer mode**.
2. Click **Load unpacked**.
3. Select the cloned `WebSentinal` folder.
4. The extension will appear in your Chrome extensions list.
5. Pin WebSentinel to the browser toolbar.

---

## ⚙️ Development

No Node.js or Python server is required for the current browser-extension implementation.

The project runs directly as a Chrome Manifest V3 extension.

After modifying extension files:

1. Open `chrome://extensions/`
2. Locate WebSentinel.
3. Click **Reload**.
4. Open the extension popup again.

---

## 🎨 Interface

WebSentinel uses a modern cybersecurity-focused interface featuring:

- Glassmorphism-inspired components
- Security status indicators
- Interactive hover effects
- Animated security shield
- Mouse-responsive 3D interaction
- Protection status controls
- Clean dark security theme

---

## 🔒 Security Considerations

WebSentinel is designed as a cybersecurity learning and prototype project.

Important considerations:

- Do not expose private API keys in public repositories.
- Do not test the extension against real malicious websites.
- Use controlled and authorized environments for security testing.
- Threat intelligence results may change over time.
- External threat intelligence does not guarantee detection of every malicious website.

---

## 🚧 Future Improvements

Future versions can extend WebSentinel with:

- 🤖 Local machine-learning based phishing detection
- 🔬 URL feature extraction
- 🧠 Zero-day and previously unseen phishing detection
- 📊 Security analytics dashboard
- 📝 Threat history and reporting
- 🌐 Support for additional browsers
- ⚡ Improved caching and performance
- 🔐 Secure backend architecture for API management
- 📈 Threat statistics and visualization

---

## 🎯 Project Objective

The goal of WebSentinel is to provide an accessible browser-level security layer that helps users identify potentially dangerous websites before interacting with them.

The project combines browser extension technologies with external threat intelligence to create a practical real-time web security prototype.

---

## 👨‍💻 Author

**Vikramadhithan S**

Computer Science and Engineering

GitHub:  
https://github.com/VIKRAMADHITHAN1

---

## 📄 License

This project is intended for educational, research, and demonstration purposes.

Refer to the repository license for applicable usage and distribution terms.

---

## ⭐ Support

If you find WebSentinel useful, consider giving the repository a ⭐ on GitHub.

**WebSentinel — Browse smarter. Stay protected. 🛡️**