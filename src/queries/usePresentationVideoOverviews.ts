import {useQuery} from "@tanstack/react-query";

const usePresentationVideoOverviews = (animalFilter: string | null, cityFilter: string | null) => {
	return useQuery({
		queryKey: ["presentationVideoOverviews", animalFilter, cityFilter],
		queryFn: async () => {
			let url = `http://localhost:8080/getAllVideoOverviews`;

			if (animalFilter && cityFilter) {
				url = url + `?animalFilter=${animalFilter}&cityFilter=${cityFilter}`;
			} else if (animalFilter) {
				url = url + `?animalFilter=${animalFilter}`;
			} else if (cityFilter) {
				url = url + `?cityFilter=${cityFilter}`;
			}

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

export default usePresentationVideoOverviews;