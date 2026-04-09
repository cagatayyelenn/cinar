import os

# run the logic again but targeted correctly
with open("tmp/build_spare_parts.py", "r", encoding="utf-8") as f:
    code = f.read()
    
# modify the replacement line
code = code.replace(
    'if "];\\nexport const services = [" in mock_content:\n    mock_content = mock_content.replace("];\\nexport const services = [", ",\\n" + output_js + "\\n];\\nexport const services = [")',
    'if "\\n]\\n;\\nexport const services = [" in mock_content:\n    mock_content = mock_content.replace("\\n]\\n;\\nexport const services = [", ",\\n" + output_js + "\\n]\\n;\\nexport const services = [")'
)

with open("tmp/build_spare_parts_fix.py", "w", encoding="utf-8") as f:
    f.write(code)
