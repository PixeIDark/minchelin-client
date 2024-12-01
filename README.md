## 지침
- ant pattern 은 인라인 스타일을 통해 커스텀 할 수 있음.         
=> panda css 의 recipe 에서 color 와 크기를 규격화 해보자.
- 순수 컴포넌트와 함수, 하나의 기능만 하게 만들기. 
- 다크 모드: body, solid, icon 색 변화       
=> 위 3개만 theme 만들어서 왔다갔다 하면됨. 
    - body = light: #FFFFFF, dark: #202225
    - solid = light: #243B77, dark: #B4C4FB
    - icon = 보류.
    - static css 적용하면 색은 새로고침 시에 깜빡임 없는데 테마아이콘은 있음       
  => 다른 사이트들 처럼 테마아이콘 나중에 보여주자.
- account, login 둘 다 버튼의 높이는 같음. 그리고 클릭 시, input 의 데이터가 post 로 날아감 똑같이 hook, css, scheme 공유 가능. 미들 웨어를 어떻게 해야함?? 머리 터진다.. 
- 리액트 폼, 주드, 쿼리 써야하나? ㅎㅎㄹㄴㅇㅁ
- public 폴더 해야함? 말아야함?
- intercept 와 instance 구현 어떻게 할지.

## 진척 
A. 기본 인증 구조

1. NextAuth 설정 
  - [ ] 소셜 로그인 (Google/Github) 연동
  - [ ] 세션 설정
  - [ ] 콜백 설정
2. React Query 셋업
  - [ ] QueryClient 프로바이더 설정
  - [ ] 세션 관리를 위한 커스텀 훅

B. UI 구현

1. 로그인/회원가입 폼 (React Hook Form + antd)
  - [ ] 이메일/패스워드 폼
  - [ ] 소셜 로그인 버튼
  - [ ] Zod 검증
2. 보호된 라우트 구현
  - [ ] middleware.ts
  - [ ] 레이아웃 설정

- react-hook form 이랑 antd 랑 호환성 구데기임 둘 중하나 골라야함.