import {useControls} from "../../queries";
import "../../index.css";
import ControlCard from "./ControlCard.tsx";
import {Control} from "../../types.ts";

const ControlsFeed = () => {

	const {isPending, isError, data} = useControls();

	return (
		<>
			<div className="w-[90%] flex flex-row flex-wrap justify-center items-center gap-12">
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

				{
					!(isPending || isError) &&
					data.map((control: Control) =>
						<ControlCard
							animal={control.animal}
							adopter={control.adopter}
							member={control.member}
							adoptionDate={control.adoptionDate}
							controlDate={control.controlDate}
						/>
					)
				}
			</div>
		</>
	);

}

export default ControlsFeed;