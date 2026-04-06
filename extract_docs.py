import zipfile
import xml.etree.ElementTree as ET
import os

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        # Use wildcard for namespaces to be safe
        texts = [node.text for node in tree.iter() if node.tag.endswith('}t') and node.text]
        return ' '.join(texts)
    except Exception as e:
        return f"Error reading {path}: {str(e)}"

def get_pptx_text(path):
    try:
        all_text = []
        with zipfile.ZipFile(path) as z:
            slide_files = sorted([f for f in z.namelist() if 'ppt/slides/slide' in f and f.endswith('.xml')])
            for slide_file in slide_files:
                xml_content = z.read(slide_file)
                tree = ET.fromstring(xml_content)
                texts = [node.text for node in tree.iter() if node.tag.endswith('}t') and node.text]
                all_text.append(f"--- {slide_file} ---\n" + ' '.join(texts))
        return '\n\n'.join(all_text)
    except Exception as e:
        return f"Error reading {path}: {str(e)}"

if __name__ == "__main__":
    target_dir = r"doc"
    files = [
        "Customer_Discovery_Interviews_Report.docx",
        "Lean Canvas_ Everyday Friction.docx",
        "Product Description_Everyday Friction_ChargeMate.docx",
        "Syllabus.docx",
        "Everyday Friction - Pain Points Presentation.pptx",
        "MVP Presentation_Everyday Friction_ChargeMate.pptx",
        "Persona-Report-and-Presentation.pptx"
    ]
    
    for filename in files:
        path = os.path.join(target_dir, filename)
        if not os.path.exists(path):
            print(f"Skipping {filename}: Not found")
            continue
            
        print(f"\n{'='*40}")
        print(f"FILE: {filename}")
        print(f"{'='*40}\n")
        
        if filename.endswith('.docx'):
            print(get_docx_text(path))
        elif filename.endswith('.pptx'):
            print(get_pptx_text(path))
