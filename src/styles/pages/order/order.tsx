import styled from "styled-components";

export const List = styled.div`
	padding: 2rem 0;
	border-top: 1px solid #d2d2d2;
	&:first-child {
		border-top: none;
		padding: 0 0 2rem;
	}
	h2 {
		font-size: 1.8rem;
		& + .row {
			margin-top: 1rem;
			&:first-child {
				margin-top: 0;
			}
		}
		& + .listContent {
			margin-top: 1.6rem;
		}
	}
	.row {
		display: flex;
		margin-top: 0.6rem;
		gap: 0.8rem;
		&.justify-between {
			justify-content: space-between;
		}
	}
	.listContent {
		padding: 2rem 1.5rem;
		border-radius: 6px;
		background: #f0f0f0;
		ul {
			padding-left: 1.5rem;
		}
		li {
			margin-top: 0.3rem;
			font-size: 1.2rem;
			line-height: 2rem;
			list-style-type: disc;
			&:first-child {
				margin-top: 0;
			}
		}
	}
`;
