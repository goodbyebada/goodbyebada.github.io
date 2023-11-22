import Home from "../page";
import { ParamsInterface } from "../page";
export default function Aritcle() {
  const content = <h1>About Aritcle</h1>;

  return <Home params={content} />;
}
