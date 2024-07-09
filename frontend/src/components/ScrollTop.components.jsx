import { Link,useNavigate } from "react-router-dom";

const ScrollToTopLink = ({ to, children }) => {
    const navigate = useNavigate();
  
    const handleClick = (e) => {
      e.preventDefault();
      navigate(to);
      window.scrollTo(0, 0);
    };
  
    return (
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    );
  };

export default ScrollToTopLink;