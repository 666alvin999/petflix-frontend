import PresentationVideoThumbnail from "./PresentationVideoThumbnail.tsx";

type Props = {
	id: string;
	title: string;
	description: string;
}

const PresentationVideoOverview = ({id, title, description}: Props) => {
	return (
		<>
			<div className="bg-amber-100 text-amber-950 p-4 w-[48%] flex flex-col justify-around items-center gap-2 rounded-2xl">
				<PresentationVideoThumbnail id={id}/>

				<h3 className="font-bold w-[100%] leading-snug text-center capitalize">
					{title}
				</h3>

				<p>
					{description}
				</p>
			</div>
		</>
	);
}

export default PresentationVideoOverview;