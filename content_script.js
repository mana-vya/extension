/**
 * Content Script for Indian Government Websites CSS Modification
 * This script modifies CSS on Indian government websites for better accessibility and user experience
 */

// List of Indian government website patterns to target
const GOV_SITE_PATTERNS = [
  'gov.in',
  'nic.in',
  'india.gov.in',
  'census.gov.in',
  'niti.gov.in',
  'mca.gov.in',
  'gst.gov.in',
  'income-tax.gov.in',
  'cbic.gov.in',
  'dopt.gov.in'
];

/**
 * Check if current website is an Indian government site
 */
function isGovernmentSite() {
  return GOV_SITE_PATTERNS.some(pattern => window.location.hostname.includes(pattern));
}

/**
 * Apply CSS modifications for improved readability and accessibility
 */
function modifyCSS() {
  if (!isGovernmentSite()) {
    return;
  }

  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    /* Improve font readability */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      font-size: 16px;
      color: #333;
    }

    /* Enhance heading contrast and size */
    h1, h2, h3, h4, h5, h6 {
      color: #1a1a1a;
      margin-bottom: 0.8em;
      font-weight: 600;
    }

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }

    /* Improve link visibility */
    a {
      color: #0066cc;
      text-decoration: underline;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #0052a3;
      text-decoration: none;
    }

    a:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }

    /* Improve button styling */
    button, input[type="button"], input[type="submit"], .btn {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 1em;
      cursor: pointer;
      border: 1px solid #ccc;
      background-color: #f5f5f5;
      color: #333;
      transition: all 0.3s ease;
    }

    button:hover, input[type="button"]:hover, input[type="submit"]:hover, .btn:hover {
      background-color: #e9e9e9;
      border-color: #999;
    }

    button:focus, input[type="button"]:focus, input[type="submit"]:focus, .btn:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }

    /* Improve form inputs */
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="search"],
    input[type="date"],
    textarea,
    select {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1em;
      font-family: inherit;
      background-color: #fff;
      color: #333;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus,
    input[type="search"]:focus,
    input[type="date"]:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    /* Improve table styling */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
    }

    table th {
      background-color: #f5f5f5;
      color: #333;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      border-bottom: 2px solid #ccc;
    }

    table td {
      padding: 12px;
      border-bottom: 1px solid #eee;
    }

    table tbody tr:hover {
      background-color: #f9f9f9;
    }

    /* Improve navigation styling */
    nav, .navbar, .navigation {
      background-color: #f8f8f8;
      border-bottom: 1px solid #ddd;
    }

    nav a, .navbar a, .navigation a {
      display: inline-block;
      padding: 12px 16px;
      color: #333;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    nav a:hover, .navbar a:hover, .navigation a:hover {
      background-color: #e9e9e9;
    }

    /* Improve container and content width */
    .container, main, .content, .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Improve footer styling */
    footer {
      background-color: #f5f5f5;
      border-top: 1px solid #ddd;
      color: #666;
      padding: 30px 0;
      margin-top: 40px;
      font-size: 0.95em;
    }

    /* Add better spacing for paragraphs */
    p {
      margin-bottom: 1em;
    }

    /* Improve list styling */
    ul, ol {
      margin-left: 1.5em;
      margin-bottom: 1em;
    }

    li {
      margin-bottom: 0.5em;
    }

    /* Improve code styling */
    code, pre {
      background-color: #f5f5f5;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #c7254e;
    }

    pre {
      padding: 15px;
      overflow-x: auto;
      margin: 1em 0;
    }

    /* Improve blockquote styling */
    blockquote {
      border-left: 4px solid #0066cc;
      padding-left: 15px;
      margin-left: 0;
      color: #666;
      font-style: italic;
    }

    /* Ensure text is readable against backgrounds */
    .alert, .notification, .message {
      padding: 15px;
      border-radius: 4px;
      margin: 1em 0;
    }

    .alert-info {
      background-color: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }

    .alert-success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .alert-warning {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }

    .alert-error, .alert-danger {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    /* Improve print styling */
    @media print {
      body {
        color: #000;
        background: #fff;
      }
      a {
        text-decoration: underline;
      }
    }

    /* Improve mobile responsiveness */
    @media (max-width: 768px) {
      body {
        font-size: 14px;
      }

      h1 {
        font-size: 1.8em;
      }

      h2 {
        font-size: 1.4em;
      }

      button, input[type="button"], input[type="submit"], .btn {
        padding: 12px 16px;
        font-size: 1em;
      }

      .container, main, .content, .main-content {
        padding: 0 15px;
      }
    }
  `;

  document.head.appendChild(styleSheet);
}

/**
 * Monitor for dynamically added content and apply styles
 */
function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    // Apply styles to newly added content if needed
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        // Styles are already applied globally, no need for per-element styling
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * Initialize the content script
 */
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      modifyCSS();
      observeDOM();
    });
  } else {
    modifyCSS();
    observeDOM();
  }
}

// Start the script
init();
