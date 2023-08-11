import axios from "axios";

export const OrderApi = {
	submit: (payload, navigate) => {
		console.log(payload);
		const url = "https://api.oysterable.com/order";
		axios
			.post(url, payload)
			.then((response) => {
				response.code === 200 && navigate("/order/orderDone");
			})
			.catch((error) => {
				(error || error.code === 500) && navigate("/order/orderError");
			});
	},
};
