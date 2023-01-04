import "./home.scss";
import Img from "../../assets/imgs/image.png";
import { Header } from "../header/Header";
export function HomeReact() {
  const obj = [
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
    {
      img: "/src/assets/imgs/image.png",
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      bowls: "20 Bowls available",
    },
  ];

  return (
    <>
      <Header />

      <div className='box__Change-select mb-2'>
        <h3 className='text-white Choose__Dishes '>Choose Dishes</h3>
        <select className='Select-input'>
          <option value='Dine In'>Dine In</option>
          <option value='Dine In'>Dine In</option>
          <option value='Dine In'>Dine In</option>
          <option value='Dine In'>Dine In</option>
        </select>
      </div>
      <div className='Boss-food'>
        <ul className='food__list'>
          {obj.map((item) => {
            return (
              <>
                <li className='text-white food__item'>
                  <img className='food__img' src={Img} alt={item.name} />
                  <p className='food__name'>{item.name}</p>
                  <span className='mb-1 food__prace'>{item.price}</span>
                  <span className='food__bowls'>{item.bowls}</span>
                </li>
                ;
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
