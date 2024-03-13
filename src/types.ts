import { ChangeEvent } from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

type PresentationVideo = {
	id: string;
	title: string;
	description: string;
	animalTypes: Array<string>;
	date: Date;
}

type PresentationVideoFilters = {
	animalFilters: Array<string>;
	cityFilters: Array<string>;
}

export type {InputChangeEvent, SelectChangeEvent, PresentationVideo, PresentationVideoFilters};