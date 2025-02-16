import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
      test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  modules: {
                      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                      localIdentName: options.isDev
                          ? '[path][name]__[local]--[hash:base64:5]'
                          : '[hash:base64:8]',
                      namedExport: false,
                  },
              },  
          },
          'sass-loader',
      ],
    }

    const assetsLoader = {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: options.mode === 'production' ? 'asset' : 'asset/resource', 
    }

    const fontsLOader = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env"]
          },
        },
    }

    const tsxLoader = {
        test: /\.tsx?$/, 
        use: "ts-loader",
        exclude: /node_modules/,
    }

    return [assetsLoader, fontsLOader, babelLoader, tsxLoader, cssLoader];
}
