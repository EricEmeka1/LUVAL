
interface Props {
  header: string,
  subheader: string,
  Img: string,
  from: string
}

const Header = ({header, subheader, Img, from}: Props) => {
  return (
    <div className="text-white">
        <div className="flex flex-col items-center text-center gap-3">
            <p className="text-purple-500 text-base md:text-lg">{subheader}</p>
            <div className="flex items-center ">
                <p className="text-2xl md:text-3xl font-bold">{header}</p>
                <img src={Img} className={`${from === 'drops' && 'h-10 ml-4 w-10'} ${from === 'createsell' && 'h-24 w-28 -ml-5'} ${from === 'creator' && 'ml-2 h-16 w-20'} `} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header