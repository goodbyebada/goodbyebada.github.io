export interface WineInfo {
  name: string;
  img: string;
  price: number;
  descript: string;
}

export default function Card({ wine }: { wine: WineInfo }) {
  const { name, img, price, descript } = wine;

  return (
    <div>
      <h1>{name}</h1>
      {/* <img src={img} alt={name} /> */}
      <p>{price}$</p>
      <p>{descript}</p>

      <h2>hello</h2>
    </div>
  );
}
