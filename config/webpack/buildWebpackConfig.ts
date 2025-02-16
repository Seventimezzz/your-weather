import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, paths } = options
    const { entry, build } = paths
   
    const config: webpack.Configuration = {
        mode,
        entry,
        devtool: 'source-map',
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
        output: {
            path: build,
            clean: true,
            filename: '[name].[contenthash].js',
            assetModuleFilename: 'assets/[hash][ext][query]', 
        },
    }

    return config
}
