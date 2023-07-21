import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ReviewModel } from "../../interfaces/product.interface";

export interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   review: ReviewModel
}