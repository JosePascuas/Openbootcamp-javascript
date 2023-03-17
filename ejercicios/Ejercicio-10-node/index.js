const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'my-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});

function createCustomError() {
  throw new Error( "Este es un mensaje personalizado");
}

try {
  createCustomError()
} catch (error) {
  logger.error("esto es un error");
}
