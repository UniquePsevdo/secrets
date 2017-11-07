import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
const fs = require('fs');
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'builds');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'prod-build', 'index.html')).toString();

function getHash() {
    const files = fs.readdirSync(`${process.cwd()}/builds/prod-build`);
    const mainFiles = files.filter(file => file.startsWith('main'));
    return mainFiles[0].split('.')[1];
}

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./builds/prod-build/main.'+getHash()+'.bundle');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
    }).then(html => {
        callback(null, html);
    });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'prod-build'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'prod-build')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'prod-build', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});
