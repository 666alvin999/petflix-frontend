type Props = {
	id: string
}

const PresentationVideoThumbnail = ({id}: Props) => {
	return (
		<>
			<img
				src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
				alt={`Video ${id} thumbnail`}
				className="w-[450px] rounded-2xl"
			/>
		</>
	);
}

export default PresentationVideoThumbnail;