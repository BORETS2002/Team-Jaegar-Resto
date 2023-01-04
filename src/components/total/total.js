import { Dollir, People, Stap, Up, Zametka } from "../../assets/icons/Icons";
import "./total.scss";

export function Total() {
  return (
    <>
      <div className='d-flex '>
        <div className='total-item-box'>
          <div className='d-flex align-items-center'>
            <Dollir />
            <span className='price-dolor'>+32.40%</span>
            <Up />
          </div>
          <span className='prise__big-dollor'>$10,243.00</span>
          <span className='total-text'>Total Revenue</span>
        </div>

        <div className='total-item-box'>
          <div className='d-flex align-items-center'>
            <Zametka />
            <span className='price-dolor color-dollor-mini'>-12.40%</span>
            <Stap />
          </div>
          <span className='prise__big-dollor'>23,456</span>
          <span className='total-text'>Total Dish Ordered</span>
        </div>

        <div className='total-item-box m-0'>
          <div className='d-flex align-items-center'>
            <People />
            <span className='price-dolor'>+2.40%</span>
            <Up />
          </div>
          <span className='prise__big-dollor'>1,234</span>
          <span className='total-text'> Total Customer </span>
        </div>
      </div>
    </>
  );
}
