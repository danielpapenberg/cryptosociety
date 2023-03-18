import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import amas from './data/amasData';
import { useDeviceSelectors } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

function Amas() {
    useEffect(() => {
        const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
        const { isMobile } = selectors;
        let ctx = gsap.context(() => {
            let sections = gsap.utils.toArray(".panel");
            gsap.to(sections, {
                xPercent: isMobile ? -80 : -30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".panel-wrapper",
                    start: "top top",
                    pin: true,
                    scrub: 1,
                    end: '+=3000'
                }
            });
        });

        return () => ctx.revert();
    });

    return (
        <div>
            <div className="panel-wrapper flex flex-nowrap h-screen bg-neutral-400">
                <div className="panel h-screen w-[300vw] md:w-[120vw] shrink-0">
                    <h2 className="absolute p-5 md:p-20 text-7xl md:text-9xl select-none text-gray-700 tracking-wide font-extrabold rotate-[180deg] left-[-20px]" style={{ writingMode: 'vertical-rl' }}>AMAS</h2>
                    <div  className="translate-x-20 md:translate-x-64 translate-y-5 md:translate-y-10 flex flex-wrap">
                        { amas.map((item) => {
                            const { id, title, desc, image, link, date, hot } = item;
                            if (!hot) return;
                            return (
                                <a key={id} href={link} target='_blank' className="flex content-center justify-center h-[100px] md:h-[150px] m-2 shrink-0">
                                    <img src={image} className="w-66 md:w-100 rounded shrink-0" alt={title}/>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amas