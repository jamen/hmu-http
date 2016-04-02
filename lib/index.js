'use strict';

const plugin = require('hmu-plugin')('http');
const http = require('http');
const https = require('https');
const url = require('url').parse;
const c = plugin.c;

module.exports = function status(servers, opts) {
  servers.forEach(server => {
    const inp = url(server);
    inp.headers = opts;
    plugin.get(inp, inp.protocol === 'https:' ? https : http).then(res => {
      const code = res.statusCode;
      if (code >= 400) plugin.log(`${server} ${c.red(code.toString())}`);
      else if (code >= 300) plugin.log(`${server} ${c.yellow(code.toString())}`);
      else if (code <= 200) plugin.log(`${server} ${c.green(code.toString())}`);
      else plugin.log(`${server} ${code.toString()}`);
    }, err => {
      plugin.log(`${server} ${c.red('unavailable')}`);
      if (opts.verbose) console.error(err);
    });
  });
};
