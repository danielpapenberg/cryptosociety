import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import amas from './data/amasData';

gsap.registerPlugin(ScrollTrigger);

function Amas() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            let sections = gsap.utils.toArray(".panel");

            gsap.to(sections, {
                xPercent: -50,
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
                <div className="panel h-screen w-[120vw] shrink-0">
                    <h2 className="absolute p-20 text-9xl select-none text-gray-700 tracking-wide font-extrabold rotate-[180deg] left-[-20px]" style={{ writingMode: 'vertical-rl' }}>AMAS</h2>
                    <div  className="translate-x-64 translate-y-10 flex flex-wrap">
                        { amas.map((item) => {
                            const { id, title, desc, image, link, date, hot } = item;
                            if (!hot) return;
                            return (
                                <a key={id} href={link} target='_blank' className="flex content-center justify-center h-[150px] m-2 shrink-0">
                                    <img src={image} className="w-100 rounded shrink-0" alt={title}/>
                                </a>
                            )
                        })}
                    </div>
                    <div className="absolute p-16 top-0 right-[-600px] content-center justify-center text-9xl underline select-none text-gray-700 tracking-wide font-extrabold"> 
                        <a href="">ALL<br/>
                        AMAS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amas