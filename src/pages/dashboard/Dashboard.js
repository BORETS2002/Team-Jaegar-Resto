import Fotos from "../../assets/imgs/Avatar.png";
import { TableHeader } from "../../components/tablListHaeder/tabl";
import { Total } from "../../components/total/total";
import "./Dashboard.scss";

export function Dashboard() {
  const DataMean = [
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },

    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
    {
      img: Fotos,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      prise: "$125",
      status: "Completed",
    },
  ];
  return (
    <>
      <header className='Dashboard__Header'>
        <h2 className='Dashboard__text'>Dashboard</h2>
        <span className='Dashboard__data'>Tuesday 2 Feb, 2021</span>
      </header>
      <div className='Dashboard__main'>
        <Total />
        <TableHeader />
        <ul className='dashbord-list list-unstyled '>
          {DataMean.map((item) => {
            return (
              <>
                <li className='dashbord-item'>
                  <span className='img-box-dashboard'>
                    <img
                      className='dashboard__main-img'
                      src={item.img}
                      alt={item.name}
                    />
                    <span className='dashboard__main-name text-white'>
                      {item.name}
                    </span>
                  </span>
                  <span className='men-box'>
                    <span className='dashboard__main-menu text-white'>
                      {item.menu}
                    </span>
                  </span>
                  <span className='dashboard__main-menu text-white'>
                    {item.prise}
                  </span>
                  <span className='dashboard__main-status text-white'>
                    {item.status}
                  </span>
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
