import { useCallback, useState } from "react";
import CardList from "../../components/CardList";
import Paginator from "../../components/UI/paginator";
import testImg from "../../assets/testImg.png";
import StdSearchAndFilter from "../../components/StdSearchAndFilter";
import Filters from "../../components/FIlters";

const Courses = () => {
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(10);
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  const getPage = useCallback((page: number) => {
    setPage(page);
  }, []);
  return (
    <div>
      <StdSearchAndFilter
        openFilter={openFilter}
        filtersCount={filters.length}
        setOpenFilter={setOpenFilter}
      />
      <div className="flex gap-10">
        {openFilter && <Filters />}
        <div>
          <CardList
            cardsData={[1, 2, 6, 6, 8, 64, 8, 1].map(() => ({
              imgSrc: testImg,
              categories: ["test"],
              title: "testcours",
              rating: 4.5,
              students: 1000000,
              price: 15,
            }))}
          />
          <Paginator
            currentPage={page}
            totalPages={totalPages}
            getPage={getPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
