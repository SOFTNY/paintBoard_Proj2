//해당하는 요소 js로 가져오기
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");

//canvas
const canvas = document.querySelector("canvas");

//canvas.getContext() '2d'로 그리기 함수 호출
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800; //넓이 변수
const CANVAS_HEIGHT = 800; //높이 변수
canvas.width = CANVAS_WIDTH; //캔버스의 넓이
canvas.height = CANVAS_HEIGHT; //캔버스의 높이

ctx.lineWidth = lineWidth.value; //lineWidth 2d 선의 두께
ctx.lineCap = "round"; //lineCap 선의 끝점 모양
//butt, round, square

let isPainting = false; //그리기
let isFilling = false; //채우기

//마우스 움직인곳에 그리기
function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY); //lineTo 지정된 좌표 연결 (X좌표, Y좌표)
    ctx.stroke(); //선
    return;
  }
  ctx.moveTo(e.offsetX, e.offsetY);
}

//그리기 시작 true
function startPainting() {
  isPainting = true;
}

//그리기 취소 false
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

//선두께 변화
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}

//선, 채우기 변화
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}

//모드버튼
function onModeClick() {
  if (isFilling) {
    isFilling = false; //채우지X
    modeBtn.innerText = "Fill"; //버튼 텍스트를 Fill로
  } else {
    isFilling = true; //채우기O
    modeBtn.innerText = "Draw"; //버튼 텍스트를 Draw로
  }
}

//채워진 배경칠하기
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

//그렸던것 모두 다 없애기
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//지우개 클릭
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

//파일 이미지 변경
function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

//input[type="text"] 글작성 함수
function onDoubleClick(e) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "30px sans-serif";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  }
}

//저장함수
function onSaveClick() {
  const url = canvas.toDataURL(); //캔버스에
  const a = document.createElement("a"); //a태그 요소 추가
  a.href = url;
  a.download = "";
  a.click();
}

//addEventListener 이벤트
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
