const path=require('path');

module.exports={
    entry:'./src/index.js', //Точка входа для работы с Вебпаком .Начальный файл перед конвертацией
    output: {
        filename: 'script.js', //Конечный файл после конвертации
        path: path.resolve(__dirname, './dist')    //Перенаправляем создание с вебпаком, меняем файл
    },
    mode: 'development',
    devServer: {
     open:true,
     port:8080,
     hot:true,
     writeToDisk:true,

    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                exclude: /node_modules/,
            }
        ]
    }
}