import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  const navigateTo = useNavigate();
  const accordionPage = () => {
    navigateTo("/accordian");
  };
  const rgbhexcolorPage = () => {
    navigateTo("/rgbhexcolor");
  };

  return (
    <div className="wrapperHome">
      <div>
        <button onClick={accordionPage} className="btnHome">
          Accordion
        </button>
      </div>
      <div>
        <button
          onClick={rgbhexcolorPage}
          className="btn-grad btnHome"
          id="rgbhex"
        >
          RGB-HEX Color
        </button>
      </div>
    </div>
  );
}
