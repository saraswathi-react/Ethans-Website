import React, { useEffect, useState } from 'react'
import { BottomTop } from './Style'
import { FaArrowUp } from 'react-icons/fa'

const BacktoTopPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <BottomTop  onClick={scrollToTop} ><FaArrowUp /></BottomTop>
    )
}

export default BacktoTopPage