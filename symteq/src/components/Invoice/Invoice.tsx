import { Calendar } from "react-calendar";
import "./Invoice.scss";
const Invoice = () => {
  return (
    <div className="invoice">
      <form className="invoice-form" action="">
        <div className="invoice-header">Invoice number: </div>
        <label htmlFor="select-user">Select user</label>
        <select name="select-user" id="select-user" required>
          <option value=""></option>
          <option value=""></option>
        </select>
        <div className="items-section">
          <label htmlFor="items">Select item</label>
          <select name="items" id="items" required>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <label htmlFor="quantity">Input quantity: </label>
          <input id="quantity" name="quantity" type="number" required />
          <div className="current-items-price">$</div>
        </div>
        <div className="finalizing-invoice">
          <div className="total-price">$</div>
          <div className="due-date-section">
            <div className="due-date">Due date: </div>
            <Calendar />
          </div>
          <button className="create-invoice-btn">Create invoice</button>
        </div>
      </form>
    </div>
  );
};

export default Invoice;
