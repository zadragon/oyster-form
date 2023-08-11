import styled from "styled-components";

export const HeaderWrap = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 4.4rem;
	border-bottom: 1px solid #cecece;
	h1 {
		font-size: 1.7rem;
	}
`;

export const BtnBack = styled.button`
	position: absolute;
	left: 0.9rem;
	top: 50%;
	margin-top: -1.05rem;
	width: 1.2rem;
	height: 2.1rem;
	background: url("/images/icons/icon-chevron.svg") no-repeat;
`;

export const Button = styled.button`
	display: flex;
	width: 10rem;
	height: 4rem;
	padding: 0.9rem 0px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	border-radius: 0.6rem;
	background: #00c4b3;
	color: #fff;
	&.big {
		min-width: 14.3rem;
		height: 5rem;
		font-size: 1.6rem;
	}
	&.type2 {
		background: rgba(0, 196, 179, 0.1);
		color: #00c4b3;
	}
`;

export const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	border-radius: 40px;
	background: #c8c8c8;
	font-size: 1.6rem;
	color: #fff;
	transition: 0.3s;
	&.active {
		transition: 0.3s;
		background: linear-gradient(90deg, #00c4b3 0%, #0066c4 100%);
		box-shadow: 0px 4px 10px 0px rgba(0, 196, 179, 0.25);
	}
`;
