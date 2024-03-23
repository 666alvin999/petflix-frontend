import FormVideoPart from "./FormVideoPart.tsx";
import FormAnimalsPart from "./FormAnimalsPart.tsx";
import {useEffect, useState} from "react";
import {useAllMembers, useSubmitPresentationVideo} from "../../queries";
import {Animal, Member, PresentationVideo, PresentationVideoAndAnimalsAndMember} from "../../types.ts";
import "../../index.css";
import {useNavigate} from "react-router-dom";

const SubmitForm = () => {

	const navigation = useNavigate();

	const [videoId, setVideoId] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const {isPending, isError, data} = useAllMembers();

	const [name, setName] = useState<string>("");
	const [type, setType] = useState<string>("");
	const [age, setAge] = useState<number>(0);
	const [managingMember, setManagingMember] = useState<Member>();
	const [arrivalDate, setArrivalDate] = useState<string>("");

	const [showNotValidData, setShowNotValidData] = useState<boolean>(false);

	const [addNewAnimal, setAddNewAnimal] = useState<boolean>(false);
	const [disableCommonFields, setDisableCommonFields] = useState<boolean>(false)
	const [doFetch, setDoFetch] = useState<boolean>(false);

	const [presentationVideoAndAnimalsAndMember, setPresentationVideoAndAnimalsAndMember] = useState<PresentationVideoAndAnimalsAndMember>();

	const [animals, setAnimals] = useState<Array<Animal>>([]);

	const submit = useSubmitPresentationVideo(presentationVideoAndAnimalsAndMember, doFetch);

	useEffect(() => {
		setPresentationVideoAndAnimalsAndMember(createPresentationVideoAndAnimalsAndMember());
	}, [animals]);

	useEffect(() => {
		if (submit.data !== null && submit.data !== undefined && submit.data.success) {
			navigation("/");
		}
	}, [submit.data]);

	const createPresentationVideoAndAnimalsAndMember = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		const uploadDate = `${year}-${month}-${day}`;

		const presentationVideo: PresentationVideo = {
			id: videoId,
			title: title,
			description: description,
			uploadDate: uploadDate,
		};

		const presentationVideoAndAnimalsAndMember: PresentationVideoAndAnimalsAndMember = {
			presentationVideo: presentationVideo,
			animals: animals,
			member: managingMember!
		}

		return presentationVideoAndAnimalsAndMember;
	}

	const useHandleSubmit = () => {
		if (
			name !== ""
			&& type !== ""
			&& age > -1
			&& arrivalDate !== ""
			&& managingMember !== undefined
			&& videoId !== ""
			&& title !== ""
		) {
			const animal: Animal = {
				name: name,
				type: type,
				age: age!,
				presentationVideoId: videoId,
				arrivalDate: arrivalDate,
				adopted: false
			};

			setAnimals([...animals, animal]);

			if (!addNewAnimal) {
				setDoFetch(true);
			} else {
				setName("");
				setType("");
				setAge(0);
				setArrivalDate("");
				setDisableCommonFields(true);
				setShowNotValidData(false);
				setAddNewAnimal(false);
			}
		} else {
			setShowNotValidData(true);
		}
	}

	return (
		<div className="w-[80%] flex flex-col justify-center items-center gap-10">
			{
				isPending &&
				<div className="spinner"></div>
			}

			{
				isError || submit.isError &&
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-3xl font-bold">Oh oh !</h2>
					<p className="text-xl font-bold">Quelque chose s'est mal passé :( </p>
				</div>
			}

			{
				!(isPending || submit.isPending || isError || submit.isError) &&
				<div className="w-[90%] flex flex-col justify-center items-center gap-8">
					{
						showNotValidData &&
						<p>Les données saisies ne sont pas valides ! Vérifiez que tous les champs sont remplis !</p>
					}

					<div
						className="w-[100%] flex justify-center items-center gap-12 border-4 border-amber-950 rounded-2xl shadow-box">
						<FormVideoPart
							videoId={videoId}
							title={title}
							description={description}
							setVideoId={setVideoId}
							setTitle={setTitle}
							setDescription={setDescription}
							disableCommonFields={disableCommonFields}
						/>

						<FormAnimalsPart
							members={data}
							name={name}
							type={type}
							age={age}
							managingMember={managingMember}
							arrivalDate={arrivalDate}
							addNewAnimal={addNewAnimal}
							setName={setName}
							setType={setType}
							setAge={setAge}
							setManagingMember={setManagingMember}
							setArrivalDate={setArrivalDate}
							setAddNewAnimal={setAddNewAnimal}
							disableCommonFields={disableCommonFields}
						/>
					</div>

					<div>
						{
							animals.map(animal =>
								<p>{animal.name}, {animal.type}, {animal.age} ans, arrivé(e) le {animal.arrivalDate}</p>
							)
						}
					</div>

					<button
						className="font-bold text-lg py-2 px-8 border-2 border-amber-950 rounded-xl focus:bg-amber-200"
						onClick={useHandleSubmit}>
						Créer
					</button>
				</div>
			}
		</div>
	);

}

export default SubmitForm;