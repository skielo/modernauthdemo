export const environment = {
  production: true,
  name: 'prod',
  httpUrl: 'https://sandbox-us-dev-auth-rest.azurewebsites.net'
};

export function getAdalConfig(){
  return {
    tenant: 'd33ccc9d-eaed-4cfc-800d-0a66d557618a',
    clientId: 'cef76b9f-88e3-4bd3-b4c1-b207901cd807',
    redirectUri: window.location.origin,
    endpoints :{
      "https://sandbox-us-dev-auth-web.azurewebsites.net":"cef76b9f-88e3-4bd3-b4c1-b207901cd807"
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'sessionStorage'
  };
}