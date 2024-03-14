import {useQuery} from "@tanstack/react-query";

const useFilters = () => {
	return useQuery({
		queryKey: ["filters"],
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_URL}/getFilters`;

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

export default useFilters;