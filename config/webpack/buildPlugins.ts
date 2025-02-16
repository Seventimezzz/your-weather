import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";
import { config } from "dotenv"

export function buildPlugins(props: BuildOptions): webpack.WebpackPluginInstance[] {

    const env = config().parsed;
    
    const envKeys = Object.keys(env).reduce<Record<string, string>>((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    const plugins = [

        new HtmlWebpackPlugin({
            template: props.paths.html,
        }),

        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin(envKeys),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
      
    ];

    return plugins;
}
