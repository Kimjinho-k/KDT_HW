// 상품 데이터
const data = [
  { name: "초콜렛", price: 2000 },
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 },
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
const amount = parseInt(line);

// 아래에 getItemByAmount 함수를 작성하세요.
const getItemByAmount = (data, amount) => {
  let max = 0; // max를 0으로 초기화 -> msg의 삼항연산자 조건식 때문
  data.map((found) => {
    //고차배열 메서드인 map을 활용하여 data 배열의 모든 객체를 순회 하고 새로운 배열을 return
    if (amount > found.price) { // 입력 한 금액과 배열의 첫번 째 객체를 비교
      if (max === 0) { // 위의 조건문이 flase가 되면 안되기 때문에 max를 found 리스트에 대입
        max = found;  // max 값에 입력한 값과 비교 된 found.price 객체를 할당
      } else if (max.price < found.price) { // max 값이 0이 아니라면 실행
        max = found;
      }
    } else if (amount === found.price) { // 첫번째 if문의 조건이 false 일 경우 실행 
      max = found;
    }
  });
  return max;
};

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item
  ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.`
  : "살 수 있는 상품이 없습니다.";

// 결과 출력
alert(msg);

