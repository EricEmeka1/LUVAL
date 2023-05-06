import { BsStarFill, BsArrowDownRight } from 'react-icons/bs'
import Image from '../Assets/nft-3.jpg'
import Image2 from '../Assets/nft19.webp'
import Coinbase from '../Assets/coinbase.png'
import Exodus from '../Assets/exodus.png'
import MetaMask from '../Assets/metamask.png'
import Tezos from '../Assets/tezos.png'
import Trustwallet from '../Assets/trustwallet.png'

const Hero = () => {
    const coins = [MetaMask, Coinbase, Exodus, Tezos, Trustwallet]
    
  return (
    <div className="">
        <div className="container text-6xl xl:text-[5rem] md:flex pt-20 hidden flex-col gap-6">
            <div className="flex relative w-fit mx-auto text-white font-bold justify-center items-center gap-10">
                <p>Discover</p>
                <BsStarFill className='absolute -top-20 left-48 text-xl text-blue-500'/>
                <BsStarFill className='absolute -top-12 right-48 text-3xl text-white'/>
                <div className="h-20 w-16 bg-red-500 overflow-hidden  rounded-xl">
                    <img src={Image} className='object-cover h-full rounded-xl w-full' alt="" />
                </div>
                <p>Collect</p>
            </div>
            <div className="flex text-white font-bold justify-center items-center gap-7">
                <BsStarFill className='text-3xl'/>
                <p>And Sell Rare</p>
                <div className="h-16 w-24 overflow-hidden  bg-red-500 rounded-xl">
                    <img src={Image2} className='object-cover h-full rounded-xl w-full' alt="" />
                </div>
            </div>
            <div className="flex text-white font-bold justify-center items-center gap-3">
                <div className="h-20 lg:h-24 w-20 lg:w-24 backdrop-blur-lg rounded-full shadow-md shadow-blue-950 bg-blue-500">
                    <div className="h-20 lg:h-24 w-20 border-4 border-white lg:w-24 backdrop-blur-lg flex items-center justify-center rounded-full shadow-md shadow-blue-950 bg-blue-500">
                        <BsArrowDownRight className='text-4xl lg:text-5xl'/>
                    </div>
                </div>
                <p className="text-base w-[30rem] ml-5 flex items-center text-gray-400 justify-center font-normal leading-relaxed">The larget NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology</p>
                <p>NFTs</p>
            </div>
        </div>
        <div className="container mt-6 relative flex md:hidden flex-col gap-12 text-white text-center w-[80%] leading-snug  text-4xl md:text-5xl font-bold">
            <p>Discover, Collect, And Sale Rare NFTs</p>
            <div className="flex items-center flex-col gap-8">
                <div className="h-16 w-16 backdrop-blur-lg rounded-full shadow-md shadow-blue-950 bg-blue-500">
                    <div className="h-16 w-16 backdrop-blur-lg border-4 border-white rounded-full shadow-md flex items-center justify-center shadow-blue-950 bg-blue-500"><BsArrowDownRight className=''/></div>
                </div>
                <p className="text-base flex items-center text-center justify-center font-normal leading-relaxed">The larget NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology</p>
            </div>
            <BsStarFill className='absolute top-36 left-5 text-3xl text-white'/>
            <BsStarFill className='absolute top-52 right-12 text-xl text-blue-500'/>
        </div>
    </div>
  )
}

export default Hero