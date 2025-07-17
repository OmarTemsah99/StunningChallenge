# StunningChallenge Monorepo

This repository contains both the frontend and backend applications for the StunningChallenge project, managed as a monorepo using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) and [Turborepo](https://turbo.build/).

## Project Structure

```
apps/
  front/   # Next.js frontend app
  api/     # NestJS backend API
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (v9+ recommended)

---

## Step-by-Step Setup Guide

### 1. Clone the Repository

```bash
# Replace <repo-url> with your repository URL
git clone <repo-url>
cd StunningChallenge
```

### 1.1. Add the API Repository

If the `apps/api` folder is not already present, make sure to add or clone the API repository into `apps/api`:

```bash
# From the root of the monorepo
cd apps
# Replace <api-repo-url> with your API repository URL
git clone <api-repo-url> api
cd ..
```

### 2. (If starting from scratch) Initialize npm in the root

If you are setting up this monorepo from scratch, run:

```bash
npm init -y
```

> **Reminder:** After running `npm init -y`, you must manually adjust the `scripts` and `workspaces` fields in the root `package.json` to match the structure and commands shown below. This ensures that Turborepo and workspace commands work correctly.
>
> Example:
>
> ```json
> "scripts": {
>   "dev": "turbo run dev",
>   "build": "turbo run build",
>   "lint": "turbo run lint"
> },
> "workspaces": [
>   "apps/*"
> ]
> ```

### 3. Install Turbo (Globally, Optional)

Turborepo can be used via `npx`, but for convenience you may install it globally:

```bash
npm install -g turbo
```

### 4. Install All Dependencies

This will install dependencies for all workspaces (frontend and backend):

```bash
npm install
```

### 5. Set Up Environment Variables

- **Frontend:**
  - Create a file named `.env.local` in `apps/front/`.
  - Add the following line to it:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:8000
    ```

- **Backend:**
  - Create a file named `.env` in `apps/api/`.
  - Add the following line to it:

    ```env
    MONGODB_URI=mongodb://localhost:27017/stunningchallenge
    ```

  - The backend uses MongoDB as its database. Set `MONGODB_URI` to your MongoDB connection string if different.

See each app’s README for more details on environment variables.

### 6. Run the Development Servers

This will start both the frontend and backend in development mode using Turborepo:

```bash
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000](http://localhost:8000) _(or as configured)_

### 7. Build All Apps

To build both frontend and backend for production:

```bash
npm run build
```

### 8. Lint All Apps

To check code quality for all workspaces:

```bash
npm run lint
```

### 9. Run Backend (API) Only

If you want to run just the backend API:

```bash
cd apps/api
npm install # if not already done
npm run start:dev
```

### 10. Run Frontend Only

If you want to run just the frontend:

```bash
cd apps/front
npm install # if not already done
npm run dev
```

---

## App-specific Instructions

- **Frontend (Next.js):** See [`apps/front/README.md`](apps/front/README.md) for details on running, building, and deploying the frontend.
- **Backend (NestJS):** See [`apps/api/README.md`](apps/api/README.md) for backend-specific setup, running, and deployment instructions.

## Notes

- This monorepo uses [Turborepo](https://turbo.build/) for efficient builds and task running.
- Each app maintains its own dependencies and scripts.
- For environment variables and advanced configuration, refer to the respective app's README.

---

For any issues or questions, please refer to the app-specific documentation or open an issue in this repository.
