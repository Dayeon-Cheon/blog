import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // 변수는 변경되면 html에 자동으로 반영 안 됨
  let post = "파리 여행 1일차";
  // 스테이트는 변경되면 html이 자동 재랜더링 됨
  let [title, setTitle] = useState([
    "파리 맛집 추천",
    "에펠탑 점등 시간",
    "파리 근교 여행지 추천",
  ]); // a - 보관했던 자료 나옴, b - state 변경 도와주는 함수
  // array, object 다룰 때 원본은 보존하는 게 좋음
  // state가 array, object면 독립적 카피본(shallow copy)을 만들어서 수정해야 함
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  // 1. array 자료 개수만큼 함수 안의 코드 실행
  // 2. 함수의 파라미터는 array 안에 있던 자료
  // 3. return에 뭐 작성하면 array로 담아줌
  [1, 2, 3].map(function (a) {
    console.log(a);
  });

  return (
    // 리턴 안에 병렬로 태그 2개 이상 기입 금지
    <div className="App">
      <div className="black-nav">
        <h4>Amateur Wonderer</h4>
      </div>
      {/* <button
        onClick={() => {
          let copy1 = [...title]; // ...괄호 벗기고 다시 씌워주세요: 완전히 독립적인 array 사본 생성
          copy1[0] = "런던 맛집 추천";
          setTitle(copy1);
        }}
      >
        Change Title!
      </button>
      <button
        onClick={() => {
          let copy2 = [...title];
          let sort = copy2.sort();
          setTitle(sort);
        }}
      >
        가나다순 정렬
      </button> */}
      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
            // modal === true ? setModal(false) : setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {title.map(function (a, i) {
        // i: 반복문 돌 때마다 1씩 증가하는 정수
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {title[i]}
              <span
              // onClick={() => {
              //   setLike(like[i] + 1);
              // }}
              >
                &nbsp;👍 {like[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {
        // if문 사용 못 하고 삼항연산자(ternary operator) 사용
        modal === true ? <Modal /> : null
      }
    </div>
  );
}

// component: 반복되는 html 축약할 때, 큰 페이지들, 자주 변경되는 것들, state 가져다 쓸 때 문제 생김
function Modal() {
  return (
    // 리턴 안에 하나의 div만
    // 2개 이상 넣고 싶으면 <></>로 묶어도 됨
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>detail</p>
    </div>
  );
}

// 이런 식으로 만들 수도 있음
// const Modal = () => {
//   return <div></div>;
// };

// 동적 UI 만들기
// 1. html css 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

export default App;
