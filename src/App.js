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
	// let [블로그명, 블로그명변경] = useState(["개발 Blog", "테스트 블로그"]);
	let posts = '강남 고기 맛집';
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
			<button onClick={제목바꾸기}>버튼</button>
			<button onClick={글자정렬}>정렬</button>
			<div className="list">
				<h3>
					{글제목[0]}
					<span
						onClick={() => {
							따봉변경(따봉 + 1);
						}}
					>
						👍
					</span>
					{따봉}
				</h3>
				<p> 2월 17일 발행 </p>
				<hr />
			</div>
			<div className="list">
				<h3> {글제목[1]}</h3>
				<p> 2월 18일 발행 </p>
				<hr />
			</div>
			<div className="list">
				<h3 onClick={() => modal변경(true)}> {글제목[2]}</h3>
				<p> 2월 19일 발행 </p>
				<hr />
			</div>
			{글제목.map(function (글) {
				return (
					<div className="list">
						<h3>
							{' '}
							{글}{' '}
							<span
								onClick={() => {
									따봉변경(따봉 + 1);
								}}
							>
								👍
							</span>
							{따봉}
						</h3>
						<p> 2월 18일 발행 </p>
						<hr />
					</div>
				);
			})}
		</div>
	);
}
function Modal() {
	return (
		<div>
			<h2 className="modal">제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
