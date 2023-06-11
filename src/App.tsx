import "./styles.css";
import useMediaQuery from "./useOrientation";

export default function App() {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log(isMobile, isTablet);
  return (
    <div className="App">
      {isMobile ? (
        <div>It's a Mobile</div>
      ) : isTablet ? (
        <div>Its a Tablet</div>
      ) : (
        <div>Its a desktop</div>
      )}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
