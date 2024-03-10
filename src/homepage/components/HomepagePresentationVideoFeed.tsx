import {useEffect, useState} from "react";
import {PresentationVideo} from "../../types.ts";
import mockPresentationVideosData from "../../queries/mockPresentationVideosData.ts";
import PresentationVideoOverview from "./PresentationVideoOverview.tsx";

const HomepagePresentationVideoFeed = () => {

	const [presentationVideos, setPresentationVideos] = useState<Array<PresentationVideo>>([]);

	useEffect(
		() => {
			const data = mockPresentationVideosData();
			setPresentationVideos(data);
		}, []
	);

	return (
		<>
			<div className="bg-amber-950 text-white py-8 px-8 w-[70%] flex flex-row flex-wrap justify-around items-center gap-8 rounded-3xl">
				{
					presentationVideos.map(presentationVideo =>
						<PresentationVideoOverview id={presentationVideo.id} title={presentationVideo.title} description={presentationVideo.description}/>
					)
				}
			</div>
		</>
	);
}

export default HomepagePresentationVideoFeed;