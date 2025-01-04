import PyPDF2
import requests

import json

fFileObj = open('Resume.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(fFileObj)
pageObj = pdfReader.getPage(0)
print("Total Pages : {} ".format(pdfReader.numPages))

resume = pageObj.extractText()
url = "https://api.iki.ai/api/skills_extraction/"



payload = {
    "text":str(resume[0:2000])
}


headers = {
    'Content-Type': 'application/json'
}

print(len(resume))


r = requests.post(url=url, headers=headers, data​ = json.dumps(payload))
print(r.json())