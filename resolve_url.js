const https = require('https');

const url = "https://forms.gle/GpwtysSePRtaEZKHA";

https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const fs = require('fs');
        fs.writeFileSync('url.txt', res.headers.location);

    } else {
        console.log(url); // No redirect or other status
    }
}).on('error', (e) => {
    console.error(e);
});
