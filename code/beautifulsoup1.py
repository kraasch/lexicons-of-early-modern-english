from bs4 import BeautifulSoup

# Read your HTML file
with open('./abc.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Extract headers
headers = [th.get_text(strip=True).replace('xyz\n', '') for th in soup.find_all('th')]

# Extract all rows
rows = []
for tr in soup.find_all('tr')[1:]:  # Skip header row
    cells = tr.find_all(['td', 'th'])
    row = [cell.get_text(strip=True).replace('xyz\n', '') for cell in cells]
    rows.append(row)

# Prepare markdown table
# Header row
markdown_lines = []

# Create header line
header_line = '| ' + ' | '.join(headers) + ' |'
# Create separator line
separator_line = '| ' + ' | '.join(['---'] * len(headers)) + ' |'

markdown_lines.append(header_line)
markdown_lines.append(separator_line)

# Add data rows
for row in rows:
    # Ensure each row has the same number of columns
    row = [cell.replace('xyz\n', '') for cell in row]
    row_line = '| ' + ' | '.join(row) + ' |'
    markdown_lines.append(row_line)

# Output the markdown table
markdown_table = '\n'.join(markdown_lines)
print(markdown_table)
