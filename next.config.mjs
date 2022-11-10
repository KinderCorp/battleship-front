/** @type {import('next').NextConfig} */

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { fileURLToPath } from 'url';
import { join } from 'path';

dotenv.config();

const filename = fileURLToPath(import.meta.url);

const nextConfig = {
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(filename, 'styles')],
  },
  swcMinify: true,
};

export default nextConfig;
