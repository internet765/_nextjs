import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'low' | 'middle' | 'heigh';
    children: ReactNode
}