const $inputEle = document.getElementById('inputEle');

const str01Subtitle = document.querySelector('.str01 > .sub-title');
const str01Result = document.querySelector('.str01 > .result');

const exs = [
	/**
	 * 문자열를 입력 받아, 그 문자열의 2번째 문자를 출력하는 함수
	 * ### 요구사항
	 * - `str01`이라는 함수명을 다른 이름으로 바꿔주세요.
	 * - html,css,js의 다른 부분은 걷들지 말아주세요.
	 */
	function str01() {
		// Do it!!
	},
];

$inputEle.addEventListener('submit', (e) => {
	e.preventDefault();

	const str01Input = e.target.str01;
	str01Result.textContent = exs[0](str01Input.value);

	console.log(str01Result);
});
