/** @type {import('next').NextConfig} */

import { join } from 'path';

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
    },
    swcMinify: true,
};

export default nextConfig;
