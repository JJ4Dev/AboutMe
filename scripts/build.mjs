import {mkdir,copyFile,readFile,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','favicon.svg','_headers'])await copyFile(file,`dist/${file}`);
await mkdir('dist/assets',{recursive:true});
for(const file of ['jan-reist-portrait.jpg','manrope.ttf','space-grotesk.ttf','manrope-OFL.txt','space-grotesk-OFL.txt','favicon-blue.svg'])await copyFile(`assets/${file}`,`dist/assets/${file}`);
for(const dir of ['script','style'])await mkdir(`dist/${dir}`,{recursive:true});
await copyFile('script/portfolio.js','dist/script/portfolio.js');
await copyFile('style/portfolio.css','dist/style/portfolio.css');
const html=await readFile('dist/index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const asset=match[1];if(!asset.startsWith('http')&&!asset.startsWith('mailto:'))await readFile(`dist/${asset}`);}
await writeFile('dist/robots.txt','User-agent: *\nAllow: /\n');
process.stdout.write('Static portfolio built to dist. Referenced assets verified.\n');
