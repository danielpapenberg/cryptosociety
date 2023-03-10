import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useDeviceSelectors } from 'react-device-detect';
import PrimaryButton from '/components/helper/PrimaryButton';

gsap.registerPlugin(ScrollTrigger);

export default function Moon() {
    useEffect(() => {
        const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
        const { isMobile } = selectors;
        const moonCanvas = document.querySelector(".moonCanvas");
        if (!moonCanvas) {
            return;
        }
        const context = moonCanvas.getContext("2d");
        const images = [];
        let moon = { frame: 0 };

        if (isMobile !== true) {
            var frameCount  = 100;
            const currentFrame = (index) => `/images/3D/Moon/${(index + 1).toString().padStart(4, '0')}.jpg`;
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                images.push(img);
            }
        }

        const windowHeight = window.innerHeight;

        let ctx = gsap.context(() => {
            gsap.to(moon, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    pin: "canvas",
                    end: windowHeight*5,
                    scrub: 1
                },
                onUpdate: render
            });
            

            gsap.fromTo(".social", {
                opacity: 1,
                display: 'block'
            }, {
                opacity: 0,
                display: 'none',
                scrollTrigger: {
                    scrub: 0,
                    end: 1,
                    
                }
            });

            gsap.fromTo(".introText", {
                opacity: 0,
                display: 'block'
            }, {
                opacity: 1,
                display: 'none',
                scrollTrigger: {
                    scrub: 0,
                    end: windowHeight,
                }
            });

            gsap.fromTo(".benefit1", {
                opacity: 0,
                display: 'block'
            }, {
                opacity: 1,
                display: 'none',
                scrollTrigger: {
                    scrub: 0,
                    start: windowHeight,
                    end: windowHeight*2,
                }
            });

            gsap.fromTo(".benefit2", {
                opacity: 0,
                display: 'block',
            }, {
                duration: 5,
                opacity: 1,
                display: 'none',
                scrollTrigger: {
                    scrub: 0,
                    start: windowHeight*2,
                    end: windowHeight*3,
                }
            });

            gsap.fromTo(".benefit3", {
                opacity: 0,
                display: 'block',
            }, {
                opacity: 1,
                display: 'none',
                scrollTrigger: {
                    scrub: 0,
                    start: windowHeight*3,
                    end: windowHeight*4.2,
                }
            });
        });


        if (isMobile !== true) {
            images[0].onload = render;
        }

        function render() {
            if (isMobile) {
                return
            }
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;
            context.clearRect(0, 0, moonCanvas.width, moonCanvas.height);
            context.drawImage(images[moon.frame], 0, 0);
        }

        return () => ctx.revert();
    });

    return (
        <div className="min-h-screen overflow-hidden">
            <canvas className="moonCanvas overflow-hidden h-screen invisible md:visible md:h-auto md:w-screen aspect-[1920/1080]"></canvas>

            <div className="social z-10 fixed top-[30%] md:top-[40%] left-[5%] md:w-2/3 pr-5">
                <h2 className="text-6xl md:text-9xl mb-5 text-white-300 tracking-wide font-bold text-blue-300">JOIN US</h2>
                <div className="flex gap-10">
                    <PrimaryButton onClick={() => { window.open('https://t.me/cryptosocietyy') }} type="dark">TELEGRAM <FaTelegramPlane /></PrimaryButton>
                    <PrimaryButton onClick={() => { window.open('https://twitter.com/cryptosocietytg') }} type="dark">TWITTER <FaTwitter /></PrimaryButton>
                </div>
                <div class="scroll-down">
                    <div class="mousey">
                        <div class="scroller"></div>
                    </div>
                </div>
            </div>

            <h2 className="introText fixed text-4xl md:text-[24px] left-[5%] top-[30%] md:top-[40%] md:w-1/2 opacity-0 pr-5 select-none">
                Crypto Society is a group of enthusiasts set up <strong className="text-blue-300">by the people for the people</strong>.<br />
                We aim to inform on all matters crypto by sharing our research to passionate members
                who are encouraged to <strong className="text-blue-300">learn and share</strong> themselves.
            </h2>

            <div className="benefit1 fixed left-[5%] top-[30%] md:top-[40%] md:w-1/2 opacity-0 pr-5 select-none">
                <h2 className="text-6xl md:text-9xl mb-5 text-blue-300 tracking-wide font-bold">LEARN</h2>
                <p className="text-2xl tracking-wide font-light">We bring awareness of the latest ground-breaking crypto projects to our community, including hosting regular AMA’s and live TA Market Overviews, thus teaching how to research and apply trading and hodling strategies.</p>
            </div>

            <div className="benefit2 fixed left-[5%] top-[30%] md:top-[40%] md:w-1/2 opacity-0 pr-5 select-none">
                <h2 className="text-6xl md:text-9xl mb-5 text-blue-300 tracking-wide font-bold">APPLY</h2>
                <p className="text-2xl tracking-wide font-light">With this applied learning the group is encouraged to research and share their findings with our members, actively getting involved, effectively benefitting the entire community.</p>
            </div>

            <div className="benefit3 fixed left-[5%] top-[30%] md:top-[40%] md:w-1/2 opacity-0 pr-5 select-none">
                <h3 className="text-6xl md:text-9xl mb-5 text-blue-300 tracking-wide font-bold">SUCCEED</h3>
                <p className="text-2xl tracking-wide font-light">Crypto is a bumpy road but with so many eyes and ears actively contributing we regularly (and) successfully recognize great buying opportunities that ultimately lead to a lucrative investment.</p>
            </div>
           
        </div>
    );
}
  