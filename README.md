# project

vue3 에 대한 학습을 위한 프로젝트

## vue 설치

```
npm install -g vue
npm install -g @vue/cli
npm update -g @vue/cli
```


## vue 프로젝트 생성

```
vue create basic
```

## router
router/index.js 파일에 보면 path 별로 어디 페이지를 보여줄지 정의되어 있다.  
  
prefetch 로 등록 하게 되면 캐쉬에 저장하게 된다. 실제 페이지 이동할 때 호출하게 된다. webpackPrefetch:true  
사용자가 들어갈 확률이 높은 경우에는 prefetch 를 사용하면 좋다. 사이즈가 작은 경우에는 궂이 prefetch 를 사용하지 않아도 된다.    
```
component:() => import(/* webpackChunkName: "about" , webpackPrefetch:true*/ "../views/AboutView.vue"),
```
  
## Style 사용법  
vue 파일에서 style scoped 로 지정하면 해당 vue 파일에서만 적용된다.  

vue는 template 에서는 html 을 script 에서는 js 를 style 에서는 스타일만 담당한다  


## 폴더 구조
views : 화면 전체를 구성하는 컴포넌트들을 모아놓은 폴더  
components : 재사용 가능한 하부의 컴포넌트  

## ESlint
Airbnb 스타일을 사용한다. .eslintrc.js 파일을 보면 설정을 확인할 수 있다.

## prettier 
.prettierrc 파일을 보면 설정을 확인할 수 있다.

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

## vue의 구현
1. 단반향 데이터 바인딩  : vue는 data에 있는 값을 template 에서 사용할수 있다.  
2. v-html 을 사용하면 html 태그를 사용할 수 있다.
3. v-model을 사용하면 양방향 데이터 바인딩이 가능하다.
4. methods 에서 항수를 선언하고 template 에서 사용할 수 있다.
5. v-bind 는 속성에 연결하는 경우에 사용 가능하다 생략도 가능하다 :
6. v-for 는 반복문을 사용할 수 있다.
7. class binding을 통해서 스타일을 조작해서 적용 가능하다.
8. v-on:click 을 통해서 이벤트를 등록할 수 있다. 이거 대신 @로 표현도 기능하다.  
9. 

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
