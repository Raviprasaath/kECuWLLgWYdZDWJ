import { useEffect, useState } from "react";
import image1 from "../../../assets/homepage-section3/image1.jpg";
import image2 from "../../../assets/homepage-section3/image2.jpg";
import "./HomeCarouselSection3.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Fetching/DataContext";
import { GridLoader } from 'react-spinners';

const HomeCarouselSection3 = () => {
  const [cargoData, setCargoData] = useState([]);
  const [allData, setAllData] = useState([]);
  const { data, loading } = useDataContext();

  function homeSection3Fetch1() {
    const cargoJogger = data?.data?.filter(
      (item) => item.description.includes("cargo"))
      .filter((item) => item.gender === "Men");
      setCargoData(cargoJogger);
  }

  function homeSection3Fetch2() {
    const result = data?.data?.filter(
      (item) => item.gender === "Men");
      setAllData(result);
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        homeSection3Fetch1();
        homeSection3Fetch2();
      }, 0);
    }
  }, [data]);


  if (loading) {
    return <div className="flex justify-center items-center">
      <GridLoader color="#36d6b1" loading margin={5} size={15} />
    </div>;
  }


  return (
    <>
      <div className="flex justify-center my-4">
        <div className="w-[90%] justify-center flex flex-row gap-2.5 overflow-x-scroll overflow-y-hidden p-2.5 touch-scroll sm4:w-[80%] sm4:flex sm4:flex-row">
          <Link
            className="w-full"
            to={"/clothing/cargo"}
            state={{ data: cargoData }}
          >
            <img className="w-full" src={image1} alt="img" />
          </Link>
          <Link className="w-full" to="/clothing/all" state={{ data: allData }}>
            <img className="w-full" src={image2} alt="img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCarouselSection3;

// original
{
  /* <>
<div className="flex justify-center my-4">
    <div className='w-[80%]  flex flex-row gap-2.5 overflow-x-scroll overflow-y-hidden p-2.5  touch-scroll sm4:[ w-[80%] flex flex-row  ]'>            
      <img className='w-[90%] sm4:w-[48%]' src={image1} alt="img" />
      <img className='w-[90%] sm4:w-[48%]' src={image2} alt="img" />
    </div>
</div>
</> */
}
