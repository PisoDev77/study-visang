const $inputEle = document.getElementById('inputEle');

const str01Result = document.querySelector('.str01 > .result');
const str02Result = document.querySelector('.str02 > .result');
const str03Result = document.querySelector('.str03 > .result');
const str04Result = document.querySelector('.str04 > .result');
const str05Result = document.querySelector('.str05 > .result');

const exs = [
	/**
	 * 문자열를 입력 받아, 그 문자열의 2번째 문자를 출력하는 함수
	 * ### 요구사항
	 * - `str01`이라는 함수명을 다른 이름으로 바꿔주세요.
	 * - html,css,js의 다른 부분은 걷들지 말아주세요.
	 */
	function getSecondChar(str) {
		return str.charAt(1);
	},
	/**
	 * 아래에 주어진 변수에서 `CP`로 시작하는 요소를 모두 추출하는 함수
	 * ### 요구사항
	 * - 조건문(if, else)을 사용하지 않는다.
	 * - html,css,js의 다른 부분은 걷들지 말아주세요.
	 * > arr 변수
	 * ```
	 * const arr = ['CP song','EG Lee', 'CP Hong', 'CP Kim', 'HR Long'];
	 * ```
	 *
	 */
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter((i) => i.startsWith('CP')),
	/**
	 * 영어를 입력받아, 모두 소문자로 바꾸어 반환해주는 함수
	 * ### 요구사항
	 * - html,css,js의 다른 부분은 걷들지 말아주세요.
	 */
	(str) => str.toLowerCase(),
	/**
	 * 문자열의 길이를 반환하는 함수
	 * @param {string} str
	 * @returns
	 */
	(str) => {
		// Do it!
	},
	/**
	 * 입력받은 문자 A를 a로 바꾸는 함수
	 * @param {string} str
	 */
	() => {
		const str = 'A B C D A A B N D D C C E E';
	},
];

$inputEle.addEventListener('change', (e) => {
	const { str01: str01Input, str03: str03Input, str04: str04Input } = e.currentTarget;

	str01Result.textContent = exs[0](str01Input.value);

	str02Result.textContent = exs[1]();

	str03Result.textContent = exs[2](str03Input.value);

	str04Result.textContent = exs[3](str04Input.value);

	str05Result.textContent = exs[4]();
});
