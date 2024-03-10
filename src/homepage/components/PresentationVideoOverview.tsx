import PresentationVideoThumbnail from "./PresentationVideoThumbnail.tsx";
import {PresentationVideo} from "../../types.ts";

const PresentationVideoOverview = ({id, title, description, animalTypes, uploadDate}: PresentationVideo) => {
	return (
		<>
			<div
				className="bg-amber-100 text-amber-950 p-4 w-[48%] flex flex-col justify-around items-center gap-2 rounded-2xl">
				<PresentationVideoThumbnail id={id} />

				<h3 className="text-xl font-bold w-[100%] leading-snug text-center capitalize">
					{title}
				</h3>

				<p className="text-lg font-bold w-[100%] leading-snug capitalize">
					({
						animalTypes.map((animalType, index) => {
							return animalType + (index === (animalTypes.length - 1) ? "" : ", ");
						})
					})
				</p>

				<p>
					{description}
				</p>

				<p className="text-lg font-bold w-[100%] text-right">
					{uploadDate.toDateString()}
				</p>
			</div>
		</>
	);
}

export default PresentationVideoOverview;