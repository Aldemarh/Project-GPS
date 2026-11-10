import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {prune,dedup,weld,simplify,quantize} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc=await io.read('CarConcept.glb'); const r=doc.getRoot();
const drop=/^(Interior|Engine|BodyHoodInterior|BodyWindshieldWipers|License|Axles)/;
for(const n of r.listNodes()){ if(drop.test(n.getName())&&!n.isDisposed()){ n.traverse(c=>{}); n.dispose(); } }
for(const m of r.listMaterials()){ m.setBaseColorTexture(null).setNormalTexture(null).setOcclusionTexture(null).setEmissiveTexture(null).setMetallicRoughnessTexture(null); }
for(const e of r.listExtensionsUsed()) e.dispose();
for(const t of r.listTextures()) t.dispose();
for(const m of r.listMeshes()) for(const p of m.listPrimitives()){ for(const s of p.listSemantics()){ if(s!=='POSITION'&&s!=='NORMAL') p.setAttribute(s,null); } }
await MeshoptSimplifier.ready;
const ratio=parseFloat(process.argv[2]||'.5');
await doc.transform(prune(),dedup(),weld(),simplify({simplifier:MeshoptSimplifier,ratio,error:0.0008}),prune(),quantize({quantizePosition:14,quantizeNormal:8}));
let t=0; for(const m of r.listMeshes()) for(const p of m.listPrimitives()) t+=p.getIndices().getCount()/3;
await io.write('car.glb',doc); console.log('tris',t,'ext',r.listExtensionsUsed().map(e=>e.extensionName));
