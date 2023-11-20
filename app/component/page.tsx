import Card from "./card";

export default function fuckingJS() {
  const list = {
    name: "wineName",
    img: "img정보",
    price: 100000,
    descript: "wineDescription",
  };

  return (
    <div>
      <h2>
        <Card wine={list} />
      </h2>
    </div>
  );
}
