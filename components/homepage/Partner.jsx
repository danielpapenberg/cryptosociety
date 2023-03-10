import Slidein from "../helper/Slidein.jsx";
import Image from 'next/image';
import partner from './data/partnerData';

export default function Partner() {
    return (
        <Slidein>
            <div className="relative px-20 ml-20 min-h-screen">
                <h2 className="text-9xl select-none text-gray-700 tracking-wide font-extrabold rotate-[180deg] absolute left-[-20px]" style={{ writingMode: 'vertical-rl' }}>PARTNER</h2>
                <ul className="flex gap-10 my-20 pl-20 flex-wrap">
                    { partner.map((item) => {
                        const { id, image, title } = item;
                        return (
                            <li key={id} className="text-center flex align-middle shrink-0">
                                <Image src={'/images/logos/partner/' + image} width={150} height={50} alt={title} className="object-contain" />
                                <span className="invisible">{title}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Slidein>
    )
}