import "../../index.css";

type Props = {
	id: string;
}

const PresentationVideoFrame = ({id}: Props) => {

	return (
		<>
			<iframe
				className="w-2/3 h-[150px] border-amber-950 rounded-xl shadow-box"
				src={`https://www.youtube.com/embed/${id}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen>
			</iframe>
		</>
	);

}

export default PresentationVideoFrame;