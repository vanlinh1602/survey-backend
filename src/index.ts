import './server/firebase';

import startServer from 'server';

require('dotenv-flow').config();

global.ProductID = 'survey';

const server = startServer({
  cors: {
    origin: [/surveys.linhnv.online/],
  },
  session: {
    secret: process.env.SS_SECRET ?? 'dev',
    store: process.env.DB_SRV ?? '',
  },
  port: process.env.PORT ?? '',
  databases: {
    surveys: {
      srv: process.env.DB_SRV ?? '',
      indexes: {
        responses: {
          spec: { surveyId: 1 },
        },
        users: {
          spec: { email: 1 },
        },
      },
    },
  },
});

if (process.env.NODE_ENV !== 'development') {
  const gracefullShutdown = async () => {
    server.close();
  };
  process.on('SIGTERM', async () => {
    await gracefullShutdown();
  });
  process.on('SIGINT', async () => {
    await gracefullShutdown();
  });
  process.on('SIGQUIT', async () => {
    await gracefullShutdown();
  });
  process.once('SIGUSR2', async () => {
    await gracefullShutdown();
  });
}
