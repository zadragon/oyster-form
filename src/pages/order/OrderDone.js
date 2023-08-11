import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import * as C from "../../styles/common.js";

const orderMsg = {
	orderDone: {
		title: "주문이 정상적으로 완료되었습니다.",
		subTitle: "주문 내역에서 주문 상태 확인이 가능합니다.",
		buttonType1: "주문 내역 보기",
		buttonType2: "계속 쇼핑하기",
		imgUrl: "/images/icons/icon-check.svg",
	},
	orderError: {
		title: "주문이 정상적으로 처리되지 않았습니다.",
		subTitle: "죄송합니다. 다시 시도해주세요",
		buttonType1: "홈으로 가기",
		buttonType2: "주문 다시하기",
		imgUrl: "/images/icons/icon-caution.svg",
	},
};

const OrderDone = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [state, setState] = useState({});
	const { title, subTitle, buttonType1, buttonType2, imgUrl } = state;

	useEffect(() => {
		if (location.pathname.includes("/orderDone")) {
			setState(orderMsg.orderDone);
			return;
		} else if (location.pathname.includes("/orderError")) {
			setState(orderMsg.orderError);
			return;
		}
	}, []);

	// console.log(state);

	return (
		<OrderWrap>
			<img src={imgUrl} alt="" />
			<div className="mainMsg">
				<strong>{title}</strong>
				<p>{subTitle}</p>
			</div>
			<div className="btnArea">
				<C.Button className="big type2" onClick={() => navigate("/")}>
					{buttonType1}
				</C.Button>
				<C.Button className="big" onClick={() => navigate("/")}>
					{buttonType2}
				</C.Button>
			</div>
		</OrderWrap>
	);
};

const OrderWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 6.6rem;
	text-align: center;
	.mainMsg {
		margin-top: 8.7rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		strong {
			font-size: 2rem;
			letter-spacing: -0.333px;
			font-style: normal;
			font-weight: 700;
		}
		p {
			color: #808080;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			letter-spacing: -0.333px;
		}
	}
	.btnArea {
		display: flex;
		justify-content: center;
		gap: 0.9rem;
		width: 100%;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #d2d2d2;
	}
`;

export default OrderDone;
