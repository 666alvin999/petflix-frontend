import PresentationVideoThumbnail from "./PresentationVideoThumbnail.tsx";
import {Link} from "react-router-dom";
import {PresentationVideoAndAnimalTypes} from "../../types.ts";

const PresentationVideoOverview = ({presentationVideo, animalTypes}: PresentationVideoAndAnimalTypes) => {

	return (
		<>
			<div className="bg-amber-100 text-amber-950 p-4 w-[48%] h-[600px] flex flex-col justify-between items-center gap-2 rounded-2xl">
				<Link to={`/video/${presentationVideo.id}`} className="flex flex-col gap-2">
					<PresentationVideoThumbnail id={presentationVideo.id} />

					<h3 className="text-xl font-bold w-[100%] leading-snug text-center capitalize">
						{presentationVideo.title}
					</h3>
				</Link>

				<p className="text-lg font-bold w-[100%] leading-snug capitalize">
					({
					animalTypes.map((animalType: string, index: number) => {
						return animalType + (index === (animalTypes.length - 1) ? "" : ", ");
					})
				})
				</p>

				<p>
					{presentationVideo.description}
				</p>

				<p className="text-lg font-bold w-[100%] text-right">
					{`${new Date(presentationVideo.uploadDate).getDate()}/${new Date(presentationVideo.uploadDate).getMonth() + 1}/${new Date(presentationVideo.uploadDate).getFullYear()}`}
				</p>
			</div>
		</>
	);
}

export default PresentationVideoOverview;