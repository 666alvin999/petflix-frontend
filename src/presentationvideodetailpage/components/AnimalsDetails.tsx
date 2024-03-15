import {Animal, Member} from "../../types.ts";

type Props = {
	animals: Array<Animal>;
	member: Member;
}

const AnimalsDetails = ({animals, member}: Props) => {

	return (
		<div className="w-[80%] p-8 flex flex-row justify-around border-4 border-amber-950 rounded-xl shadow-box">
			<div className="w-1/2 h-[100%] flex flex-col items-center gap-4">
				<h3 className="text-xl font-bold">Les animaux:</h3>
				<ul className="flex flex-col gap-2">
					{
						animals.map((animal: Animal) => {
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
						{member.lastName.toUpperCase()} {member.firstName}
					</p>
					<p>
						{member.city}
					</p>
					<p className="underline">
						{member.mail}
					</p>
					<p className="underline">
						{member.phone}
					</p>
				</div>
			</div>
		</div>
	);

}

export default AnimalsDetails;