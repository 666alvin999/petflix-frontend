import {Header} from "../header";
import {Footer} from "../footer";
import {useParams} from "react-router-dom";
import {usePresentationVideoById} from "../queries";
import {PresentationVideoFrame} from "./components";
import "../index.css";
import {Animal} from "../types.ts";

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
					<div className="w-[80%] flex flex-row gap-12">
						<PresentationVideoFrame id={presentationVideoId!} />

						<div className="w-1/2 border-4 border-amber-950 rounded-xl shadow-box">
							<h2 className="bg-amber-950 text-white text-2xl text-center font-bold p-4">
								{data.presentationVideo.title}
							</h2>
							<p className="p-4 text-justify">
								{data.presentationVideo.description}
							</p>
						</div>
					</div>

					<div className="w-[80%] p-8 flex flex-row justify-around border-4 border-amber-950 rounded-xl shadow-box">
						<div className="w-1/2 h-[100%] flex flex-col items-center gap-4">
							<h3 className="text-xl font-bold">Les animaux:</h3>
							<ul className="flex flex-col gap-2">
								{
									data.animals.map((animal: Animal) => {
											return (
												<li>
													{animal.name}, {animal.age} ans, {animal.type} arrivé le {new Date(animal.arrivalDate).getDate()}/{new Date(animal.arrivalDate).getMonth()}/{new Date(animal.arrivalDate).getFullYear()} {animal.adopted ? "(déjà adopté)" : "(à adopter)"}
												</li>
											);
										}
									)
								}
							</ul>
						</div>

						<div className="w-1/2 h-[100%] flex flex-col items-center gap-4">
							<h3 className="text-xl font-bold">Notre membre:</h3>
							<div className="w-1/2 h-[100%] flex flex-col justify-center items-start gap-2">
								<p>
									{data.member.lastName.toUpperCase()} {data.member.firstName}
								</p>
								<p>
									{data.member.city}
								</p>
								<p className="underline">
									{data.member.mail}
								</p>
								<p className="underline">
									{data.member.phone}
								</p>
							</div>
						</div>
					</div>
				</>
			}

			<Footer />
		</div>
	);

}

export default PresentationVideoDetailPage;