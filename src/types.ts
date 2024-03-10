import {ChangeEvent} from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type PresentationVideo = {
	id: string;
	title: string;
	description: string;
}

export type {InputChangeEvent, PresentationVideo};