# Modern Authentication DEMO
This is an angular website consuming a .net core 3.1 REST API using modern authentication.

__Under *myAuthWeb* folder you will find the Angular application.__ You can access to the working example [here](https://sandbox-us-dev-auth-web.azurewebsites.net/)

__Under *myWebAPI* folder you will find the .NET Core REST API.__

The main idea of this tutorial is to show how to properly secure a Website and a REST API using modern authentication provided by Azure.

## RFC Standar especifications

In the following [link](https://tools.ietf.org/html/rfc6749) you will find the _OAuth_ standar especification to use as a reference.

__Protocol Flow__

     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+

For the _JWT_ starndar can be found [here](https://tools.ietf.org/html/rfc7519).

## Chagelog

- [x] We are implementing a new library for the Angular application since the __ADAL__ has been deprecated. The new [library](https://www.npmjs.com/package/@azure/msal-angular) MSAL for Angular enables client-side Angular web applications, running in a web browser, to authenticate users using Azure AD work and school accounts (AAD), Microsoft personal accounts (MSA) and social identity providers like Facebook, Google, LinkedIn, Microsoft accounts, etc. through Azure AD B2C service. It also enables your app to get tokens to access Microsoft Cloud services such as Microsoft Graph.
