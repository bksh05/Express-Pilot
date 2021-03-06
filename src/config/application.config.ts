/**
 * Application related configuration
 * All these values are imported from .env file
 */
const APPLICATION_CONFIG = {
    PORT : (process.env as any).PORT,
    ENVIRONMENT : (process.env as any).ENV
};

export default APPLICATION_CONFIG;