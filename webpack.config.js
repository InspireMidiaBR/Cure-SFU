const path = require('path');

module.exports = {
    mode: 'development', // ou 'production' para produção
    entry: './client/index.tsx', // Arquivo de entrada principal
    output: {
        path: path.resolve(__dirname, 'dist/public/'), // Diretório de saída
        filename: 'bundle.js' // Nome do arquivo de saída
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'] // Extensões de arquivo que o Webpack deve resolver
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Testa para arquivos TypeScript
                exclude: /node_modules/, // Exclui arquivos na pasta node_modules
                use: 'ts-loader' // Usa o ts-loader para transpilar arquivos TypeScript
            }
        ]
    }
};
