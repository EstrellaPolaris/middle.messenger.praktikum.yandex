# Chat


## Project Description

Chat for real-time communication in the form of a single page application (Single Page Application, or SPA) without the use of ready-made frameworks.
Independent practical work performed as part of training on the professional program "Middle Frontend Developer".


## Sprint 1

* Designed app layout based on [template](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1) in Figma.
* Implemented the main pages of the application using the template engine [Handlebars](https://handlebarsjs.com/).
* Customized build using [Parcel](https://parceljs.org/).
* Created a dev environment and NodeJS + Express for distributing static files on the local computer.
* Used preprocessor [Less](https://lesscss.org/) when writing page styles.
* [App](https://peppy-frangollo-74608c.netlify.app) is automatically deployed from the `deploy` branch to [Netlify](https://www.netlify.com/).


## Sprint 2

* Files are structured according to architectural advice. Added component approach.
* The project is written in TypeScript, taking into account the new components.
* Configured static code analysis [ESLint] and [Stylelint]. The principles of SOLID, DRY, KISS are used.
* Added client validation for all forms.
* Implemented event bus (`EventBus.ts`).
* Implemented a component (`Block.ts`) with its own props, lifecycle and reactive renderer. When changing props (using `Proxy`).
* Implemented analog fetch for requests to the server (`HTTPTransport.ts`).


## Sprint 3

* Implementation of the client router (`Route.ts`, `Router.ts`).
* Client-server interaction and work with requests.
* Implemented HTTP API for chats, authorization and users.
* Added `api` layer.
* Added `controllers` layer.
* Implementation of the central store (`Store.ts`).
* Used `WebSocket` to work with real-time chat messages.
* The following features are implemented in the application:
   * Registration
   * Authorization
   * Sign Out
   * Change user data
   * Create and add users in chat
   * List of user's chats
   * Sending text messages
* The project is protected from XSS and DOS.


## Sprint 4

* Added Unit tests for template engine, router, component and request module.
* Configured build using [Webpack](https://webpack.js.org).
* Configured `precommit` for the project.
* Used [Docker](https://www.docker.com) to build a static application.


## Installation

- `npm install` - install dependencies.
- `npm run dev` - run the project in development mode.
- `npm run build` - start building the project.
- `npm run start` - start the project on the server.
- `npm run test` - run tests.
