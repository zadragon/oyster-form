import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import Order from "../pages/order/Order";
import OrderDone from "../pages/order/OrderDone";

const Router = () => {
	return (
		// url 라우터 처리
		<BrowserRouter>
			<Routes>
				{/* 공통영역을 위한 Layout  */}
				<Route element={<Layout />}>
					{/* 주문 관련 */}
					<Route path="/" element={<Order />} />
					<Route path="/order/orderDone" element={<OrderDone />} />
					<Route path="/order/orderError" element={<OrderDone />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
