import { useCallback, useState } from "react";
import testImg from "../../assets/testImg.png";
import CardList from "../../components/CardList";
import Paginator from "../../components/UI/paginator";
const MyCourses = () => {
  const [page,setPage] = useState(2)
  const [totalPages , setTotalPages] = useState(10);

  const getPage = useCallback((page:number)=>{
    setPage(page);
  },[])
  return (
    <>
      <CardList
        cardsData={[1, 2, 6, 6, 8, 64, 8,1].map(() => ({
          imgSrc: testImg,
          categories: ["test"],
          title: "testcours",
          rating: 4.5,
          students: 1000000,
          price: 15,
        }))}
      />
      <Paginator currentPage={page} totalPages={totalPages} getPage={getPage}/>
    </>
  );
};

export default MyCourses;
