// 객체 리터럴
const obj1 = {
	property01: 1,
	property02: '2번째',
	property03: [1, 2, 3],
	property04: {
		obj: 'in obj',
	},
};
console.log('객체 리터럴' + obj1);

// 생성자 함수
function ObjFunction(property01, property02) {
	this.property01 = property01;
	this.property02 = property02;
}

const obj2 = new ObjFunction(1, '2번째');
console.log('생성자 함수' + obj2);

// Object 생성자
const obj3 = new Object();

console.log('Object 생성자 property 만들기 전: ' + obj3);
obj3.property01 = 1;
obj3.property02 = '2번째';
console.log('Object 생성자 property 만들기 후: ' + obj3);

// Object.create 메서드
const obj4 = {
	property01: 1,
	property02: '2번째',
};

console.log('Object.create 메서드 만들기 전: ' + obj4);
const obj4_1 = Object.create(obj4);
obj4_1.property01 = 2;
console.log('Object.create 메서드 만들기 후: ' + obj4_1);

// 클래스 (ES6+)
class ObjClass {
	constructor(property01, property02) {
		this.property01 = property01;
		this.property02 = property02;
	}
}

const obj5 = new ObjClass(1, '2번째');
console.log('클래스 ' + obj5);
