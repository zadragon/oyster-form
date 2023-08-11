import { styled } from "styled-components";

type InputProps = {
	type: string;
	placeholder?: string;
	name: string;
	value: string;
	onChange?: Function;
	disabled?: boolean;
	maxlength?: number;
	width?: string;
};

const Input = ({ type, placeholder, name, value, onChange, disabled, maxlength, width }: InputProps) => {
	// 타입 넘버고, 값이 있고, 최대 자리수를 넘어가면

	if (type === "tel" && value && maxlength && value.length >= maxlength) {
		if (/^\d*$/.test(value)) {
			value = value.substr(0, maxlength);
		}
	}
	return (
		<>
			<InputArea
				type={type}
				placeholder={placeholder}
				name={name}
				value={value && value}
				disabled={disabled}
				maxLength={maxlength}
				onChange={onChange && ((e) => onChange(e))}
				style={{ width: width || "100%" }}
			/>
		</>
	);
};

const InputArea = styled.input`
	display: block;
	width: auto;
	height: 4rem;
	padding: 0 1.3rem;
	border: 1px solid #ddd;
	border-radius: 0.6rem;
	border: 1px solid #f0f0f0;
	box-sizing: border-box;
	color: #000;
	&[name="postcode"] {
		text-align: center;
	}
	&:focus,
	&:active {
		border: 1px solid #00c4b3;
	}
	&:disabled {
		background-color: #fff;
		color: #9a9a9a;
		border: 1px solid #ddd;
	}

	&:focus-visible {
		outline: 0;
	}
`;

export default Input;
