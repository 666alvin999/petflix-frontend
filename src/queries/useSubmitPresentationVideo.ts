import {useQuery} from "@tanstack/react-query";
import {PresentationVideoAndAnimalsAndMember} from "../types.ts";

const useSubmitPresentationVideo = (presentationVideoAndAnimalsAndMember: PresentationVideoAndAnimalsAndMember | undefined, doFetch: boolean) => {
	return useQuery({
		queryKey: ["useSubmitPresentationVideo", presentationVideoAndAnimalsAndMember],
		queryFn: async () => {
			if (doFetch) {
				const url = `${import.meta.env.VITE_API_URL}/submitPresentationVideo/submit`;

				const options: RequestInit = {
					method: "POST",
					mode: "cors",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					},
					body: JSON.stringify(presentationVideoAndAnimalsAndMember)
				}

				const result = await fetch(url, options);

				return await result.json();
			}

			return null;
		}
	});
}

export default useSubmitPresentationVideo;