import { useEffect } from "react";

export class Animation {
  animateOnScroll(selector: string, animation: string, wrapper: string) {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target.querySelector(selector);
          if (entry.isIntersecting) {
            target.classList.add(animation);
            return;
          }
          target.classList.remove(animation);
        });
      });
      observer.observe(document.querySelector(wrapper));
    }, []);
  }

  animate(selector: string, animation: string) {
    useEffect(() => {
      const target = document.querySelector(selector);
      target.classList.add(animation);
      //target.classList.remove(animation);
    }, []);
  }
}
