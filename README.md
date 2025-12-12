# Extension

A browser extension that extends browser functionality with custom features and utilities.

## Table of Contents

- [Installation](#installation)
- [Loading the Extension](#loading-the-extension)
- [Usage](#usage)
- [Features](#features)
- [Development](#development)
- [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

- A Chromium-based browser (Chrome, Edge, Brave, etc.) or Firefox
- Git (optional, for cloning the repository)

### Clone the Repository

```bash
git clone https://github.com/mana-vya/extension.git
cd extension
```

## Loading the Extension

### For Chrome/Chromium-based Browsers

1. **Open the Extensions Page**
   - Navigate to `chrome://extensions` in your address bar
   - Alternatively, click the menu icon (⋮) → **More tools** → **Extensions**

2. **Enable Developer Mode**
   - Toggle the **Developer mode** switch in the top-right corner

3. **Load the Extension**
   - Click the **Load unpacked** button
   - Navigate to and select the `extension` folder (or the folder containing your `manifest.json`)
   - Click **Select Folder**

4. **Verify Installation**
   - The extension should now appear in your extensions list
   - You may see the extension icon in your browser toolbar

### For Firefox

1. **Open the Add-ons Page**
   - Navigate to `about:debugging#/runtime/this-firefox` in your address bar
   - Alternatively, press `Ctrl+Shift+A` and click **Extensions**

2. **Load the Extension**
   - Click **Load Temporary Add-on**
   - Navigate to and select the `manifest.json` file from the extension folder
   - Click **Open**

3. **Verify Installation**
   - The extension should now appear in your add-ons list
   - You may see the extension icon in your browser toolbar

## Usage

### Basic Usage

1. **Access the Extension**
   - Click the extension icon in your browser toolbar to open the popup or options page

2. **Configure Settings** (if applicable)
   - Right-click the extension icon → **Options** to access configuration settings
   - Adjust preferences according to your needs

3. **Use the Features**
   - Follow the on-screen instructions to use the extension's features
   - Check the extension's popup for quick actions and status information

### Keyboard Shortcuts

Keyboard shortcuts may be available for quick access to extension features. Check the extension options or this README for a list of available shortcuts.

## Features

- **[Feature 1]** - Description of what this feature does
- **[Feature 2]** - Description of what this feature does
- **[Feature 3]** - Description of what this feature does

*Note: Replace placeholder features with actual extension features*

## Development

### Project Structure

```
extension/
├── manifest.json          # Extension configuration
├── popup.html            # Popup page (optional)
├── popup.js              # Popup script (optional)
├── options.html          # Options page (optional)
├── options.js            # Options script (optional)
├── background.js         # Background script
├── content.js            # Content script (optional)
├── styles/               # CSS stylesheets
├── images/               # Icons and images
└── README.md             # This file
```

### Making Changes

1. **Edit files** in your preferred code editor
2. **Reload the extension** in your browser:
   - **Chrome/Chromium**: Click the refresh icon on the extension card in `chrome://extensions`
   - **Firefox**: Click the reload button next to the extension in `about:debugging`

3. **Test your changes** in the browser

### Building for Distribution

For information on packaging and distributing your extension, refer to:
- [Chrome Web Store Publishing Guide](https://developer.chrome.com/docs/webstore/publish/)
- [Firefox Add-ons Publishing Guide](https://extensionworkshop.com/documentation/publish/)

## Troubleshooting

### Extension Won't Load

- **Check the manifest.json**: Ensure the file is valid JSON and contains required fields
- **Check the console**: Open DevTools (F12) → **Console** to see error messages
- **Verify file paths**: Ensure all referenced files exist in the correct locations

### Extension Doesn't Work After Installation

- **Reload the extension**: Refresh the extension in the extensions page
- **Clear browser cache**: Clear your browser's cache and cookies
- **Check permissions**: Review the extension's permissions in `manifest.json` and ensure they're appropriate

### Content Script Not Running

- **Verify manifest.json**: Ensure `content_scripts` is properly configured with matching URLs
- **Check page reload**: Reload the page where you expect the script to run
- **Inspect permissions**: Verify the extension has permission to run on the target pages

### Issues with Extension Features

- **Check the browser console**: Press F12, go to **Console**, and look for error messages
- **Reload the extension**: Sometimes a fresh load resolves issues
- **Update the extension**: Ensure you have the latest version of the code

### Getting Help

If you encounter issues:
1. Check the project's [Issues page](https://github.com/mana-vya/extension/issues)
2. Create a new issue with a detailed description of the problem
3. Include browser version, extension version, and steps to reproduce

## License

[Add your license information here]

## Support

For questions or feedback, please open an issue on the [GitHub repository](https://github.com/mana-vya/extension).

---

**Last Updated**: 2025-12-12
