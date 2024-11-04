import AboutImg from "../assets/AboutImg.png"

export const About = () => {
    return (
        <section className="w-full bg-gray-100 mt-72 mb-28 text-center lg:text-start py-24 sm:py-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
                    <div className="w-full md:w-1/2 hidden sm:block">
                        <div className="relative aspect-square max-w-[400px] mx-auto">
                            <img src={AboutImg} alt="About Us" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-blue-950">About Us</h2>
                        <p className="text-gray-600 text-lg">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. t has survived not only five centuries.
                        </p>
                        <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-base font-semibold">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}