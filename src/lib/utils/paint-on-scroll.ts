export const paintOnScroll = (path: SVGPathElement) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = length.toString();
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scroll / height;
        path.style.strokeDashoffset = (length * (1 - progress)).toString();
    });
}