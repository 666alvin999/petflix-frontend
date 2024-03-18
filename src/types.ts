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
	arrivalDate: string;
	adopted: boolean;
}

type Member = {
	id: number;
	firstName: string;
	lastName: string;
	city: string;
	mail: string;
	phone: string;
}

type Adopter = {
	firstName: string;
	lastName: string;
	address: string;
	mail: string;
}

type Control = {
	animal: Animal;
	member: Member;
	adopter: Adopter;
	adoptionDate: string;
	controlDate: string;
}

export type {InputChangeEvent, SelectChangeEvent, PresentationVideo, PresentationVideoAndAnimalTypes, Animal, Member, Control};