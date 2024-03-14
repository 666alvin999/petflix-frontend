import { ChangeEvent } from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

type PresentationVideo = {
	id: string;
	title: string;
	description: string;
	uploadDate: Date;
}

type PresentationVideoAndAnimalTypes = {
	presentationVideo: PresentationVideo;
	animalTypes: Array<string>;
}

type Animal = {
	name: string;
	age: number;
	type: string;
	presentationVideoId: string;
	arrivalDate: Date;
	adopted: boolean;
}

export type {InputChangeEvent, SelectChangeEvent, PresentationVideo, PresentationVideoAndAnimalTypes, Animal};