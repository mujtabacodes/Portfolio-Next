# Porfolio Website

This is my personal portfolio website. It is a full-stack application, with both the frontend and backend built using NextJS. You can view the demo
https://mujtabacodes.com

## Tech Stack

- NextJS
- ReactJS
- Typescript
- TailwindCSS
- Prisma
- PostgreSQL
- Docker

## Want to work with this?

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/mujtabacodes/Portfolio-Next.git
```

```bash
yarn install
# or
npm install

```

Then, change .env.example to .env and put the actual database URL. For the initial stage, you can use [Neon](https://neon.tech/)

```bash
npx prisma migrate
# then
npx prisma generate

```

Start the development server:

```bash
yarn dev
# or
npm run dev

```

Note: Feel free to use [pnpm](https://pnpm.io/) or [bun](https://bun.sh/)

## By Using Docker

- First review docker file and if yarn is not globally install then comment line '5'

Then create Docker image:

```bash
docker build -t portfolio-next .
```

Run container:

```bash
docker run -p 3000:3000 portfolio-next

```

## Reach to me

<div align="center"> 
  <a href="mailto:mujtaba.shafique@outlook.com">
    <img src="https://img.shields.io/badge/Email-333333?style=for-the-badge&logo=gmail&logoColor=blue" />
  </a>
  <a href="https://www.linkedin.com/in/mujtaba-shafique/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <a href="https://mujtabacodes.com/" target="_blank">
     <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white" target="_blank" /> 
  </a>
</div>
