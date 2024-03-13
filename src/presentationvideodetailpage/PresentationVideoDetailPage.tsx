import {Header} from "../header";
import {Footer} from "../footer";
import {useParams} from "react-router-dom";
import {usePresentationVideoById} from "../queries";

const PresentationVideoDetailPage = () => {

	const {id: presentationVideoId} = useParams();
	const {isPending, isError, data} = usePresentationVideoById(presentationVideoId!);

	console.log(data);

	return (
		<>
			<Header/>
			{
				isPending &&
				<div className="spinner"></div>
			}

			{
				isError &&
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-3xl font-bold">Oh oh !</h2>
					<p className="text-xl font-bold">Quelque chose s'est mal passé :( </p>
				</div>
			}
			<Footer/>
		</>
	);

}

export default PresentationVideoDetailPage;