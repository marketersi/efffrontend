import React from 'react'
import { useSelector } from 'react-redux';

const Orange = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects} = screenData || {};
  const {projectSection1 } = projects || {};

  return (
    <>
<section className="thematic-section-orange" id='sec2' >
        <div className="copywriter-orange-bg" style={{
  backgroundImage: `url(${projectSection1?.background_image})`
}}>
        </div>
        <div className="copywriter-text-center">
          <img
            src={projectSection1?.title_image}
            title="Copywriting to sposób na zainteresowanie grupy docelowej"
            alt="Oprawa graficzna firmy"
          />
        </div>
        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name  copywriter-green-underline copywriter-white-text copywriter-cname">
                {projectSection1?.mid_text}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin copywriter-custom-mright-3 copywriter-white-text">
                {projectSection1?.description}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc copywriter-custom-mright copywriter-orange-black-text">
                {projectSection1?.para_1}
              </p>
            </div>
          </div>
        </div>
        <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-rwd-mtb-40">
          <img
            src={projectSection1?.product_bannar_img}
            title="Copywriter cennik usług kreowania haseł reklamowych dla małych i średnich firm"
            alt="Pomożemy Ci sprostać wyzwaniu marketingowemu, jakim jest własna firma "
          />
        </div>
        <div className="copywriter-text-center copywriter-standard-mt-40 copywriter-rwd-mtb-40">
          <img
            src={projectSection1?.product_desc_img}
            title="Z nami pisanie oferty reklamowej jest proste"
            alt="Usługi copywriterskie na wysokim poziomie"
          />
        </div>
        <div className="copywriter-text-center">
          <img
            className="copywriter-seo-img"
            src={projectSection1?.footer_image}
            title="Copywriting cena przygotowania tekstów reklamowych"
            alt="Hasło reklamowe Hurum, które przyciągnie potencjalnych klientów"
          />
        </div>
      </section>
    </>
  )
}

export default Orange