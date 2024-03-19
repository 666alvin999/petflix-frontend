import {useQuery} from "@tanstack/react-query";

const useAllMembers = () => {
	return useQuery({
		queryKey: ["useAllMembers"],
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_URL}/submitPresentationVideo/getAllMembers`;

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
}

export default useAllMembers;