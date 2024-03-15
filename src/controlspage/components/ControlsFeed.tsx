import {useControls} from "../../queries";
import "../../index.css";
import ControlCard from "./ControlCard.tsx";
import {Control} from "../../types.ts";

const ControlsFeed = () => {

	const {isPending, isError, data, error} = useControls();

	if (!(isPending || isError)) console.log(data);

	return (
		<>
			<div className="w-[90%] flex flex-row flex-wrap justify-center items-center gap-12">
				{
					isPending &&
					<div className="spinner"></div>
				}

				{
					isError &&
					error.message
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