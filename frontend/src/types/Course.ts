export interface Course{
  imgSrc: string;
  categories: string[];
  title: string;
  rating: number;
  students: number;
  price: number;
}

export interface Lesson{
  imgSrc:string;
  progress:number;
  course:string;
  lesson:string;  
}