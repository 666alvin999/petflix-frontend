import {Adopter, Animal, Member} from "../types.ts";
import {useQuery} from "@tanstack/react-query";

const useSubmitAdoption = (adopter: Adopter, animal: Animal, member: Member, doFetch: boolean) => {
	return useQuery({
		queryKey: ["useSubmitAdoption", doFetch],
		queryFn: async () => {
			if (doFetch) {
				const url = `${import.meta.env.VITE_API_URL}/video/submitAdoption`;

				const requestBody = {
					"adopterViewModel": adopter,
					"animalViewModel": animal,
					"memberViewModel": member
				}

				const options: RequestInit = {
					method: "POST",
					mode: "cors",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json",
						"Content-Length": "2048"
					},
					body: JSON.stringify(requestBody)
				}


				const result = await fetch(url, options);

				return await result.json();
			}

			return null;
		}
	});
}

export default useSubmitAdoption;