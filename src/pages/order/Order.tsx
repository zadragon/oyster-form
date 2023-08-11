import React, { useEffect, useState } from "react";
import { OrderApi } from "../../shared/api";
import * as C from "../../styles/common.js";
import * as S from "../../styles/pages/order/order.js";
import DaumPostcode from "react-daum-postcode";
import Modal from "../../components/modal/Modal";
import Input from "../../components/inputs/Input";
import { useNavigate } from "react-router-dom";

const Order = () => {
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false); //모달 토글
	const [phoneNumbers, setPhoneNumbers] = useState(["", "", ""]); // 전화번호 각 자리수에 대한 상태
	const [submitActive, setSubmitActive] = useState(false); // 보내기버튼 활상화 상태
	const [payload, setPayload] = useState({
		postcode: "", //우편번호,
		address: "", //주소
		detailAddress: "", //상세주소
		phoneNumber: "", // 연락처
		requirement: "", // 기타 요청사항
	});

	type HandleProps = {
		address: string;
		zonecode: string;
	};
	const handleComplete = (data: HandleProps) => {
		let address = data.address;
		let postcode = data.zonecode;
		setPayload({
			...payload, // 기존의 input 객체를 복사한 뒤
			postcode,
			address, // name 키를 가진 값을 value 로 설정
		});
		setModalOpen(false);
	};

	const onChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { value, name } = e.target as HTMLInputElement; // 우선 e.target 에서 name 과 value 를 추출
		setPayload({
			...payload, // 기존의 input 객체를 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정
		});
	};

	const onChangePhoneNumHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { value, name } = e.target as HTMLInputElement; // 우선 e.target 에서 name 과 value 를 추출
		//숫자만 입력
		if (/^\d*$/.test(value)) {
			const newPhoneNumbers = [...phoneNumbers];
			name === "num0" && (newPhoneNumbers[0] = value);
			name === "num1" && (newPhoneNumbers[1] = value);
			name === "num2" && (newPhoneNumbers[2] = value);
			setPhoneNumbers(newPhoneNumbers);
			setPayload({
				...payload, // 기존의 input 객체를 복사한 뒤
				phoneNumber: newPhoneNumbers.join(""), // name 키를 가진 값을 value 로 설정
			});
		}
	};

	useEffect(() => {
		const { postcode, address, detailAddress, phoneNumber } = payload;
		postcode && address && detailAddress && phoneNumber.length === 11 ? setSubmitActive(true) : setSubmitActive(false);
	}, [payload]);

	const onSubmitOrder = () => {
		if (payload.postcode === "") {
			alert("우편번호를 검색하여 입력해주세요.");
			return;
		} else if (payload.detailAddress === "") {
			alert("상세주소를 입력해주세요.");
			return;
		} else if (payload.phoneNumber.length !== 11) {
			alert("전화번호를 정확하게 입력해주세요.");
			return;
		}
		OrderApi.submit(payload, navigate);
	};

	return (
		<div>
			<S.List>
				<h2>배송지</h2>
				<div className="row">
					<Input type="text" placeholder="우편번호" name="postcode" value={payload.postcode} disabled={true} width="110px" />
					<C.Button onClick={() => setModalOpen(true)}>주소검색</C.Button>
				</div>
				<div className="row">
					<Input type="text" placeholder="주소" name="address" value={payload.address} disabled={true} />
				</div>
				<div className="row">
					<Input
						type="text"
						placeholder="상세주소"
						value={payload.detailAddress}
						name="detailAddress"
						onChange={onChangeHandler}
					/>
				</div>
			</S.List>
			<S.List>
				<h2>연락처</h2>
				<div className="row justify-between">
					<Input type="tel" name="num0" value={phoneNumbers[0]} onChange={onChangePhoneNumHandle} maxlength={3} width="30%" />
					<Input type="tel" name="num1" value={phoneNumbers[1]} onChange={onChangePhoneNumHandle} maxlength={4} width="30%" />
					<Input type="tel" name="num2" value={phoneNumbers[2]} onChange={onChangePhoneNumHandle} maxlength={4} width="30%" />
				</div>
			</S.List>
			<S.List>
				<h2>기타 요청 사항(선택)</h2>
				<div className="row">
					<Input
						type="text"
						name="requirement"
						value={payload.requirement}
						onChange={onChangeHandler}
						placeholder="사이즈 등 기타 요청사항을 입력해주세요"
					/>
				</div>
			</S.List>
			<S.List>
				<h2>주의사항</h2>
				<div className="listContent">
					<ul>
						<li>상품은 모바일 쿠폰 형태로 문자로 발송되니 위 핸드폰번호를 다시한번 확인해주세요.</li>
						<li>구매 후 취소가 불가합니다.</li>
						<li>상품 배송은 2021-11-21 에 발송됩니다.</li>
					</ul>
				</div>
			</S.List>

			{/* <BtnSubmit className={submitActive ? "active" : null}>2000 포인트로 구매하기</BtnSubmit> */}
			<C.SubmitButton onClick={onSubmitOrder} className={submitActive ? "active" : ""}>
				2000 포인트로 구매하기
			</C.SubmitButton>

			{modalOpen && (
				<Modal title="주소 찾기" toggle={setModalOpen}>
					<DaumPostcode onComplete={handleComplete} style={{ height: "calc(100% - 4.5rem)" }} />
				</Modal>
			)}
		</div>
	);
};

export default Order;
