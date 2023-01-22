// @ts-check

export const Env = {
    development: 'development',
    production: 'production'
};

export const isDev = process.env.NODE_ENV === Env.development;
