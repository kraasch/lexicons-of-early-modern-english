
// In order to run locally:
// npm init -y
// npm install turndown
// node ./code/turndown.js >> conversion.txt

const fs = require('fs');
const TurndownService = require('turndown');
const turndownService = new TurndownService();

// Read HTML content from a file.
fs.readFile('./page/lexiconsByDate.html', 'utf8', (err, htmlContent) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  // Convert HTML to Markdown.
  const markdown = turndownService.turndown(htmlContent);
  console.log(markdown);
});
