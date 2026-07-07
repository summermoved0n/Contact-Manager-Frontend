# Contact Manager

A responsive contact management application built with React. Users can create
an account, sign in, maintain a personal contact list, and quickly find saved
contacts.

[Live demo](https://summermoved0n.github.io/Contact-Manager-Frontend/)

## Features

- User registration, sign-in, and sign-out
- Persistent authentication between browser sessions
- Protected routes for authenticated users
- Add and delete personal contacts
- Filter contacts by name
- Loading indicators and toast notifications
- Responsive desktop and mobile interface
- Automatic deployment to GitHub Pages

## Technologies

- React 18
- Redux Toolkit and React Redux
- Redux Persist
- React Router
- Axios
- Chakra UI and Emotion
- Styled Components
- React Hot Toast
- Create React App

The application uses the
[GoIT Connections API](https://connections-api.goit.global) for authentication
and contact storage.

### Prerequisites

Install a current LTS version of [Node.js](https://nodejs.org/), which includes
npm.

### Installation

```bash
git clone https://github.com/summermoved0n/Contact-Manager.git
cd Contact-Manager
npm install
```

### Development

Start the local development server:

```bash
npm start
```

Open
[http://localhost:3000/Contact-Manager-Frontend](http://localhost:3000/Contact-Manager-Frontend)
in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run lint:js` | Runs ESLint for JavaScript and JSX files |
| `npm test` | Starts the test runner in interactive mode |

## Project Structure

```text
src/
├── components/    Reusable interface and routing components
├── images/        Application background images
├── pages/         Home, login, registration, and contacts pages
├── redux/         Store, slices, selectors, and async operations
├── services/      API client and shared styles
└── index.js       Application entry point
```

## Deployment

Pushes to the `main` branch trigger the GitHub Actions workflow. It installs
dependencies, runs ESLint, creates a production build, and deploys the `build`
directory to the `gh-pages` branch.

To create the production build locally:

```bash
npm run build
```

## Author

[summermoved0n](https://github.com/summermoved0n)
