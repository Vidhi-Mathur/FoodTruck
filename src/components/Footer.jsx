import { Instagram, Twitter, Facebook, Copyright } from 'lucide-react';
import FoodTruck from "../assets/logo.png"

const columns = [
    {
      heading: "Contact Us",
      points: [
        "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434",    
        "example2020@gmail.com",
        "(904) 443-0343"
      ]
    },
    {
      heading: "More",
      points: [
        "About Us",    
        "Products",
        "Career",
        "Contact Us"
      ]
    }
]


export const Footer = () => {
        return (
          <footer className="w-full bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="flex justify-center items-center">
                        <img src={FoodTruck} alt="Food Truck Logo" className="w-36 h-auto"/>
                    </div>
                    {columns.map((column) => (
                        <div key={column.heading} className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-blue-950">{column.heading}</h3>
                            <ul className="space-y-3">
                              {column.points.map((point, index) => (
                                <li key={index} className="text-md text-gray-600">{point}</li>
                              ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold text-blue-950">Social Links</h3>
                        <div className="flex gap-4">
                            <Instagram size={24} className="text-blue-950" strokeWidth={3} />
                            <Twitter className="text-blue-950" strokeWidth={3} />
                            <Facebook className="text-blue-950" strokeWidth={3} />
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-end mt-12">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Copyright className="w-4 h-4" />2022 Food Truck Example
                  </p>
                </div>
            </div>
          </footer>
        )
}