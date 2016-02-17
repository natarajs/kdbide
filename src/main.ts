import * as core from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import { HTTP_PROVIDERS } from 'angular2/http';

declare var ag: any;
ag.grid.initialiseAgGridWithAngular2({ core: core });


bootstrap(AppCmp, [
  HTTP_PROVIDERS,ROUTER_PROVIDERS, MATERIAL_PROVIDERS,
  core.provide(LocationStrategy, { useClass: HashLocationStrategy })
]);


