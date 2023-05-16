# Nuxt Todo List on the Serverless with Edgio

A demonstration using [Nuxt](https://nuxt.com) with server-side rendering on the serverless, authentication and database using SQLite ([Turso](https://turso.tech)).

https://github.com/rishi-raj-jain/nuxt-turso-edgio-example

Live demo:
- Edgio + Turso: https://rishi-raj-jain-turso-default.layer0-limelight.link

## Features

- Server-Side Rendering
- Authentication backed-in
- Leverage SQLite as database with migrations

## Stack

- Frontend:
  - [Nuxt](https://nuxt.com/) - The Vue Framework for Web Architects
  - [TailwindCSS](https://tailwindcss.com/) for styling and layout
- Backend:
  - Sqlite in development and [Turso](https://turso.tech) in production using [drizzle-orm](https://github.com/drizzle-team/drizzle-orm)

## Setup

Make sure to install the dependencies using npm:

```bash
npm i
```

Create a [GitHub Oauth Application](https://github.com/settings/applications/new) with:
- Homepage url: `http://localhost:3000`
- Callback url: `http://localhost:3000/api/auth/github`

Add the variables in the `.env` file:

```bash
NUXT_GITHUB_CLIENT_ID="my-github-oauth-app-id"
NUXT_GITHUB_CLIENT_SECRET="my-github-oauth-app-secret"
```

To create sealed sessions, you also need to add `NUXT_SESSION_PASSWORD` in the `.env` with at least 32 characters:

```bash
NUXT_SESSION_PASSWORD=your-super-long-secret-for-session-encryption
```

## Development

Start the development server on http://localhost:3000

```bash
edg dev
```

## Deploy on Edgio

```bash
edg deploy
```

### Environment variables

```bash
NUXT_GITHUB_CLIENT_ID="..."
NUXT_GITHUB_CLIENT_SECRET="..."
NUXT_SESSION_PASSWORD="..."
TURSO_DB_URL="..."
TURSO_DB_TOKEN="..."
```

### Build command

Set the build command to:

```bash
edg build
```

And the output directory to `./.edgio`

### Turso Database

You can also use [Turso](https://turso.tech/) database by creating a database and adding the following env variables:

```
TURSO_DB_URL=...
TURSO_DB_TOKEN=...
```

## License

[MIT License](./LICENSE)
