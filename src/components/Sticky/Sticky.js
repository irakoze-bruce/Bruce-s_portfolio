/** @format */

const [Sticky, setSticky] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    const topScroll = window.scrollY < 50;
    if (topScroll !== true) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
}, []);

<header className={Sticky ? "scrolled" : "nav"}></header>;
