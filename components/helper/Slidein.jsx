import { useEffect, useRef, useState } from "react";

export default function Benefits(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(domRef.current)
                }
            });
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }
  
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current)
            }
        };
    }, []);
  
    return (
      <div ref={ domRef } className={ `fade-in-section relative ${ isVisible ? 'is-visible' : '' }` }>
        { props.children }
      </div>
    )
}