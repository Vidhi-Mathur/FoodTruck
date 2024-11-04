import { useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import tomatoesImg from "../assets/article_1.png"
import travelSnackImg from "../assets/article_2.png"
import workoutRecipeImg from "../assets/article_3.png"
import cornImg from "../assets/article_4.png"
import crunchWrapImg from "../assets/article_5.png"
import soupImg from "../assets/article_6.png"

const recipes = [
    {
        title: "Grilled Tomatoes at Home",
        img: tomatoesImg
    },
    {
        title: "Snacks for Travel",
        img: travelSnackImg
    },
    {
        title: "Post-workout Recipes",
        img: workoutRecipeImg
    },
    {
        title: "How To Grill Corn",
        img: cornImg
    },
    {
        title: "Crunchwrap Supreme",
        img: crunchWrapImg
    },
    {
        title: "Broccoli Cheese Soup",
        img: soupImg
    },
]

const BackArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center justify-center">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z" fill="#AFAFAF"/>
                <rect x="0.5" y="0.5" width="27" height="28" rx="4.5" stroke="#AFAFAF"/>
            </svg>
        </button>
    )
}

const FrontArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center justify-center">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z" fill="#AFAFAF"/>
                <rect x="0.5" y="0.5" width="27" height="28" rx="4.5" stroke="#AFAFAF"/>
            </svg>
        </button>
    )
}

export const Articles = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                }
            }
        ]
    }

    const slider = useRef(null)

    const prevHandler = () => {
        slider.current.slickPrev()
    }

    const nextHandler = () => {
        slider.current.slickNext()
    }

    return (
        <section className="mb-28">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-left ml-4 mb-12 text-blue-950">Latest Articles</h2>
                <div className="md:block">
                    <Slider ref={slider} {...settings}>
                        {recipes.map((recipe) => (
                            <div key={recipe.title} className="px-4 pb-8 md:pb-0">
                                <div className="bg-white rounded-lg border border-gray-300 p-6 text-left h-full">
                                    <img src={recipe.img} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h3 className="text-xl font-bold mb-2 text-blue-950">{recipe.title}</h3>
                                    <p className="text-gray-600">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...</p>
                                    <button className="px-8 py-2 bg-white text-gray-500 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white hover:border-white transition-colors text-base font-semibold mt-4">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <BackArrow onClick={prevHandler} />
                    <button className="px-8 py-2 bg-white text-gray-500 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white hover:border-white transition-colors text-base font-semibold">
                        {currentSlide === 0 ? '1/2' : '2/2'}
                    </button>
                    <FrontArrow onClick={nextHandler} />
                </div>
            </div>
        </section>
    )
}