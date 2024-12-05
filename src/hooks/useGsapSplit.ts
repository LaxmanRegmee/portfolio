import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export function useGsapSplit(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    const text = new SplitType(ref.current, { types: 'chars' });
    const chars = text.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
    });

    return () => {
      text.revert();
    };
  }, []);
}