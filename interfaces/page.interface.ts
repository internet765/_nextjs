export enum TopLevelGategory  {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    _id: string;
    title: string;
    deccription: string
}

export interface hhData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updateAt: Date
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelGategory;
    advantages: TopPageAdvantage[];
    createdAt: Date;
    updateddeAt: Date;
    hh: hhData;
}