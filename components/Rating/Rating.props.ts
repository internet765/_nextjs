import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface RatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditeble?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
	error?: FieldError;
}
