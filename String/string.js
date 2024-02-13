const $root = document.getElementById('root');

/**
 * 각 String 연습 section의 자식 요소를 객체로 가지는 배열
 */
const stringExams = [
	{ subTitle: '2번째 문자는?', input: { label: '문자열', placeholder: `문자열을 입력하고 'Enter'를 누르세요.` } },
	{ subTitle: 'CP들은?' },
	{ subTitle: '소문자로 바꾸니', input: { label: '영어를', placeholder: `영어를 입력하고 'Enter'를 누르세요.` } },
	{ subTitle: '길이는?', input: { label: '영어를', placeholder: `길이를 반환할 문자열을 입력하세요.` } },
	{ subTitle: '<p>A B C D A A B N D D C C E E</p>A를 모두 a로 바꾸면?' },
];

//prettier-ignore
$root.innerHTML =`
<h1>String 연습하기</h1>
<form id="inputEle" onsubmit>
${stringExams.map(({subTitle, input}, idx)=>`
    <h2>String ${(idx + 1 + '').padStart(2, 0)}</h2>
    <section class="str02 strSection">
        ${(input && `
        <label for="str01">${input.label}</label>
        <input type="text" name="str${(idx + 1 + '').padStart(2, 0)}" placeholder="${input.placeholder}" />
        `) ?? ''}
        <p class="sub-title">${subTitle}</p>
        <h4 class="result"></h4>
    </section>
`).join('')}
</form>`;

/* =========================================================================================================================== */

// Stirng 함수 배열
const exs = [
	(str) => str.charAt(1),
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter((i) => i.startsWith('CP')),
	(str) => (str ?? '').toLowerCase(),
	(str) => (str ?? '').length,
	() => 'A B C D A A B N D D C C E E'.replace(/A/g, 'a'),
];

/**
 * root전역에 이벤트를 감시한다.
 */
$root.addEventListener('change', () => {
	document.querySelectorAll('.result').forEach((strRes, idx) => {
		const inputValue = document.querySelector(`input[name="str${(idx + 1 + '').padStart(2, 0)}"]`)?.value;
		strRes.textContent = inputValue ? exs[idx](inputValue.trim() === '' ? '' : inputValue) : exs[idx]();
	});
});
