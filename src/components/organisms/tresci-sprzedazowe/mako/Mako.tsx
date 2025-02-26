import React from 'react';
import '../tresci.css';
import { useSelector } from 'react-redux';

const Mako = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection7 } = projects || {};

  return (
    <>
      <section className="thematic-section">
        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        /> */}

        {/* <div className="copywriter-text-center copywriter-standard-mt-80">
          <img
            src={projectSection7?.logo_image}
            title="Copywriting cennik i przykłady stworzonych haseł"
            alt="Marketing Owocnych zrealizowane przykłady"
          />
        </div> */}

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname uppercase">
              Piaseczno
              </div>

              <div className="names-client-desc name-client-text-2 copywriter-client-desc-margin">
              Luksus w słowach: Jak „Rytuał Urody” podbił serca klientek?
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc copywriter-custom-mright mobileLefttext">
              Pani Kamila pragnęła, by jej salon wyróżniał się na tle konkurencji jako miejsce, gdzie elegancja spotyka się z perfekcją. Powierzyła nam misję stworzenia tekstów, które nie tylko opiszą usługi, ale staną się ich przedłużeniem – pełnym luksusu i niezapomnianych emocji. Efekt? Wyjątkowe treści, które podkreśliły prestiż marki, przyciągnęły nowe klientki i na nowo zdefiniowały pojęcie holistycznego piękna. Rytuał Urody stał się nie tylko salonem, ale symbolem doświadczenia, które pozostaje w pamięci na długo.
              </p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mt-80 copywriter-standard-mb-140">
          <img
            className="copywriter-seo-img lingu"
            src={projectSection7?.bannar_image_1}
            title="W jaki sposób copywriter pracuje nad hasłem reklamowym"
            alt="Przykłady warsztatu pracy copywritera "
          />
        </div>

        {/* <div className="copywriter-border-870">
          <span className="copywriter-custom-text-3 text-center">
            {projectSection7?.text_btwn_borders}
          </span>
        </div> */}

        <div className="container custom-container2 copywriter-after-img-2">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="copywriter-custom-text-4 turbokids-text-1 text-center">
              Rytuał Urody — luksus, który czuje się w każdej chwili.
              </div>
              {/* <div className="copywriter-custom-subtext-4">
                {projectSection7?.info}
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-80">
          <img
            src={projectSection7?.divider_image}
            title=""
            alt=""
          />
        </div> */}

        <div className="copywriter-custom-header-3 text-center copywriter-rwd-mtb-40 turbokids-text-2">
          {/* {projectSection7?.bannar_img_title_2} */}
          Daj sobie chwilę, która podkreśli to, co w Tobie najpiękniejsze.
        </div>

        {/* <div className="copywriter-text-center copywriter-standard-mtb-40">
          <img
            src={projectSection7?.bannar_image_2}
            title="Skuteczność to podstawa jeśli chodzi o usługi copywriterskie"
            alt="Przykład hasła reklamowego dla firmy"
          />
        </div>

        <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-140 mako-big-img">
          <img
            src={projectSection7?.bckgrnd_image_2}
            className="copywriter-seo-img-dnone"
            title="Tworzenie haseł reklamowych na przykładzie Mako"
            alt="Przykłądowa realizacja agencji Owocni"
          />
        </div> */}

        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-rotate-bow projects-bow-1"
          alt=""
        /> */}
      </section>
    </>
  );
};

export default Mako;
