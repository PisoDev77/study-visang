# 24.01.15

## 원시값?

원시 값(primitive, 또는 원시 자료형)이란 객체가 아니면서 메서드 또는 속성도 가지지 않는 데이터

-   string;
-   number; 53비트로 정수를 표현할 수 있다. IEEE 754 부동 소수점 형식을 사용한다.
-   bigint; 최근에 추가된 타입이다.
-   boolean
-   undefined
-   symbol
-   null

## var VS let VS const

-   var는 재선언 가능, 할당, 재할당 가능하다.
-   let은 재선언 불가능, 할당, 재할당 가능하다.
-   const는 재선언 불가능, 재할당 불가능, 할당은 선언시에 꼭 가능.
    ||var|let|const|
    |------|---|---|---|
    |재선언|O|X|X|
    |할당|O|O|초기에 O|
    |재할당|O|O|X|

### 그러면 왜 그럴까?
