import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo } from "react";

interface props {
  currentPage: number;
  totalPages: number;
  getPage: (page: number) => void;
}
function Paginator({ currentPage, totalPages, getPage }: props) {
  const pages = useMemo(() => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(totalPages, start + 4);
      } else if (end === totalPages) {
        start = Math.max(1, end - 4);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages]);

  return (
    <div className="flex mt-8 justify-center">
      <ArrowLeft
        size={50}
        color="#FF6636"
        className="bg-white rounded-full p-3"
        onClick={() => getPage(Math.max(1, currentPage - 1))}
      />
      {pages.map((page, i) => {
        const isActive = page === currentPage;
        return (
          <div
            key={page}
            onClick={() => getPage(page)}
            className={`text-center rounded-full p-3 w-12 h-12 cursor-pointer ${
              isActive
                ? "bg-orange-500 text-white"
                : i % 2 === 1
                ? "bg-white text-orange-500"
                : ""
            }`}
          >
            {String(page).padStart(2, "0")}
          </div>
        );
      })}

      <ArrowRight
        size={50}
        color="#FF6636"
        className="bg-white rounded-full p-3"
        onClick={() => getPage(Math.min(totalPages, currentPage + 1))}
      />
    </div>
  );
}

export default Paginator;
