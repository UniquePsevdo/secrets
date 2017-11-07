"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var express = require("express");
var path_1 = require("path");
var fs_1 = require("fs");
var fs = require('fs');
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Express server
var app = express();
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = path_1.join(process.cwd(), 'builds');
// Our index.html we'll use as our template
var template = fs_1.readFileSync(path_1.join(DIST_FOLDER, 'prod-build', 'index.html')).toString();
function getHash() {
    var files = fs.readdirSync(process.cwd() + "/builds/prod-build");
    var mainFiles = files.filter(function (file) { return file.startsWith('main'); });
    return mainFiles[0].split('.')[1];
}
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./builds/prod-build/main.' + getHash() + '.bundle'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
var provideModuleMap = require('@nguniversal/module-map-ngfactory-loader').provideModuleMap;
app.engine('html', function (_, options, callback) {
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
    }).then(function (html) {
        callback(null, html);
    });
});
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'prod-build'));
// Server static files from /browser
app.get('*.*', express.static(path_1.join(DIST_FOLDER, 'prod-build')));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render(path_1.join(DIST_FOLDER, 'prod-build', 'index.html'), { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node server listening on http://localhost:" + PORT);
});
