import {InputChangeEvent, TextAreaChangeEvent} from "../../types.ts";
import PresentationVideoFrame from "./PresentationVideoFrame.tsx";

type Props = {
	videoId: string;
	title: string;
	description: string;
	setVideoId: (value: string) => void;
	setTitle: (value: string) => void;
	setDescription: (value: string) => void;
	disableCommonFields: boolean;
}

const FormVideoPart = ({videoId, title, description, setVideoId, setTitle, setDescription, disableCommonFields}: Props) => {

	const handleChange = (event: InputChangeEvent | TextAreaChangeEvent) => {
		if (event.target.id === "title") {
			setTitle(event.target.value);
		} else if (event.target.id === "id") {
			setVideoId(event.target.value);
		} else {
			setDescription(event.target.value)
		}
	}

	return (
		<div className="w-[40%] h-[100%] p-8 flex flex-col justify-center items-center gap-8">
			<div>
				<label htmlFor="id">ID de la vidéo:</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" id="id" name="id" type="text" value={videoId} onChange={handleChange} disabled={disableCommonFields}/>
			</div>

			{
				videoId !== "" &&
				<PresentationVideoFrame id={videoId} />
			}

			<div>
				<label htmlFor="title">Titre de la vidéo:</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" type="text" id="title" value={title} name="title" onChange={handleChange} disabled={disableCommonFields}/>
			</div>

			<div>
				<label htmlFor="description">Description de la vidéo:</label>
				<textarea className="bg-transparent w-96 h-24 p-2 border-4 border-amber-950 rounded-lg resize-none" id="description" name="description" value={description} maxLength={512} onChange={handleChange} disabled={disableCommonFields}></textarea>
			</div>
		</div>
	);

}

export default FormVideoPart;