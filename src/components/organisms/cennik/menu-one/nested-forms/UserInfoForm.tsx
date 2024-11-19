import { SUBMIT_MENU_STOR_FORM } from "@/redux/cennik/pricelistAction";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfoForm = ({ formFour }) => {
  const { formData, isMenuSubmitSuccess } = useSelector(
    (state) => state.priceList
  );
  // const { formFour } = screenData?.cardMenu?.menuOne || "";
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    const payload = {
      type: 1,
      tbl_firstpricecard_dropdwonoption_id: formData.formZeroDropdownValueOne,
      tbl_first_price_range_id: formData.formOneSelectedRangeValue,
      section3_textarea: formData.formTwoTextAreaValue,
      section3_inputbox: formData.formTwoInputValue,
      section4_name: name,
      section4_email: email,
      section4_phone: phone,
    };

    if (name && email && phone) {
      dispatch({ type: SUBMIT_MENU_STOR_FORM, payload });
      setName("");
      setEmail("");
      setPhone("");
    } else {
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (isMenuSubmitSuccess) {
      router.push("/dziekujemy");
      dispatch(clearPriceListFormData());
    }
  }, [isMenuSubmitSuccess]);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="user-details_section">
      <form onSubmit={handleSubmit}>
        <h2
          className={
            isButtonClicked && (!name || !email || !phone) ? "red-title" : ""
          }
        >
          {formFour?.section4_title}
        </h2>
        <p
          className={
            `"mt-4 mb-4"  ${isButtonClicked && (!name || !email || !phone) ? "red-title" : ""}`
          }
        >
          {formFour?.section4_subtitle}
        </p>
        <div className="uds_input-container">
          <input
            type="text"
            placeholder="Imię:"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: name && "#effeeb",
              outline: name && "1px solid #effeeb",
            }}
          />
          <input
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: email && isValidEmail(email) ? "#effeeb" : "",
              outline: email && isValidEmail(email) ? "1px solid #effeeb" : "",
            }}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
          <input
            type="text"
            placeholder="Nr. telefonu: (opcjonalnie)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="cennikBtn form4Btn">
            <span>{formFour?.section4_buttonText}</span>
          </button>
        </div>
      </form>
      <div className="contact">
        <h5>{formFour?.contact?.contact_title}</h5>
        <p>{formFour?.contact?.contact_info}</p>

        <img src={formFour?.contact?.contact_image} alt="" />
        <div className="whiteBox"></div>
        <h5>{formFour?.contact?.contact_contactText}</h5>
        <a href="tel:+48660970980">{formFour?.contact?.contact_tel}</a>
      </div>
    </div>
  );
};

export default UserInfoForm;
