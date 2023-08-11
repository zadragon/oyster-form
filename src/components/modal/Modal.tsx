import React, { ReactNode } from "react";
import { styled } from "styled-components";
import * as C from "../../styles/common";

type ModalProps = {
	title: string;
	children: ReactNode;
	toggle: Function;
};
const Modal: React.FC<ModalProps> = ({ title, children, toggle }) => {
	return (
		<ModalWrap>
			<C.HeaderWrap>
				<h1>{title}</h1>
				{toggle && <C.BtnBack onClick={() => toggle(false)} />}
			</C.HeaderWrap>

			{children}
		</ModalWrap>
	);
};

const ModalWrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
`;

export default Modal;
