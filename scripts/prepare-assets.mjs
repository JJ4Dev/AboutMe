import {build} from 'esbuild';
import {copyFile} from 'node:fs/promises';
export async function prepareAssets() {
await build({entryPoints:['script/application-scene.js'],bundle:true,format:'esm',platform:'browser',target:['es2022'],minify:true,legalComments:'inline',outfile:'script/architecture-3d.bundle.js'});
await copyFile('node_modules/three/LICENSE','assets/three-LICENSE.txt');
}
await prepareAssets();
