# kstr.dev
## STACK

## 알게된 것들
- firebase 배포시 build 디렉토리 내부의 자료들만 배포하게 되어있고, `+ .. server.js` 파일 내부의 코드들은 `static-adapter`의 경우 사전 로드.. 그러니까 빌드 당시에 서버에서 불러온 데이터를 데이터로 직접 박아놓게 되는 듯함.
    - 공식 문서에서 `static-adapter` 사용시 +layout.js 파일에 `export const prerender = true;`를 추가하라는 이야기가 있어서 적용했는데 아마 그게 이쪽 설정인 것 같음.

## 해결해야 할 것들
- [ ] svelte의 페이지 전환 방식이... 페이지를 전환하는 척만 하는 걸로 알고있음. 그래서 route할 때.. 실제론 없는 경로가 주소창에 적히고 그 페이지를 보여주게 됨. 그 상황에서 `F5` ... firebase에서 NOT FOUND를 뱉어버린다. 이거 어떻게 해결하지?