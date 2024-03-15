import {Control} from "../../types.ts";
import "../../index.css";

const ControlCard = ({animal, adopter, member, adoptionDate, controlDate}: Control) => {


	return (
		<div className="bg-amber-950 text-white text-lg font-bold w-96 h-[500px] py-4 px-8 flex flex-col justify-center items-center gap-4 rounded-xl shadow-box">
			<h2 className="text-2xl">
				{animal.name}, {animal.type} de {animal.age} ans, adopté(e) le {new Date(adoptionDate).getDate()}/{new Date(adoptionDate).getMonth() + 1}/{new Date(adoptionDate).getFullYear()}
			</h2>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h3 className="underline">Adoptant:</h3>
					<ul>
						<li>{adopter.lastName.toUpperCase()} {adopter.firstName}</li>
						<li>Adresse: {adopter.address}</li>
						<li>Contact: {adopter.mail}</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="underline">Membre gérant</h3>
					<ul>
						<li>{member.lastName.toUpperCase()} {member.firstName}</li>
						<li>Ville: {member.city}</li>
						<li>Contact: {member.mail} / {member.phone}</li>
					</ul>
				</div>
			</div>

			<h2 className="text-2xl">Date de contrôle: {new Date(controlDate).getDate()}/{new Date(controlDate).getMonth() + 1}/{new Date(controlDate).getFullYear()}</h2>
		</div>
	);

}

export default ControlCard;