import "./tabl.scss";
export function TableHeader() {
  return (
    <>
      <div className='table__boss'>
        <div className='table-header'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='order-title'>Order Report</h2>
            <span className='filter-Order'>Filter Order</span>
          </div>
          <div className='mini-header-texts'>
            <span className='mini-header-text'>Customer</span>
            <span className='mini-header-text '>Menu</span>
            <span className='mini-header-text mar-twoo'>Total Payment</span>
            <span className='mini-header-text mar-one'>Status</span>
          </div>
        </div>
      </div>
      <div className='Table-main'>
        <div></div>
      </div>
    </>
  );
}
