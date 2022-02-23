import _ from 'lodash'

const usersA = [
  {userId: '1', name: 'Shin'},
  {userId: '2', name: 'Kim'}
]
const usersB = [
  {userId: '1', name: 'Shin'},
  {userId: '3', name: 'Lee'}
]

const usersC = usersA.concat(usersB)
console.log('concat : ', usersC)
console.log('uniqBy : ', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA,usersB, 'userId')
console.log('unionBy : ', usersD)
// 배열 데이터가 여러개일때 unionBy로 고유화함

const foundUser = _.find(usersD, {name: 'Lee'})
const foundUserIndex = _.findIndex(usersD, {name: 'Lee'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(usersD, {name : 'Kim'})
console.log(usersD)

import myData from './myData.json'

console.log(myData)

const str = JSON.stringify(usersA)  // 문자 데이터화 시켜줌
console.log('str',str)
console.log(typeof str)

const obj = JSON.parse(str) // 문자 데이터를 분석해 자바스크립트에 사용가능하게 재조립함
console.log('obj', obj)


// 로컬 스토리지
const user = {
  id: 'jaypulitzer',
  name: 'Shin',
  emails: ['jaypulitzer@infocz.co.kr']
}

localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))

const str1 = localStorage.getItem('user')
const obj1 = JSON.parse(str1)
obj1.id = 'admin'
console.log('obj1', obj1)
localStorage.setItem('user', JSON.stringify(obj1))

// localStorage.removeItem('user')


// axios를 활용해 api 불러오기

import axios from 'axios'
function fetchMovies(){
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()


// 정규표현식
let strReg = `
010-1234-5678
thejaypulitzer@infocz.co.kr
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// g : 해당 표현만 배열로 보겠다는 옵션
// gi : 대문자 소문자 구분 없이 배열로 보겠다는 옵션

// console.log(strReg.match(regexp))

//정규표현식을 다루는 메소드
  // 정규식.exec(문자열) : 일치하는 하나의 정보(Array) 반환
  // 정규식.test(문자열) : 일치 여부(Boolean) 반환
  // 문자열.match(정규식) : 일지하는 문자열의 배열(Array) 반환
  // 문자열.search(정규식) : 일치하는 문자열의 인덱스(Number) 반환
  // 문자열.replcae(정규식, 대체문자) : 일치하는 문자열을 대체하고 대체된 문자열 반환
  // 문자열.split(정규식) : 일치하는 문자열을 분할하여 배열(Array)로 반환
  // 생성자_정규식.toString() : 생성자 함수 방식의 정규식을 리터럴 방식의 문자열로 반환

// const regexp = /fox/gi
// console.log(regexp.test(strReg))
// strReg = strReg.replace(regexp, 'AAA') 
// console.log(strReg)


// 플래그(옵션)
// const regexp = /the/gi
// const regexp = /\.$/gim   
// \(백슬래시)로 .를 이스케이프 시켜줌
// m 은 각 각의 줄을 시작과 끝으로 보고 검색

console.log(
  strReg.match(/.{1,}(?=@)/gm)
    // @ 기준 앞쪽 아이디 추출
  // strReg.match(/(?=@).{1,}/gm)
    // @ 기준 뒤쪽 추출
)
