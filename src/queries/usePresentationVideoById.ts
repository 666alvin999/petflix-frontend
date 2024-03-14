import {useQuery} from "@tanstack/react-query";

const usePresentationVideoDetailPage = (videoId: string) => {
	return useQuery({
		queryKey: ["presentationVideoDetailPage"],
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_URL}/video/getPresentationVideoDetails?presentationVideoId=${videoId}`;

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

export default usePresentationVideoDetailPage;