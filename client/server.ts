import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 4000;
const DIST_FOLDER = join(process.cwd(), 'builds/u-build');

enableProdMode();

const app = express();

const template = readFileSync(join('builds', 'prod-build', 'index.html')).toString();

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./builds/univ-build/main.bundle');

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

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

//todo: check and fix paths!!!

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'builds', 'prod-build'));

app.get('*.*', express.static(join(DIST_FOLDER, 'builds', 'prod-build')));

app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'builds', 'prod-build', 'index.html'), { req });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});
