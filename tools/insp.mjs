import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import draco3d from 'draco3dgltf';
import {MeshoptDecoder} from 'meshoptimizer';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'draco3d.decoder':await draco3d.createDecoderModule(),'meshopt.decoder':MeshoptDecoder});
const doc=await io.read(process.argv[2]); const r=doc.getRoot();
console.log('ext',r.listExtensionsUsed().map(e=>e.extensionName).join(','), 'required', r.listExtensionsRequired().map(e=>e.extensionName).join(','));
let tot=0;
for(const m of r.listMeshes()){ for(const p of m.listPrimitives()){ const n=(p.getIndices()?p.getIndices().getCount():p.getAttribute('POSITION').getCount())/3; tot+=n; const mat=p.getMaterial(); console.log(m.getName().padEnd(28),String(n|0).padStart(7),(mat?mat.getName():'-').padEnd(26),mat?mat.getBaseColorFactor().map(x=>x.toFixed(2)).join(' '):'', mat&&mat.getBaseColorTexture()?'TEX':'', mat?mat.getAlphaMode():''); } }
console.log('tris',tot,'textures',r.listTextures().length);
function walk(n,d){ console.log(' '.repeat(d*2)+n.getName(), n.getMesh()?'[mesh '+n.getMesh().getName()+']':'', n.getTranslation().map(x=>x.toFixed(2)).join(',')); n.listChildren().forEach(c=>walk(c,d+1)); }
r.listScenes()[0].listChildren().forEach(n=>walk(n,0));
