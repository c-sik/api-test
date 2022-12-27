import SubmitService from './sub'


const submitForm = document.querySelector('form');

submitForm.addEventListener('submit', event => {
  event.preventDefault(); // *
  console.log('제출이 완료되었습니다.');
  const telInput = event.target['tel'];
  console.log(event);
  console.log(telInput);
  console.log(`제출된 전화번호는 ${telInput.value}입니다.`);
  SubmitService.createGuest(telInput.value);
});

