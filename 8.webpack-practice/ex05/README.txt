ex05: SASS/SCSS Module 번들링 하기 

1. 설치 패키지
[ex05]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. css Loader 설정(webpack.config.js)
module: {
        rules: [{
            test: /\.(c|sa|sc)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader]
        }]
    }

3. 스크립팅
  "scripts": {
    "start": "npx webpack server --progress",
    "build": "npx webpack"
  }

4. 빌드
[ex05]$ npm run build

5. 실행
[ex05]$ npm start
