<h1 align="center">🎨PaintBoard</h1>
<br>
<p align="center">
🐰엘리스 SW 엔지니어🐰<br>
유소프 스터디에서 진행하고 있는 소소하고 소박한 프로젝트입니다.<br>
해당하는 주제에 각자 자바스크립트로 기능들을 구현해보며<br> 
완성하는 것을 목적으로 하고있습니다.<br>
</p> 
<br><br>

<div align="center">
📌2주차 주제 : 그림판 구현<br> 
2주차 주제는 그림판 구현으로 키보드 이벤트를 자세히 배울 수 있습니다.

<br>
<br>
<br>

📌기능<br>
canvas 태그 이용 => 2d 메서드<br>
EventListener 이용<br>
jquery 이용
</div>

<br>
<br>

## 🎨Result
![test2](https://github.com/SOFTNY/paintBoard_Proj2/assets/111892963/8db608dc-0def-4f59-b4bb-ff8c92b9c342)
<br>
<br>

## ⌛개발 기간
23.10.8(일) ~ 23.10.12(목)

<br>
<br>
<br>

## 📌Main Function
#### 2d 메서드
```javascript
ctx.lineWidth : Canvas 2D API의 속성은 선의 두께를 설정한다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth

ctx.lineCap : 선의 끝점을 그리는 데 사용되는 모양이 결정된다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap

ctx.lineTo : lineTo()하위 경로의 마지막 점을 지정된 좌표에 연결하여 현재 하위 경로에 직선을 추가한다(x, y).
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo

cte.stroke : 현재 스트로크 스타일을 사용하여 현재 또는 지정된 경로를 스트로크(윤곽선)한다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke

ctx.moveTo : 주어진 좌표로 지정된 지점에서 새로운 하위 경로를 시작한다 (x, y).
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo

ctx.beginPath : 하위 경로 목록을 비워서 새 경로를 시작한다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath

ctx.fillRect : 현재에 따라 채워지는 직사각형을 그린다.
fillRect(x, y, width, height) -> 채우기 스타일은 fillStyle 속성에 따라 결정된다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect

ctx.fillStyle : 모양 내부에 사용할 색상, 그라데이션 또는 패턴을 지정
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

ctx.strokeStyle : 모양 주위의 획(윤곽선)에 사용할 색상, 그라데이션 또는 패턴을 지정
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle

ctx.drawImage : 캔버스에 이미지를 그리는 다양한 방법을 제공
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

ctx.fillText : 지정된 좌표에 텍스트 문자열을 그려 문자열의 문자를 현재 fillStyle
fillText(text, x, y)
fillText(text, x, y, maxWidth)
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText


ctx.restore : 그리기 상태 스택의 최상위 항목을 팝하여 가장 최근에 저장된 캔버스 상태를 복원한다. 
저장된 상태가 없으면 이 메서드는 아무 작업도 수행하지 않는다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore
```

#### EventListener
```javascript
dblclick : 두 번 눌렀다 땔 때 
mousemove : 마우스를 움직였을 때
mousedown : 마우스를 누르고 있을 때
mouseup : 눌렀던 마우스 버튼을 땔 때
mouseleave : 마우스가 벗어날 때(자식 요소 포함X)
click : 사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때
change : 선택상자, 체크박스, 라디오 버튼의 상태가 변경되었을 때
scroll : 스크롤할 때
```

<br>

## 개선점
✅글씨, 지우개 크기 조절할 수 있도록 하기 <br>
✅도형 도구 만들기 
