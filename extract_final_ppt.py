import zipfile
import xml.etree.ElementTree as ET
import os

def get_pptx_text(path):
    try:
        all_text = []
        with zipfile.ZipFile(path) as z:
            slide_files = sorted([f for f in z.namelist() if 'ppt/slides/slide' in f and f.endswith('.xml')])
            if not slide_files:
                return f"[Warning] {path} is not a standard .pptx (no slides found)"
            for slide_file in slide_files:
                xml_content = z.read(slide_file)
                tree = ET.fromstring(xml_content)
                texts = [node.text for node in tree.iter() if node.tag.endswith('}t') and node.text]
                all_text.append(f"--- {slide_file} ---\n" + ' '.join(texts))
        return '\n\n'.join(all_text)
    except Exception as e:
        return f"Error reading {path}: {str(e)}"

target = r"image/Final-Pitch-Presentationpdf (1).pptx"
output_file = "final_ppt_text.txt"
text = get_pptx_text(target)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(text)

print(f"Extraction complete. Results saved to {output_file}")
