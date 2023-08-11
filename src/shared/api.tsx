import axios from "axios";

type Parameter = {
	payload: Object;
	navigate: (path: string) => void; // navigate 함수의 타입 명시
};
export const OrderApi = {
	submit: (payload: Parameter["payload"], navigate: Parameter["navigate"]): void => {
		console.log(payload);
		const url = "https://api.oysterable.com/order";
		axios
			.post(url, payload)
			.then((response) => {
				if (response.data.code === 200) {
					navigate("/order/orderDone");
				}
			})
			.catch((error) => {
				(error || error.code === 500) && navigate("/order/orderError");
			});
	},
};
