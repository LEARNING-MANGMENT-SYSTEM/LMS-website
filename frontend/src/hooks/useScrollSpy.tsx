import { useEffect, useState, type RefObject } from "react";

export function useScrollSpy(
  refs: RefObject<HTMLDivElement | null>[],
  offset: number = 400
) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const throttleMs = 200;
  useEffect(() => {
    if (!refs.length) return;

    let lastCall = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCall < throttleMs) return;
      lastCall = now;

      let currentIndex = 0;
      const scrollPos = window.scrollY + offset;
        console.log(scrollPos)
        for (let i = 0; i < refs.length; i++) {
          console.log(refs[i]?.current?.id,refs[i]?.current?.offsetTop)
        }
        for (let i = 0; i < refs.length; i++) {
        const ref = refs[i]?.current;
        if (!ref) continue;

        const top = ref.offsetTop;
        if (scrollPos >= top) {
            currentIndex = i;
        } else {
            break;
        }
    }

      setActiveIndex((prev) => (prev !== currentIndex ? currentIndex : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs, offset]);

  return refs[activeIndex]?.current?.id;
}
