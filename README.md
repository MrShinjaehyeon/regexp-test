# 정규표현식(RegExp)

정규식, Regular Expression

## 역할
- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트
https://regexr.com/

## 정규식 생성

```js
// 생성자 방식
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')

// 리터럴 방식
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const strReg = `
010-1234-5678
thejaypulitzer@infocz.co.kr
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 마지막에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b 가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
\w | 숫자와 영어를 포함한 일치
\b \b | 블록을 만들어줌
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이 문자 구간에 일치(소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(대문자)
[0-9] | 0부터 9사이의 문자 구간에 일치(숫자)
[가-힣] | 가 부터 힣 까지 문자 구간에 일치(한글)