import zipfile
import xml.etree.ElementTree as ET
import os

def search_in_docx(path, search_term):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        texts = [node.text for node in tree.iter() if node.tag.endswith('}t') and node.text]
        full_text = ' '.join(texts)
        if search_term.lower() in full_text.lower():
            # Find the sentence
            index = full_text.lower().find(search_term.lower())
            start = max(0, index - 200)
            end = min(len(full_text), index + 200)
            return full_text[start:end]
        return "Term not found"
    except Exception as e:
        return f"Error: {str(e)}"

target = r"doc/Product Description_Everyday Friction_ChargeMate.docx"
print(f"--- Search for 'weight' in {target} ---")
print(search_in_docx(target, "weight"))

target2 = r"doc/Lean Canvas_ Everyday Friction.docx"
print(f"\n--- Search for 'weight' in {target2} ---")
print(search_in_docx(target2, "weight"))

target3 = r"doc/Customer_Discovery_Interviews_Report.docx"
print(f"\n--- Search for 'oz' or 'lb' in {target3} ---")
print(search_in_docx(target3, "oz")) # Searching for oz as common weight unit
