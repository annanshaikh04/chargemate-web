import zipfile
import xml.etree.ElementTree as ET
import os

def get_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        return ' '.join(t.text for t in tree.iter() if t.tag.endswith('}t') and t.text)
    except:
        return ""

target = r"doc/Lean Canvas_ Everyday Friction.docx"
print(get_text(target))
