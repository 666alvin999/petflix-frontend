import {InputChangeEvent, Member, SelectChangeEvent} from "../../types.ts";

type Props = {
	members: Array<Member>;
	name: string;
	type: string;
	age: number | undefined;
	managingMember: Member | undefined;
	arrivalDate: string;
	addNewAnimal: boolean;
	setName: (value: string) => void;
	setType: (value: string) => void;
	setAge: (value: number) => void;
	setManagingMember: (value: Member | undefined) => void;
	setArrivalDate: (value: string) => void;
	setAddNewAnimal: (value: boolean) => void;
	disableCommonFields: boolean;
}

const FormAnimalsPart = (props: Props) => {

	const handleChange = (event: InputChangeEvent | SelectChangeEvent) => {
		if (event.target.id === "name") {
			props.setName(event.target.value);
		} else if (event.target.id === "type") {
			props.setType(event.target.value);
		} else if (event.target.id === "age") {
			props.setAge(parseInt(event.target.value));
		} else if (event.target.id === "managingMember") {
			const member: Member | undefined = props.members.find(member => member.id === parseInt(event.target.value));
			props.setManagingMember(member);
		} else if (event.target.id === "addNewAnimal") {
			props.setAddNewAnimal(!props.addNewAnimal);
		} else {
			props.setArrivalDate(event.target.value);
		}
	}

	return (
		<div className="w-[40%] h-[100%] p-8 flex flex-col justify-center items-center gap-8">
			<div>
				<label htmlFor="name">Nom de l'animal</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" type="text" id="name" name="name" value={props.name} onChange={handleChange} />
			</div>

			<div>
				<label htmlFor="type">Type d'animal</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" type="text" id="type" name="type" value={props.type} onChange={handleChange} />
			</div>

			<div>
				<label htmlFor="age">Age de l'animal</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" type="number" id="age" name="age" value={props.age} onChange={handleChange} />
			</div>

			<div>
				<label htmlFor="managingMember">Membre gérant</label>
				<select className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" id="managingMember" name="managingMember" onChange={handleChange} disabled={props.disableCommonFields}>
					<option value={-1} selected={props.managingMember === undefined}>Choisissez un membre</option>
					{
						props.members.map(member =>
							<option value={member.id} selected={props.managingMember?.id === member.id}>{member.lastName.toUpperCase()} {member.firstName}</option>
						)
					}
				</select>
			</div>

			<div>
				<label htmlFor="arrivalDate">Date d'arrivée</label>
				<input className="bg-transparent w-96 p-2 border-b-4 border-b-amber-950" type="date" id="arrivalDate" name="arrivalDate" value={props.arrivalDate} onChange={handleChange} />
			</div>

			<div className="flex flex-row gap-2">
				<input className="bg-amber-100" id="addNewAnimal" name="addNewAnimal" type="checkbox" checked={props.addNewAnimal} onChange={handleChange} />
				<p className="font-bold">Ajouter un autre animal</p>
			</div>

		</div>
	);

}

export default FormAnimalsPart;