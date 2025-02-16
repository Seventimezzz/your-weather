import webpack from 'webpack';
import path from 'path';

import { BuildEnv, BuildPaths } from './config/webpack/types/config';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

export default (env: BuildEnv): webpack.Configuration => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src' ),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    })

    return config
}
