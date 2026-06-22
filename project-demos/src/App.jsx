import Counter from "./Counter";
import Todos from "./Todos";
import Meals from "./Meals";
import Calculator from "./Calculator";
import HiddenSearch from "./HiddenSearch";
import Testimonials from "./Testimonials";
import ToggleBackgroundColor from "./ToggleBackgroundColor";
import { accordionData } from "./content";
import Accordion from "./Accordion";
import Forms from "./Forms";
function App() {
  return (
    <>
      {/* <Todos /> */}
      {/* <Calculator /> */}
      {/* <HiddenSearch /> */}
      {/* <Meals /> */}
      {/* <Testimonials /> */}
      {/* <ToggleBackgroundColor/> */}
      {/* {accordionData.map((data) => (
        <Accordion id={data.id} title={data.title} content={data.content} />
      ))} */}
      <Counter />
      {/* <Forms /> */}
    </>
  );
}
export default App;
