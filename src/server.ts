import fastify from 'fastify';
import { env } from "./env"
import "dotenv/config"
import db from './plugins/db';
import fastifyJwt from './plugins/jwt';
import fastifyCors from './plugins/cors';
import { errorHandler } from './error-handler';
import { createAccount } from './http/routes/auth/create-account';
import { authenticateWithPassword } from './http/routes/auth/authenticate-with-password';
import { createEvent } from './http/routes/events/create-event';
import { getEvents } from './http/routes/events/get-events';

const app = fastify({ logger: true });

app.setErrorHandler(errorHandler)
app.register(db)
app.register(fastifyJwt)
app.register(fastifyCors)


app.register(createAccount, { prefix: '/auth' });
app.register(authenticateWithPassword, { prefix: '/auth' });


app.register(createEvent, { prefix: '/events' });
app.register(getEvents, { prefix: '/events' });

app.listen({
  port: Number(env.PORT),
  host: env.HOST
}).then(() => {
  console.log("HTTP server running!")
})