import {useQuery} from "@tanstack/react-query";

const useAllAdopters = () => {
	return useQuery({
		queryKey: ["allAdopters"],
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_URL}/video/getAllAdopters`;

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

export default useAllAdopters;