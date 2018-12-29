const request = require('request');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const analyze = require('./analyze');

function start() {
    request(config.url, function(err, res, body) {
        console.log('start');
        if(!err && res) {
            console.log('start');
            analyze.findImg(body, download);
        }
    })
}

function download(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
        'encoding': 'utf8'
    }))
    console.log(i);
}

start();