import testImg from "../../assets/testImg.png";
import CardList from "../../components/CardList";
const MyCourses = () => {
  return (
    <CardList
      cardsData={[1, 2, 6, 6, 8, 64, 8].map(() => ({
        imgSrc: testImg,
        categories: ["test"],
        title: "testcours",
        rating: 4.5,
        students: 1000000,
        price: 15,
      }))}
    />
  );
};

export default MyCourses;
