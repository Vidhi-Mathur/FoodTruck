import FoodTruck from "../assets/logo.png"
import Pizza from "../assets/pizza.png"
import Layer from "../assets/layer.png"

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-visible">
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 lg:px-20">
            <div className="flex items-center">
                <img src={FoodTruck} alt="logo" className="w-36 h-auto hidden md:block" />
            </div>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full border-2 border-white hover:bg-white hover:text-red-500 hover:border-red-500 transition-colors text-sm font-medium">
                Get In Touch
            </button>
        </nav>
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="w-full h-[80vh] relative lg:hidden">
              <img src={Pizza} alt="pizza" className="w-full h-full object-cover object-center"/>
              <img src={Layer} alt="layer" className="absolute top-0 left-0 w-full h-full object-cover object-center"/>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 lg:px-20 pt-8 lg:pt-0 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-blue-950 mt-8 leading-tight mb-4">
                    Discover the
                    <br />
                    <span className="text-red-500">Best</span> Food
                    <br />
                    and Drinks
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                    Naturally made Healthcare Products for the 
                    better care & support of your body.
                </p>
                <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors w-fit text-lg font-medium">
                    Explore Now!
                </button>
            </div>
            <div className="flex-0 relative mt-8 lg:mt-0 hidden lg:block">
                <div className="relative">
                    <img src={Pizza} alt="pizza" className="w-full h-full object-cover object-center"/>
                    <img src={Layer} alt="layer" className="absolute top-0 left-0 w-full h-full object-cover object-center"/>
                </div>
            </div>
        </div>
    </div>
  )
}