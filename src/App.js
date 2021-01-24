/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	let [글제목, 글제목변경] = useState([
		'남자 코트 추천',
		'강남 우동 맛집',
		'파이썬 독학',
	]); // [a, b] 가 남음
	let [따봉, 따봉변경] = useState(0);
	let [modal, modal변경] = useState(false);
	let [누른제목, 누른제목변경] = useState(0);
	// let [블로그명, 블로그명변경] = useState(["개발 Blog", "테스트 블로그"]);
	let posts = '강남 고기 맛집';

	function 반복된UI() {
		var 어레이 = [];
		for (var i = 0; i < 3; i++) {
			어레이.push(<div>안녕</div>);
		}
		return 어레이;
	}

	function 제목바꾸기() {
		var newArray = [...글제목]; // deep Copy
		newArray[0] = '여자코트 추천';
		글제목변경(newArray);
	}
	function 글자정렬() {
		var newSort = [...글제목];
		newSort.sort();
		글제목변경(newSort);
	}
	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 Blog</div>
			</div>
			{글제목.map(function (글, i) {
				return (
					<div className="list">
						<h3 onClick={() => {누른제목변경(i);}}> 
							{글}
							<span
								onCLick={() => {
									따봉변경(따봉 + 1);
								}}
							>
								👍
							</span>
							{따봉}
						</h3>
						<p>2월 18일 발행</p>
						<hr />
					</div>
				);
			})}
			{/* <button	onClick={() => {누른제목변경(0);}}>	버튼1</button>
			<button	onClick={() => {누른제목변경(1);}}>	버튼2</button>
			<button	onClick={() => {누른제목변경(2);}}>	버튼3</button> */}

			<button
				onClick={() => {
					modal변경(!modal);
				}}
			>
				열고닫기
			</button>
			{modal === true ? (
				<Modal 글제목={글제목} 누른제목={누른제목}></Modal>
			) : null}
		</div>
	);
}
function Modal(props) {
	return (
		<div className="modal">
			<h2>{props.글제목[props.누른제목]}</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
