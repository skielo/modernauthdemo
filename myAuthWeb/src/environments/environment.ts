// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  httpUrl: 'https://localhost:44328'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export function getAdalConfig(){
  return {
    tenant: 'd33ccc9d-eaed-4cfc-800d-0a66d557618a',
    clientId: 'cef76b9f-88e3-4bd3-b4c1-b207901cd807',
    redirectUri: window.location.origin,
    endpoints :{
      "http://localhost:4200":"cef76b9f-88e3-4bd3-b4c1-b207901cd807"
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'sessionStorage'
  };
}