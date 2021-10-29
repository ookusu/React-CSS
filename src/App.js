import { CssModules } from "./conpornents/CssModules";
import { InlineStyle } from "./conpornents/InlineStyle";
import { StyledJsx } from "./conpornents/StyledJsx";
import { StyleCompornent } from "./conpornents/StyledCompornent";
import "./styles.css";
import { Emotion } from "./conpornents/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyleCompornent />
      <Emotion />
    </div>
  );
}
