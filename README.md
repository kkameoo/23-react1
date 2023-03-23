# 한동길

## 4주차 23.03.23

#### 1.JSX
    태그로 표현가능, 가독성때문에 사용
        ex) const element= <h1>HEllo, world</h1>; 

    따옴표 사용 
        ex) const element= 'name';
    
    빈 태그는 '/' 사용
        ex) <br/>
### 2.JSX의 역활
    1.내부적으로 XML/HTML 코드를 JAVA SCRIPT코드로 변환
    2.React가 creatElement함수를 사용해 자동으로 JAVA SCRIPT코드로 변환
    3.만일 JS로 작업할 경우 creatElement함수를 사용해야함
    4.가독성을 높여주는 역활을 수행

### 3.JSX의 장점
    1.간결한 코드
    2.가동성의 향상
    3.Injection Attack이라는 해킹방법을 방어함으로 보안에 강함
### 4.JSX의 사용법
    1.모든 자바스크립트 문법 지원
    2.자바 스크립트 문법 + XML + HTML
    3.만일 html이나 xml에 자바스크립트 코드를 사용하고싶으면 {}괄호를 사용
    
    태그의 속성값을 넣을 때
        1.큰따옴표 사이에 문자열 넣기
            ex) const element = <div tabIndex="0"></div>;
        2.중괄호 사이에 자바스크립트 코드 넣기
            ex) const element = <img src = {user.avatarurl}></img>;


    



## 3주차 23.03.16

### 1.웹사이트 chocolately 이용방법, node.js 설치
### 2.node버전 확인 명령어, npm 확인 명령어
    node --version
    npm --version
### 3.리액트 개념 정리
    - 복잡한 사이트를 쉽고 빠르게 만들고,관리하기 위해 만들어진 것
    - 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됨
### 4.장점
    - 빠른 업데이트와 렌더링 속도
        DOM 동기식 <-> Virtual DOM 비동기식
        DOM - XML,HTML 각 문서의 항목을 계층으로 표현해 생성,변형,삭제할 수 있도록 돕는 인터페이스
        Virtual DOM - DOM의 조작을 효율적으로 만들어 속도를 향상시킨 방법
### 5.컴포넌트 기반 구조
    - 리액트의 모든 페이지는 컴포넌트로 구성
    - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성
### 6.재사용성
    - 반복적인 작업을 줄여서 생산성을 높임
    - 유지보수가 용이함
    - 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 함
### 7.오픈소스, 활발할 지식공유, 모바일 앱 개발가능

### 8.단점
    - 방대한 학습량
    - 높은 상태 관리 복잡도

## 2주차 23.03.09 

### github연결 및 설정
    프로젝트 생성 명령어
        npx create-react-app 23-react1
    