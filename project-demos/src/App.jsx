import Counter from "./Counter";
import Todos from "./Todos";
import Meals from "./Meals";
import Calculator from "./Calculator";
import HiddenSearch from "./HiddenSearch";
import Testimonials from "./Testimonials";
import ToggleBackgroundColor from "./ToggleBackgroundColor";
import { accordianData } from "./content";
import Accordian from "./Accordian";
function App() {
  return (
    <>
      {accordianData.map(({ id, title, content }) => (
        <Accordian id={id} title={title} content={content} />
      ))}
    </>
  );
}
export default App;
