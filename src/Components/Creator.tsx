import { MdMoreHoriz } from 'react-icons/md'
import Header from './Header'
import { FaEthereum } from 'react-icons/fa' 
import Blast from '../Assets/blast.png'

import Nft from '../Assets/nft-2.jpg'
import Nft2 from '../Assets/nft12.jpeg'
import Nft3 from '../Assets/nft13.jpeg'
import Nft4 from '../Assets/nft20.jpg'
import Nft5 from '../Assets/nft15.jpg'
import Nft6 from '../Assets/nft11.avif'
import Nft7 from '../Assets/nft9.avif'
import Nft8 from '../Assets/nft16.jpg'
import Nft9 from '../Assets/nft-3.jpg'

const Creator = () => {
    const items = [
        {
            img: Nft,
            header: 'Balance',
            username: '@benahve',
            price: '12,555',

        },
        {
            img: Nft2,
            header: 'Bouncy Bean',
            username: '@flamini',
            price: '24,050',
        },
        {
            img: Nft3,
            header: 'Face Off',
            username: '@bxnx',
            price: '1,203',

        },
        {
            img: Nft4,
            header: 'Holding',
            username: '@danzze2_',
            price: '27,05',
        },
        {
            img: Nft5,
            header: 'Kolobi',
            username: '@guada',
            price: '1,050',

        },
        {
            img: Nft6,
            header: 'Travel Fence',
            username: '@simeone32',
            price: '3,457',
        },
        {
            img: Nft7,
            header: 'Guard',
            username: '@vibes',
            price: '20,350',

        },
        {
            img: Nft8,
            header: 'Trippy',
            username: '@beavers77',
            price: '67,034',
        },
        {
            img: Nft9,
            header: 'Trippy',
            username: '@beavers77',
            price: '5,650',
        },
    ]
  return (
    <div className='flex flex-col gap-10 md:gap-16'>
        <Header header='Top Creator This Week' from ='creator' Img={Blast} subheader='NFT Creator'/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container">
            {items.map((item) => (
                <div className="h-fit hover:scale-105 hover:border-purple-500 duration-500 p-4 border-blue-500 border-2 text-white flex rounded-2xl items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-16 w-16 bg-amber-500 rounded-2xl overflow-hidden">
                            <img src={item.img} className='h-full w-full object-cover ' alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm md:text-sx font-bold'>{item.header}</p>
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded-full bg-purple-500  flex items-center justify-center">
                                    <FaEthereum className='text-white text-sm'/>
                                </div>
                                <p className='text-sm'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                    <MdMoreHoriz className='text-2xl cursor-pointer active:scale-90 duration-500'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Creator