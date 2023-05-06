import Header from "./Header"

import Star from '../Assets/star.png'
import { FcSalesPerformance, FcBookmark, FcFilledFilter } from 'react-icons/fc'

const CreateSell = () => {
  interface Items{
    img: any
    header: string
    text: string
  }
  const items: Items[] = [
    {
      img: <FcSalesPerformance />,
      header: 'Create Artwork',
      text: 'Create your collection. Add social links profile and banner images and set a secondary sales fee'
    },
    {
      img: <FcBookmark />,
      header: 'Upload',
      text: 'Upload your work, customize your NFTs with properties stats and unlockable content'
    },
    {
      img: <FcFilledFilter />,
      header: 'Listing',
      text: 'Setup and choose between auctions, fixed-price listings and declinging price listing'
    },

  ]
  return (
    <div className="container flex items-center flex-col gap-10 md:gap-16">
        <Header header='Create and sell your NFTs' Img={Star} from='createsell' subheader='How to be a creator'/>
        <div className="grid text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div className="flex hover:scale-105 duration-500 hover:border-purple-500 flex-col items-center gap-2  border-blue-500 border-2 p-5 text-center rounded-3xl">
              <div className="h-36 flex items-center justify-center bg-blue-5005 rounded-3xl w-full mb-7">
                <p className="text-[5rem] md:text-[6rem]">{item.img}</p>
              </div>
              <p className="text-base md:text-lg font-extrabold">{item.header}</p>
              <p className="text-gray-300 font-semibold text-sm md:text-sx">{item.text}</p>
              <p></p>
            </div>
          ))}
        </div>
        <div className="flex flex-col xs:flex-row gap-5 xs:gap-7">
          <p className="bg-blue-600 px-7 h-12 md:h-[3.25rem] flex items-center justify-center  hover:scale-105 text-white hover:bg-black text-sm md:text-sx cursor-pointer shadow-md shadow-black border-2 border-blue-600 active:scale-90 duration-500 rounded-full">Create Now</p>
          <p className="bg-black px-7 h-12 md:h-[3.25rem] flex items-center justify-center hover:scale-105 hover:border-blue-500 hover:text-blue-400 text-white text-sm md:text-sx cursor-pointer shadow-md shadow-black border-2 border-white active:scale-90 duration-500 rounded-full">Watch Video</p>
        </div>
    </div>
  )
}

export default CreateSell