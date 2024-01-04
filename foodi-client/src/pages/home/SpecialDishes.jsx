import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from '../../components/Cards';
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft  } from "react-icons/fa6";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  };

const SpecialDishes = () => {
    const [recipes,setRecipes] = useState([])
    const slider = React.useRef(null);
    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const specials = data.filter((item) => item.category === "popular");
                // console.log(specials)
                setRecipes(specials);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
          <div className='text-left'>
              <p className='text-red uppercase tracking-wide font-semibold text-lg'>Special Dishes</p>
              <h2 className='text-4xl md:text-5xl md:leading-snug font-bold my-2'>Standout Dishes From Our Menu</h2>
          </div>

          <div >
              <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
              <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
          </div>

          <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
              {recipes.map((item, i) => (
                  <Cards item={item} key={i} />
              ))}
          </Slider>


          {/* <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
              <button onClick={() => slider?.current?.slickPrev()}
                  className=" btn p-2 rounded-full ml-5"
              >
                  <FaAngleLeft className=" h-8 w-8 p-1" />
              </button>
          </div> */}
    </div>
  )
}

export default SpecialDishes