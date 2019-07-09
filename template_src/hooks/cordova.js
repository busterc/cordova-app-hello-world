const fs = require('fs').promises;
const join = require('path').join;

module.exports = async ctx => {
  console.log('==> Running Hook: cordova.js');
  const index = join(ctx.opts.projectRoot, 'www', 'index.html');
  let html = await fs.readFile(index, 'utf8');
  html = html.replace(
    '<i hidden>cordova.js</i>',
    '<script src="cordova.js"></script>'
  );
  await fs.writeFile(index, html);
};
