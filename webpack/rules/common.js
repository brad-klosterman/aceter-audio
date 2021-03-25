import { babelLoader } from './useLoaderRuleItems';
import RemarkHTML from "remark-html";

export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};

export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

export const mjsRule = {
    test: /\.m?js/, 
    resolve: {
        fullySpecified: false,
    },
};

export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};

export const mdRule = {
    test: /\.md$/,
    use: [
        {
            loader: 'html-loader',
        },
        {
            loader: 'remark-loader',
            options: {
                remarkOptions: {
                    plugins: [RemarkHTML],
                },
            },
        },
    ],
};

export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
};

export const audioRule = {
    test: /\.mp3$/,
    type: 'asset/resource',
};

export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};
