import {usePresentationVideoOverviews} from "../../queries";
import PresentationVideoOverview from "./PresentationVideoOverview.tsx";
import {PresentationVideoAndAnimalTypes, SelectChangeEvent} from "../../types.ts";
import {useState} from "react";
import useFilters from "../../queries/useFilters.ts";
import "../homepage.css";
import "../../index.css";

const HomepagePresentationVideoFeed = () => {

	const [animalFilter, setAnimalFilter] = useState<string | null>(null);
	const [cityFilter, setCityFilter] = useState<string | null>(null);

	const {
		isPending: filtersIsPending,
		isError: filtersIsError,
		data: filtersData
	} = useFilters();

	const {
		isPending: presentationVideoAndAnimalTypesIsPending,
		isError: presentationVideoAndAnimalTypesIsError,
		data: presentationVideoAndAnimalTypesDataList
	} = usePresentationVideoOverviews(animalFilter, cityFilter);

	const isPending = () => {
		return filtersIsPending || presentationVideoAndAnimalTypesIsPending;
	}

	const isError = () => {
		return presentationVideoAndAnimalTypesIsError || filtersIsError;
	}

	const changeFilter = (event: SelectChangeEvent) => {
		if (event.target.id === "animalFilters") {
			event.target.value === "" ?
				setAnimalFilter(null) : setAnimalFilter(event.target.value)
		} else {
			event.target.value === "" ?
				setCityFilter(null) : setCityFilter(event.target.value)
		}
	}

	return (
		<>
			<div
				className="bg-amber-950 text-white py-8 px-8 w-[70%] flex flex-col justify-center items-center gap-8 rounded-3xl shadow-box">
				{
					isPending() &&
					<div className="spinner"></div>
				}

				{
					isError() &&
					<div className="flex flex-col justify-center items-center">
						<h2 className="text-3xl font-bold">Oh oh !</h2>
						<p className="text-xl font-bold">Quelque chose s'est mal passé :( </p>
					</div>
				}

				{
					!(isPending() || isError()) &&
					<>
						<div className="flex flex-row justify-center gap-12">
							<div className="flex flex-col items-center">
								<label className="text-amber-100 font-bold text-sm" htmlFor="animalFilters">Espèce:</label>

								<select className="filter-select focus:outline-amber-950" id="animalFilters"
										onChange={(event) => changeFilter(event)}>
									<option value="" selected={animalFilter === null}>
										Toutes
									</option>
									{
										filtersData.animalFilters.map((filter: string) =>
											<option value={filter} selected={animalFilter === filter}>
												{filter}
											</option>
										)
									}
								</select>
							</div>

							<div className="flex flex-col items-center">
								<label className="text-amber-100 font-bold text-sm" htmlFor="cityFilters">Ville:</label>

								<select className="filter-select focus:outline-amber-950" id="cityFilters"
										onChange={(event) => changeFilter(event)}>
									<option value="" selected={cityFilter === null}>
										Toutes
									</option>
									{
										filtersData.cityFilters.map((filter: string) =>
											<option value={filter} selected={cityFilter === filter}>
												{filter}
											</option>
										)
									}
								</select>
							</div>
						</div>

						<div className="flex flex-row flex-wrap justify-around items-center gap-8">
							{
								presentationVideoAndAnimalTypesDataList.map((presentationVideoAndAnimalTypes: PresentationVideoAndAnimalTypes) =>
									<PresentationVideoOverview
										presentationVideo={presentationVideoAndAnimalTypes.presentationVideo}
										animalTypes={presentationVideoAndAnimalTypes.animalTypes}
									/>
								)
							}
						</div>
					</>
				}
			</div>
		</>
	);
}

export default HomepagePresentationVideoFeed;