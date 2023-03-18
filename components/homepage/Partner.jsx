import Slidein from "../helper/Slidein.jsx";
import Image from 'next/image';
import partner from './data/partnerData';

export default function Partner() {
    return (
        <Slidein>
            <div className="relative px-5 md:px-20 md:ml-20 md:min-h-screen">
                <h2 className="text-7xl md:text-9xl select-none text-gray-700 tracking-wide font-extrabold md:rotate-[180deg] md:absolute md:left-[-20px] custom-writing-mode">PARTNER</h2>
                <ul className="flex gap-5 md:gap-10 my-10 md:my-20 md:pl-20 flex-wrap justify-center md:justify-start">
                    { partner.map((item) => {
                        const { id, image, title } = item;
                        return (
                            <li key={id} className="text-center flex align-middle shrink-0">
                                <Image src={'/images/logos/partner/' + image} width={150} height={50} alt={title} className="object-contain" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Slidein>
    )
}