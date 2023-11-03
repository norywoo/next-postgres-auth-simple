# next-postgres-auth-simple

  <div class="image-container" align="center">
    <img src="https://www.svgrepo.com/show/354513/vercel-icon.svg" alt="PostgreSQL Logo" width="100">  <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="NextJS Logo" width="100">
    <img src="https://www.svgrepo.com/show/354210/prisma.svg" alt="Prisma Logo" width="100">
    <img src="https://www.svgrepo.com/show/303301/postgresql-logo.svg" alt="PostgreSQL Logo" width="100">

  </div>

## Overvew

- A simple sample that uses PostgreSQL Storage provided in the Vercel service environment to create a simple user table and user authentication. To access PostgreSQL, use Prisma ORM under the NextJS framework.
- Inspired by https://github.com/vercel/nextjs-postgres-auth-starter

## Assumptions
- You have a Vercel user account
- You have a Vercel Storage / PostgreSQL database

## Local + Vercel Postgres
- Edit your own .env

```
% cp .env.example .env
% cat .env.example
# Create a Postgres database on Vercel: https://vercel.com/postgres
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
NEXTAUTH_SECRET=
```
- In your vercel account / storage.
- Get your own postgres env variables.
![postgres env vars](./misc/image_env_vars.png)
- To migrate your postgres, i.e. push prisma/schema.prisma target postgres (e.g., Vercel's postgres)
```
% npm run build
```

### User registration TIPS
- Access to the postgres
- Insert a user to User table with email, but empty password:

```
psql "postgres://default:xxxxxxxxxxxx@ep-white-bar-nnnnnn.us-west-2.postgres.vercel-storage.com:5432/verceldb"
verceldb=> INSERT INTO public."User" (email, "password") VALUES ('john@lemmon.com', '');
INSERT 0 1
```
- Then open http://localhost:3000/register
- With email address and new password, you can register the user.str

![user registration](./misc/image_reg.png)

# Vercel deploy
- In vercel, go to the project/setting/environment variables
- And set above environment variables, before deploy.
---
