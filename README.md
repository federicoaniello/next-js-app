
App che permette una navigazione basilare. Ho creato un collegamento con un database PostgreSQL in locale, utilizzando Next.js è possibile utilizzare un ORM come Prisma per scambiare i dati in modo sicuro. Inoltre, è possibile caricare documenti su un bucket Amazon S3.

## Getting Started

Create a postgreSQL database (user: postgres, database name: postgres, port: 5432)

Create a .env file in the root of your project

set these strings: 

```bash
AWS_ACCESS_KEY_ID=<set your aws key here>
API_NINJAS_KEY=<api ninjas key>
AWS_SECRET_ACCESS_KEY=<set your aws secret here>
BUCKET_NAME=<set your s3 bucket name here>
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

Then

```bash
npx prisma migrate dev 
```



Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
