import {PresentationVideo} from "../../types.ts";
import PresentationVideoFrame from "./PresentationVideoFrame.tsx";

type Props = {
	presentationVideo: PresentationVideo
}

const PresentationVideoAndDetails = ({presentationVideo}: Props) => {

	return (
		<div className="w-[80%] flex flex-row gap-12">
			<PresentationVideoFrame id={presentationVideo.id} />

			<div className="w-1/2 border-4 border-amber-950 rounded-xl shadow-box">
				<h2 className="bg-amber-950 text-white text-2xl text-center font-bold p-4">
					{presentationVideo.title}
				</h2>
				<p className="p-4 text-justify">
					{presentationVideo.description}
				</p>
			</div>
		</div>
	);

}

export default PresentationVideoAndDetails;