import { useSelector } from "react-redux";

export default function InviteCustomer() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const {quoteOne } = screenData;

  return (
    <div className="InviteCustomer content">
      <div className="InviteCustomer_Title feature">
        {quoteOne?.title}
      </div>
      <div className="InviteCustomer_Content">
        {quoteOne?.description}
      </div>
    </div>
  );
}
