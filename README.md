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