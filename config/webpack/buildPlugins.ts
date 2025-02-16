import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";

export function buildPlugins(props: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [

        new HtmlWebpackPlugin({
            template: props.paths.html,
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
      
    ];

    return plugins;
}
