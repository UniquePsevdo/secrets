import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from './builds/univ-build/server/ngfactory/app/app.server.module.ngfactory';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 4000;
const DIST_FOLDER = join(process.cwd(), 'builds/u-build');

enableProdMode();

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});
