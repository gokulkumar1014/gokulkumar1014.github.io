with open('src/pages/Home.tsx', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

import re

# Simple: find "lifecycle" + any non-letter char + "requirements" and replace that separator with ": "
content_new = re.sub(
    r'(full BA lifecycle)[^\w]+(requirements gathering)',
    r'full BA lifecycle: requirements gathering',
    content
)

if content_new != content:
    with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
        f.write(content_new)
    print('SUCCESS: separator replaced with colon')
else:
    print('No change - already a colon or pattern not found')
    idx = content.find('full BA lifecycle')
    if idx >= 0:
        print(repr(content[idx:idx+50]))
