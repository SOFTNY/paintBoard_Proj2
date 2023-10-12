$(window).on('scroll', function () {
  //scrollY : 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
  if (window.scrollY > 90) {

    //버튼 mode
    $('#mode-btn').css('backgroundColor', 'black');
    $('#mode-btn').css('color', 'white');
    $('#mode-btn').css('box-shadow', '5px 5px 5px #888888');

    //input[type="text"]
    $('#text').css('backgroundColor', 'black');
    $('#text').css('color', 'white');
    $('#text').css('box-shadow', '5px 5px 5px #888888');

  } else {
    //버튼 mode
    $('#mode-btn').css('backgroundColor', 'white');
    $('#mode-btn').css('color', 'black');
    $('#mode-btn').css('box-shadow', '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)');

    //input[type="text"]
    $('#text').css('backgroundColor', 'white');
    $('#text').css('color', 'black');
    $('#text').css('box-shadow', '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)');

  }
});