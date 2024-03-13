import {ChangeEvent} from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type PresentationVideo = {
	id: string;
	title: string;
	description: string;
	animalTypes: Array<string>;
	date: Date;
}

export type {InputChangeEvent, PresentationVideo};