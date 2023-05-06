import { useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import Header from './Header'

import Nft from '../Assets/nft17.jpg'
import Nft2 from '../Assets/nft2.jpg'
import Nft3 from '../Assets/nft7.jpg'
import Nft4 from '../Assets/nft9.jpg'
import Nft5 from '../Assets/nft3.png'
import Nft6 from '../Assets/nft6.jpg'
import Nft7 from '../Assets/nft5.jpg'
import Nft8 from '../Assets/nft1.jpg'
import Fire from '../Assets/fire.png'

import { FaEthereum } from 'react-icons/fa' 

const Drops = () => {
    const items = ['Music', 'Sport', 'Art', 'Photography', 'Trading Card', 'Virtual World', 'Videos', 'More']
    const [active, setActive] = useState<number>(2)
    const changeActive = (index: number) =>{
        setActive(index)
    }
    const items2 = [
        {
            img: Nft,
            header: 'Balance',
            username: '@benahve',
            price: 'ETH 0.80',

        },
        {
            img: Nft2,
            header: 'Bouncy Bean',
            username: '@flamini',
            price: 'ETH 0.50',
        },
        {
            img: Nft3,
            header: 'Face Off',
            username: '@bxnx',
            price: 'ETH 1.20',

        },
        {
            img: Nft4,
            header: 'Holding',
            username: '@danzze2_',
            price: 'ETH 0.720',
        },
        {
            img: Nft5,
            header: 'Kolobi',
            username: '@guada',
            price: 'ETH 1.050',

        },
        {
            img: Nft6,
            header: 'Travel Fence',
            username: '@simeone32',
            price: 'ETH 0.57',
        },
        {
            img: Nft7,
            header: 'Guard',
            username: '@vibes',
            price: 'ETH 2.350',

        },
        {
            img: Nft8,
            header: 'Trippy',
            username: '@beavers77',
            price: 'ETH 0.34',
        },
    ]

  return (
    <div className="">
        <div className="flex flex-col container gap-10 md:gap-16">
            <Header header='Hot Drops' Img={Fire} from='drops' subheader='NFT Marketplace'/>
            <div className="flex flex-col  gap-y-10">
                <div className="flex gap-5 justify-between scrollbar-hide overflow-x-auto">
                    {items.map((item, index) => (
                        <p onClick={() => changeActive(index)} className={`text-sm hover:border-white hover:text-white active:scale-90 duration-500 md:text-sx whitespace-nowrap py-2 px-5 md:py-2 lg:py-3 md:px-8 backdrop-blur-sm ${index === active ? 'border-blue-500 text-blue-500 ' : 'border-gray-500 text-gray-300'} bg-black cursor-pointer duration-500 font-semibold border-2 text-700 rounded-xl`}>{item}</p>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-white">
                    {items2.map((item) => (
                        <div className="flex group flex-col border-blue-500 border-2 glass p-3 rounded-2xl gap-3">
                            <div className="h-56 duration-500 group-hover:h-48 bg-red-500 overflow-hidden rounded-2xl">
                                <img src={item.img} className='w-full h-full object-cover ' alt="" />
                            </div>
                            <div className="flex-col flex gap-2">
                                <div className="flex items-center justify-between">
                                    <p className='md:text-sx font-semibold'>{item.header}</p>
                                    <MdMoreHoriz className='text-2xl md:text-3xl cursor-pointer'/>
                                </div>
                                <p className='text-xs text-gray-400'>{item.username}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-blue-600 font-bold">{item.price}</p>
                                    <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center">
                                        <FaEthereum className='text-white text-base'/>
                                    </div>
                                </div>
                            </div>
                            <div className="h-0 w-0 shadow-md active:scale-90 self-center shadow-black overflow-hidden group-hover:h-12 text-sm hover:bg-blue-700 font-semibold group-hover:w-full duration-500 cursor-pointer bg-blue-600 rounded-xl text-white flex items-center justify-center"><p>Collect Now</p></div>
                            
                        </div>
                    ))}
                </div>
            </div>
            <p className="bg-black px-7 h-12 flex items-center justify-center md:h-[3.25rem]  w-fit self-center hover:border-blue-500 hover:text-blue-400 hover:scale-105 active:scale-90 duration-500 text-white text-sm md:text-sx cursor-pointer shadow-md shadow-black border-2 border-white rounded-full">View More</p>
        </div>
    </div>
  )
}

export default Drops