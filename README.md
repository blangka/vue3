# project

vue3 에 대한 학습을 위한 프로젝트

## vue 설치

    ```bash
    npm install -g vue
    npm install -g @vue/cli
    npm update -g @vue/cli
    ```

## vue 프로젝트 생성

    ```bash
    vue create basic
    ```

## router
router/index.js 파일에 보면 path 별로 어디 페이지를 보여줄지 정의되어 있다.


### vue create option 선택 목록
Babel
Router
Vuex linter
Use history mode for router
3.X
ESlint + airbnb config
Lint on save

## vue 구동 원리
public/index.html 에서 vue 를 로드하고, main.js 에서 vue 를 실행한다.
<div id="app"></div> 에서 vue 를 실행한다.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
