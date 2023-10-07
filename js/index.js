$('.faq-list dt').click(function() {

	if($(this).hasClass('selected')){
		$(this).removeClass('selected');
		$(this).next('dd').stop().slideUp(250);	
		return;
	}

	$(this).toggleClass('selected');
	$(this).next('dd').stop().slideDown(250);

});


function fn_drapDown(){
	document.querySelector('.select').classList.toggle('active');
}

// HTML 요소와 이벤트 리스너 연결
const selectTop = document.querySelector('.select-top');
const select = document.querySelector('.select');

selectTop.addEventListener('click', function(event) {
  // 이벤트 버블링을 중지하여 부모 요소에 이벤트가 전파되지 않도록 합니다.
  event.stopPropagation();

  // select 요소의 현재 상태를 확인하여 보이지 않으면 표시하고, 보이면 숨깁니다.
  if (select.style.opacity === '0' || select.style.opacity === '') {
    select.style.opacity = '1';
    select.classList.add('active');
  } else {
    select.style.opacity = '0';
    select.classList.remove('active');
  }
});

// 문서 전체에 대한 클릭 이벤트 리스너 추가
document.addEventListener('click', function(event) {
  // 특정 영역이 열려있는 경우에만 해당 영역을 닫습니다.
  if (select.style.opacity === '1') {
    select.style.opacity = '0';
    select.classList.remove('active');
  }
});
