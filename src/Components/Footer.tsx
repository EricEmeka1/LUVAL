import { BsDiscord, BsTiktok, BsYoutube, BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    const items = [<BsTwitter />, <BsYoutube />, <BsDiscord />, <BsTiktok />]
    const links = [
        [
            {
                text: 'Home',
                link: 'home'
            },
            {
                text: 'About',
                link: 'about'
            },
            {
                text: 'Contact Us',
                link: 'contact'
            },
            {
                text: 'More',
                link: 'more'
            },
        ],
        [
            {
                text: 'Explore',
                link: 'explore'
            },
            {
                text: 'All Nft',
                link: 'allnft'
            },
            {
                text: 'New Creations',
                link: 'creations'
            }
        ],
        [
            {
                text: 'Privacy & Policy',
                link: 'privacypolicy'
            },
            {
                text: 'Terms & Condition',
                link: 'termscondition'
            },
            {
                text: "Agreement",
                link: 'agreement'
            }
        ]

    ]
        
  return (
    <div className='bg-black w-screen pt-32 pb-14'>
        <div className="grid container grid-cols-1 gap-16 lg:gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-7 items-center lg:items-start">
                <p className='text-2xl text-white font-bold'>LUVAL</p>
                <p className='text-base text-gray-300 w-full sm:w-10/12 text-center lg:text-start'>The Larget NFT Marketplace. Authentic and truly unique digital creation. Signed and issues by the creator, made possible by Blockchain technology</p>
                <div className="flex gap-5">
                    {items.map((item, index) => (
                        <div className={`h-10 text-white cursor-pointer text-lg  active:scale-75 duration-500  border-2 ${index === 0 && 'hover:text-blue-500 hover:border-blue-500'} ${index === 1 && 'hover:text-red-500 hover:border-red-500'} ${index === 2 && 'hover:text-blue-500 hover:border-blue-500'} ${index === 3 && ''} hover:shadow-gray-700 shadow hover:scale-105 duration-500 w-14 gap-5 rounded-lg flex items-center justify-center`}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {links.map((link, index) => (
                <div className="flex flex-col gap-5 text-white">
                    <p className='text-base md:text-lg font-bold'>{index === 0 && 'Marketplace'} {index === 1 && 'Resources'} {index === 2 && 'Company'}</p>
                    <div className="flex flex-col gap-5">
                        {link.map(link => (
                            <div className="text-sm md:text-sx">
                                <NavLink to={`/${link.link}`} className='hover:text-red-500 duration-500 text-gray-300'>{link.text}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                ))}
        </div>
    </div>
    </div>
  )
}

export default Footer