import { type Course } from '../../types/Course'
import CourseCard from '../CourseCard';

type props = {
    cardsData:Course[];
}
function CardList({cardsData}:props) {
  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {cardsData.map((data) => <CourseCard {...data} />)}
    </div>
  )
}

export default CardList