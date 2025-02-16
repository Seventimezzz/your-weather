import path from "path";
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            "@app": path.resolve(__dirname, 'src', 'app'),
            "@entities": path.resolve(__dirname, 'src', 'entities'),
            "@pages": path.resolve(__dirname, 'src', 'pages'),
            "@shared": path.resolve(__dirname, 'src', 'shared'),
            "@widgets": path.resolve(__dirname, 'src', 'widgets'),
            "@features": path.resolve(__dirname, 'src', 'features'),
        },
    }
}