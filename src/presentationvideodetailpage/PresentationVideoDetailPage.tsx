import {Header} from "../header";
import {Footer} from "../footer";
import {useParams} from "react-router-dom";
import {usePresentationVideoById} from "../queries";
import {AnimalsDetails, PresentationVideoAndDetails} from "./components";
import "../index.css";

const PresentationVideoDetailPage = () => {

	const {id: presentationVideoId} = useParams();
	const {isPending, isError, data} = usePresentationVideoById(presentationVideoId!);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-28">
			<Header />

			{
				isPending &&
				<div>
					<div className="spinner"></div>
				</div>
			}

			{
				isError &&
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-3xl font-bold">Oh oh !</h2>
					<p className="text-xl font-bold">Quelque chose s'est mal passé :( </p>
				</div>
			}

			{
				!(isPending || isError) &&
				<>
					<PresentationVideoAndDetails presentationVideo={data.presentationVideo} />
					<AnimalsDetails animals={data.animals} member={data.member} />
				</>
			}

			<Footer />
		</div>
	);

}

export default PresentationVideoDetailPage;