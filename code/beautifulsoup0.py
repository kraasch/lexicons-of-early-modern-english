from bs4 import BeautifulSoup

# Read your HTML file
with open('./abc.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Find all table cells
cells = soup.find_all(['td', 'th'])

# Extract and clean text
cleaned_texts = []
for cell in cells:
    text = cell.get_text(separator=' ', strip=True)
    # Remove all occurrences of 'xyz\n'
    text = text.replace('xyz\n', '')
    cleaned_texts.append(text)

# Now, cleaned_texts contains only the plain text of each cell without formatting
for text in cleaned_texts:
    print(text)
