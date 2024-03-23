import {Adopter, Animal, InputChangeEvent, Member, SelectChangeEvent} from "../../types.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import {useAllAdopters, useSubmitAdoption} from "../../queries";
import "../../index.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
	animalToAdopt: Animal;
	member: Member;
	setAnimalToAdopt: (animal: Animal | undefined) => void;
}

const AdoptionPopIn = ({animalToAdopt, member, setAnimalToAdopt}: Props) => {

	const navigation = useNavigate();

	const [selectedAdopter, setSelectedAdopter] = useState<Adopter>();

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [mail, setMail] = useState<string>("");

	const [disableAdopterFields, setDisableAdopterFields] = useState<boolean>(false);
	const [doFetch, setDoFetch] = useState<boolean>(false);

	const adopters = useAllAdopters();

	const submit = useSubmitAdoption(selectedAdopter!, animalToAdopt, member, doFetch);

	useEffect(() => {
		if (submit.data !== null && submit.data !== undefined && submit.data.success) {
			navigation("/");
		}
		setDoFetch(false);
	}, [submit.data]);

	const handleClosePopUp = () => {
		setAnimalToAdopt(undefined);
	}

	const handleSelectAdopter = (event: SelectChangeEvent) => {
		const adopter: Adopter | undefined = adopters.data.find((adopter: Adopter) => adopter.id === parseInt(event.target.value));
		setSelectedAdopter(adopter);
		setDisableAdopterFields(adopter !== undefined);
	}

	const handleInputChange = (event: InputChangeEvent) => {
		if (event.target.id === "firstName") {
			setFirstName(event.target.value);
		} else if (event.target.id === "lastName") {
			setLastName(event.target.value);
		} else if (event.target.id === "address") {
			setAddress(event.target.value);
		} else {
			setMail(event.target.value);
		}
	}

	const useHandleSubmit = () => {
		if (selectedAdopter === undefined) {
			const adopter: Adopter = {
				id: null,
				firstName: firstName,
				lastName: lastName,
				address: address,
				mail: mail
			}

			setSelectedAdopter(adopter);
		}

		if (selectedAdopter !== undefined) {
			setDoFetch(true);
		}
	}

	return (
		<div className="bg-black bg-opacity-50 absolute left-0 top-0 w-[100%] h-[100%] flex justify-center items-center">
			<div className="bg-amber-100 w-[536px] h-[512px] p-4 border-4 border-amber-950 rounded-2xl">
				<FontAwesomeIcon icon={faXmark} className="relative top-0 left-[96%] hover:cursor-pointer" size="lg" onClick={handleClosePopUp} />

				<div className="w-[100%] h-[90%] flex flex-col justify-center items-center gap-8">
					<h3 className="text-2xl text-center font-bold w-[100%] h-[10%]">Adopter {animalToAdopt.name}</h3>
					{
						adopters.isPending &&
						<div className="spinner"></div>
					}

					{
						!(adopters.isPending || adopters.isError) &&
						<>
							<div className="flex flex-col justify-center items-start">
								<label htmlFor="adopter">Adoptant</label>
								<select className="bg-transparent w-52 p-2 border-b-4 border-b-amber-950" name="adopter"
										id="adopter" onChange={handleSelectAdopter}>
									<option value={-1}>Aucun</option>
									{
										adopters.data.map((adopter: Adopter) =>
											<option value={adopter.id!}>{adopter.lastName.toUpperCase()} {adopter.firstName}</option>
										)
									}
								</select>
							</div>

							<h4>Vous ne trouvez pas ? Créer un adoptant</h4>

							<div className="flex justify-center items-start flex-wrap gap-4">
								<div className="flex flex-col justify-center items-start">
									<label htmlFor="firstName">Nom de famille</label>
									<input className="bg-transparent w-44 p-2 border-b-4 border-b-amber-950" type="text" name="firstName" id="firstName" value={firstName} onChange={handleInputChange} maxLength={30} disabled={disableAdopterFields}/>
								</div>

								<div className="flex flex-col justify-center items-start">
									<label htmlFor="lastName">Prénom</label>
									<input className="bg-transparent w-44 p-2 border-b-4 border-b-amber-950" type="text" name="lastName" id="lastName" value={lastName} onChange={handleInputChange} maxLength={30} disabled={disableAdopterFields}/>
								</div>

								<div className="flex flex-col justify-center items-start">
									<label htmlFor="address">Adresse</label>
									<input className="bg-transparent w-44 p-2 border-b-4 border-b-amber-950" type="text" name="address" id="address" value={address} onChange={handleInputChange} maxLength={128} disabled={disableAdopterFields}/>
								</div>

								<div className="flex flex-col justify-center items-start">
									<label htmlFor="mail">Mail</label>
									<input className="bg-transparent w-44 p-2 border-b-4 border-b-amber-950" type="text" name="mail" id="mail" value={mail} onChange={handleInputChange} maxLength={255} disabled={disableAdopterFields}/>
								</div>
							</div>

							<button
								className="font-bold text-lg py-2 px-8 border-2 border-amber-950 rounded-xl focus:bg-amber-200"
								onClick={useHandleSubmit}>
								Adopter
							</button>
						</>
					}
				</div>
			</div>
		</div>
	);

}

export default AdoptionPopIn