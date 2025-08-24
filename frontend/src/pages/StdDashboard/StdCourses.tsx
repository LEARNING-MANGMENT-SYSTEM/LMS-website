import { useCallback, useState } from "react";
import CardList from "../../components/CardList"
import SearchAndFilter from "../../components/searchAndFilter"
import Paginator from "../../components/UI/paginator"
import testImg from "../../assets/testImg.png";


function StdCourses() {
    const [page,setPage] = useState(2)
    const [totalPages , setTotalPages] = useState(10);
  
    const getPage = useCallback((page:number)=>{
      setPage(page);
    },[])

    const courseCount = Math.floor(Math.random()*1000)
  return (
    <>
    <h1 className="text-xl font-bold my-5">Courses ({courseCount})</h1>
    <SearchAndFilter/>
      <CardList
        cardsData={[1, 2, 6, 6, 8, 64, 8,1].map(() => ({
          imgSrc: testImg,
          progress:Math.floor(Math.random()*10),
          course:'Learn Ethical Hacking From Scratch',
          lesson:'31.Learn More About Web Design'
        }))}
      />
      <Paginator currentPage={page} totalPages={totalPages} getPage={getPage}/>
    </>
  )
}

export default StdCourses