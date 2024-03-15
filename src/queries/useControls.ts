import {useQuery} from "@tanstack/react-query";

const useControls = () => {
	return useQuery({
		queryKey: ["useControls"],
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_URL}/controls/getControls`;

			const options: RequestInit = {
				method: "GET",
				mode: "cors",
				headers: {
					"Accept": "application/json",
				}
			}

			const result = await fetch(url, options);
			return await result.json();
		}
	});
};

export default useControls;