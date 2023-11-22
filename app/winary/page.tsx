import Home from "../page";
import { ParamsInterface } from "../page";

export default function Winary() {
  const content = <h1>About Winary</h1>;

  return <Home params={content} />;
}
