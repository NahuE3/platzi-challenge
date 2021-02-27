const esbuild = require('esbuild');

esbuild.build({
  minify: true,
  bundle: true,
  platform: 'node',
  target: ['node14.15'],
  outfile: 'dist/index.js',
  entryPoints: ['src/server/index.jsx'],
}).catch((e) => console.error(e.message));

esbuild.build({
  minify: true,
  bundle: true,
  outfile: 'dist/public/app.js',
  entryPoints: ['src/frontend/index.jsx'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch((e) => console.error(e.message));
