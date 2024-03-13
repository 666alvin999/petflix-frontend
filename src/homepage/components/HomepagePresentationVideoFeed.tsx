import {usePresentationVideoOverviews} from "../../queries";
import PresentationVideoOverview from "./PresentationVideoOverview.tsx";
import {PresentationVideo} from "../../types.ts";



const HomepagePresentationVideoFeed = () => {

	const {isPending: presentationVideoIsPending, isError: presentationVideoIsError, data: presentationVideoData, error} = usePresentationVideoOverviews(null, null);

	return (
		<>
			<div className="bg-amber-950 text-white py-8 px-8 w-[70%] flex flex-row flex-wrap justify-around items-center gap-8 rounded-3xl">
				{
					presentationVideoIsPending && "loading"
				}

				{
					presentationVideoIsError && error.message
				}

				{
					!presentationVideoIsPending && !presentationVideoIsError &&
					presentationVideoData.map((presentationVideo: PresentationVideo) =>
						<PresentationVideoOverview
							id={presentationVideo.id}
							title={presentationVideo.title}
							description={presentationVideo.description}
							animalTypes={presentationVideo.animalTypes}
							date={new Date(presentationVideo.date)}
						/>
					)
				}
			</div>
		</>
	);
}

export default HomepagePresentationVideoFeed;