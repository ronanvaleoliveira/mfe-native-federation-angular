import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';


const federationManifest = environment.production
  ? './assets/federation.manifest.prod.json'
  : './assets/federation.manifest.json';

initFederation(federationManifest)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
