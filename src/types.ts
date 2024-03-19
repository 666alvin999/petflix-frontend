import {ChangeEvent} from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type TextAreaChangeEvent = ChangeEvent<HTMLTextAreaElement>;
type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

type PresentationVideo = {
	id: string;
	title: string;
	description: string;
	uploadDate: string;
}

type Member = {
	id: number;
	firstName: string;
	lastName: string;
	city: string;
	mail: string;
	phone: string;
}

type Animal = {
	name: string;
	age: number;
	type: string;
	presentationVideoId: string;
	arrivalDate: string;
	adopted: boolean;
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

type PresentationVideoAndAnimalTypes = {
	presentationVideo: PresentationVideo;
	animalTypes: Array<string>;
}

type PresentationVideoAndAnimalsAndMember = {
	presentationVideo: PresentationVideo,
	animals: Array<Animal>
	member: Member
}

export type {
	InputChangeEvent,
	TextAreaChangeEvent,
	SelectChangeEvent,
	PresentationVideo,
	Member,
	Animal,
	Control,
	PresentationVideoAndAnimalTypes,
	PresentationVideoAndAnimalsAndMember
};