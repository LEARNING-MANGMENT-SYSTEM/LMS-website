export interface props{
  initialValues?:{
    title:string;
    subtitle:string;
    courseTopic:string;
    courseCategory:string;
    courseSubCategory:string;
    courseLanguage:string;
    subtitleLanguage:string;
    courseLevel:string;
    duration:string;
  }
}

export const defaultValues = {
  title: '',
  subtitle: '',
  courseTopic: '',
  courseCategory: '',
  courseSubCategory: '',
  courseLanguage: '',
  subtitleLanguage: '',
  courseLevel: '',
  duration: ''
};