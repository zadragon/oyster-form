import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as C from "@/styles/common";

const Layout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [state, setState] = useState({ title: "" });

	useEffect(() => {
		if (location.pathname.includes("/orderDone")) {
			setState({ title: "주문완료" });
			return;
		} else if (location.pathname.includes("/orderError")) {
			setState({ title: "주문실패" });
			return;
		} else if (location.pathname.includes("/")) {
			setState({ title: "주문" });
			return;
		}
	}, []);
	return (
		<div>
			<C.HeaderWrap>
				<h1>{state.title}</h1>
				<C.BtnBack onClick={() => navigate(-1)} />
			</C.HeaderWrap>
			{/* 공통영역 밑에 들어가는 콘텐츠 */}
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
