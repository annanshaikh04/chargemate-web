import zipfile
import xml.etree.ElementTree as ET
import os

def get_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            # Check for docx
            if 'word/document.xml' in z.namelist():
                xml_content = z.read('word/document.xml')
            # Check for pptx
            elif 'ppt/slides/slide1.xml' in z.namelist():
                # Just get the first few slides for brevity
                text = []
                for i in range(1, 4):
                    f = f'ppt/slides/slide{i}.xml'
                    if f in z.namelist():
                        tree = ET.fromstring(z.read(f))
                        text.append(' '.join(t.text for t in tree.iter() if t.tag.endswith('}t') and t.text))
                return '\n'.join(text)
            else:
                return "[Unsupported format]"
        tree = ET.fromstring(xml_content)
        return ' '.join(t.text for t in tree.iter() if t.tag.endswith('}t') and t.text)
    except:
        return "[Error]"

target = r"doc/Product Description_Everyday Friction_ChargeMate.docx"
print(f"--- {target} ---")
print(get_text(target))

target2 = r"doc/Lean Canvas_ Everyday Friction.docx"
print(f"\n--- {target2} ---")
print(get_text(target2))
