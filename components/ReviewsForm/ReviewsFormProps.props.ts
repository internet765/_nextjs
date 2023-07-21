import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ReviewModel } from "../../interfaces/product.interface";

export interface ReviewsFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   productId: string
}