import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Warranty = () => {
  const { isLoading, screenData } = useSelector((state) => state.calculator);
  const { warranty } = screenData;

  const router = useRouter();
  console.log('react-routerrr')

  const navigateToPriceListStrony = () => {
    router.push("/cennik?type=Strone");
  };

  return (
    <>
      <section className="warranty">
      <h2>
  {warranty?.title?.split(' ').slice(0, 1).join(' ')} <br />
  {warranty?.title?.split(' ').slice(1).join(' ')}
</h2>

        <div className="warranty_card">
          <div className="warranty_card_content">
          
           {/* <h3>{warranty?.card?.title}</h3>  */}
            <h3>Skuteczniejsza strona, albo <br />100% zwrotu pieniędzy!</h3>

            {/* <p>{warranty?.card?.subtitle}</p>  */}
            <p>Wiemy, co działa, dlatego <br />bez wahania dajemy Ci <br />solidną gwarancję.</p>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateToPriceListStrony();
              }}
              href="#"
            >
              {warranty?.card?.buttonText}
            </a>
          </div>
          <div className="warranty_card_img">
            <img src={warranty?.card?.image} alt="vb"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Warranty;
