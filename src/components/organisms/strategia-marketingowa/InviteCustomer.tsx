import { useSelector } from "react-redux";

export default function InviteCustomer() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { quoteOne } = screenData;

  return (
    <>
      <div className="InviteCustomer_Title feature">
        Jaką perspektywę <br /> zyskują klienci, <br /> gdy wchodzą <br/> w interakcję <br/>
        z Twoją marką?
      </div>
      <div className="InviteCustomer WidthContent">
        <div className="InviteCustomer_Content">{quoteOne?.description}</div>
      </div>
    </>
  );
}
