const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    name: 'Lotto-setting',
    mode: 'development', // 실서비스시 production으로 바꾸기
    devtool: 'eval', // hidden-source-map
    resolve: { // 확장자
        extensions:['.js', '.jsx', 'css']
    },
    watch: true,
    devServer: {
        writeToDisk: true
    },

    entry: { // 뭐가 뭐를 불러오는지 이미 웹팩이 파악하고 있다.
        app: ['./Client'],
    },
    module:{
        rules:[{
            test: /\.jsx$/,  
            loader: 'babel-loader', // 옛날 부라우저에 맞게 바꿔줌
            options: { 
                presets: [ //preset이란 플러그인들의 모음이다. 그래서 각 플러그인에 다시 옵션을 줄 수 있다.
                    ['@babel/preset-env', { 
                        targets: { browsers: ['> 1% in KR', 'last 2 chrome versions'] },
                        debug: true
                    }],
                    '@babel/preset-react'
                ],
                plugins: ["@babel/plugin-proposal-class-properties"], 
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'], // 스타일태그를 css로
        }],
    },
    plugins: [ //웹팩의 기본적인 설정외에 무엇인가 더 하고 싶을때
        new webpack.LoaderOptionsPlugin({debug: true}),
        new MiniCssExtractPlugin({ filename: 'app.css' })
    ], 
    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더/dist 로 만들어줌
        filename: 'app.js',
        publicPath: '/dist/' // 가상경로(mount)
    }
};