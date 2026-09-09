import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import path from 'node:path';
const root=process.cwd(), clients=new Set();
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.ttf':'font/ttf','.woff2':'font/woff2','.json':'application/json'};
http.createServer(async(req,res)=>{
 const pathname=new URL(req.url,'http://localhost').pathname;
 if(pathname==='/__events'){res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-cache',Connection:'keep-alive'});res.write('data: connected\n\n');clients.add(res);req.on('close',()=>clients.delete(res));return;}
 const file=path.resolve(root,'.'+decodeURIComponent(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(root+path.sep)||pathname.includes('/.')){res.writeHead(403).end();return;}
 try{if(!(await stat(file)).isFile())throw Error();let data=await readFile(file);if(file.endsWith('.html'))data=Buffer.from(data.toString().replace('</body>','<script>new EventSource("/__events").onmessage=e=>{if(e.data==="reload")location.reload()}</script></body>'));res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404).end('Not found');}
}).listen(4173,'127.0.0.1',()=>process.stdout.write('Local: http://127.0.0.1:4173\n'));
let timer;watch(root,{recursive:true},(_,name)=>{if(!name||/^(\.git|dist|node_modules|\.openai)/.test(name))return;clearTimeout(timer);timer=setTimeout(()=>clients.forEach(c=>c.write('data: reload\n\n')),150);});
