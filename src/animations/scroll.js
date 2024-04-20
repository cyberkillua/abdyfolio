import Lenis from "@studio-freight/lenis";

export default function scroll() {
    const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        infinite: false,
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
