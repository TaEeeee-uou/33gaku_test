import urllib.request

url = "https://forms.gle/GpwtysSePRtaEZKHA"
try:
    req = urllib.request.Request(url, method="HEAD")
    with urllib.request.urlopen(req) as response:
        print(response.geturl())
except Exception as e:
    print(e)
