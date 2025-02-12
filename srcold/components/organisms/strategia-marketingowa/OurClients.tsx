import Image from 'next/image';
import { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player/file';
import { ClientCarousel, CarouselContext } from './ClientCarousel';
import useOsClass from '@/components/molecules/useOsClass';

const SlideOne = () => {
  const { handleNext } = useContext(CarouselContext);
  const osClass = useOsClass();
  return (
    <>
      {/* Slide 1 */}
      <div className="OurClients_Slide">
        <div className="OurClients_Slide_Container">
          <div className="OurClients_Slide_Image">
            <Image
              src={'/assets/images/strategiamarketingowa/OurClientsImage1.jpeg'}
              alt="OurClientsImage1"
              width={190}
              height={275}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="OurClients_Slide_Content">
            <div className="OurClients_Slide_Title">
              Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę.{' '}
              <span className="YellowMarkSlide">Genialna robota.”</span>
            </div>
            <div className="OurClients_Slide_Media">
              <div className={`OurClients_Slide_Media_Video ${osClass}`}>
                <ReactPlayer
                  url={
                    '/assets/images/strategiamarketingowa/OurClientsVideo1.mp4'
                  }
                  playing
                  loop
                  width="60%"
                  height="auto"
                  muted={true}
                  playsinline
                />
              </div>
              <div className="OurClients_Slide_Media_Rating">
                <div>
                  <div className="OurClients_Slide_Star_Reviewer">
                    Agnieszka Marchewka
                  </div>
                  <div className="OurClients_Slide_Star_Company">
                    ubranka dziecięce
                  </div>
                </div>
                <div className="OurClients_Slide_Star_Rating">
                  <Image
                    src={'/assets/images/strategiamarketingowa/starrating.avif'}
                    alt="starrating"
                    width={75}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OurClients_Slide_Button">
          <div className="OurClients_Slide_Button_Text">Następna</div>
          <div className="ArrowButton" onClick={handleNext}>
            <span className="ArrowButton_Arrow">&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};
const SlideTwo = () => {
  const { handleNext } = useContext(CarouselContext);
  const osClass = useOsClass();
  return (
    <>
      {/* Slide 2 */}
      <div className="OurClients_Slide">
        <div className="OurClients_Slide_Container">
          <div className="OurClients_Slide_Image">
            <Image
              src={'/assets/images/strategiamarketingowa/OurClientsImage2.png'}
              alt="OurClientsImage2"
              width={190}
              height={275}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="OurClients_Slide_Content">
            <div className="OurClients_Slide_Title">
              Na mobilną jadłodajnię postawiłem oszczędności. Owocni nie mieli
              wyjścia,{' '}
              <span className="YellowMarkSlide">to musiało się nam udać.</span>
            </div>
            <div className="OurClients_Slide_Media">
              <div className={`OurClients_Slide_Media_Video ${osClass}`}>
                <ReactPlayer
                  url={
                    '/assets/images/strategiamarketingowa/OurClientsVideo2.mp4'
                  }
                  playing
                  loop
                  width="60%"
                  height="auto"
                  muted={true}
                  playsinline
                />
              </div>
              <div className="OurClients_Slide_Media_Rating">
                <div>
                  <div className="OurClients_Slide_Star_Reviewer">
                    Piotr Parol
                  </div>
                  <div className="OurClients_Slide_Star_Company">
                    trójmiejski food truck
                  </div>
                </div>
                <div className="OurClients_Slide_Star_Rating">
                  <Image
                    src={'/assets/images/strategiamarketingowa/starrating.avif'}
                    alt="starrating"
                    width={75}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OurClients_Slide_Button">
          <div className="OurClients_Slide_Button_Text">Następna</div>
          <div className="ArrowButton" onClick={handleNext}>
            <span className="ArrowButton_Arrow">&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};
const SlideThree = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      {/* Slide 3 */}
      <div className="OurClients_Slide">
        <div className="OurClients_Slide_Container">
          <div className="OurClients_Slide_Image">
            <Image
              src={'/assets/images/strategiamarketingowa/OurClientsImage3.png'}
              alt="OurClientsImage3"
              width={190}
              height={275}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="OurClients_Slide_Content">
            <div className="OurClients_Slide_Title">
              Całe szczęście, że zdecydowałem się na zmianę agencji. To jest
              <span className="YellowMarkSlide">
                zupełnie inna współpraca.”
              </span>
            </div>
            <div className="OurClients_Slide_Media">
              <div className="OurClients_Slide_Media_Video">
                <Image
                  src={
                    '/assets/images/strategiamarketingowa/OurClientsVideo3.avif'
                  }
                  alt="OurClientsVideo3"
                  width={241 * 0.5}
                  height={34 * 0.5}
                  style={{ marginRight: '70px' }}
                />
              </div>
              <div className="OurClients_Slide_Media_Rating">
                <div>
                  <div className="OurClients_Slide_Star_Reviewer">
                    Przemek Majewski
                  </div>
                  <div className="OurClients_Slide_Star_Company">
                    Software house
                  </div>
                </div>
                <div className="OurClients_Slide_Star_Rating">
                  <Image
                    src={'/assets/images/strategiamarketingowa/starrating.avif'}
                    alt="starrating"
                    width={75}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OurClients_Slide_Button">
          <div className="OurClients_Slide_Button_Text">Następna</div>
          <div className="ArrowButton" onClick={handleNext}>
            <span className="ArrowButton_Arrow">&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
};
const SlideFour = () => {
  const { handleNext } = useContext(CarouselContext);
  return (
    <>
      {/* Slide 4 */}
      <div className="OurClients_Slide_Last">
        <div className="OurClients_Card_One_Title">
          20 lat pracy. Tysiące <span className="YellowMark">zadowolonych</span>{' '}
          klientów
        </div>
        <div className="OurClients_Card_One_Content">
          Międzynarodowe korporacje. Lokalni przedsiębiorcy. Instytucje
          publiczne.
        </div>
        <div className="OurClients_Card_One_Button_Container">
          <button className="OurClients_Card_One_Button">
            Poznaj wszystkie recenzje
          </button>
        </div>
      </div>
    </>
  );
};

export default function OurClients() {
  const slides = [SlideOne, SlideTwo, SlideThree, SlideFour];

  return (
    <div className="OurClients content">
      {/* <div className="OurClients_Title">
        Pozwól naszym klientom opowiedzieć Ci o współpracy z nami
      </div> */}
      <div className="OurClients_Marquee full">
        {/* Marquee 1 */}
        <Marquee autoFill speed={175}>
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_1.png'
            }
            alt="Marquee_One_1"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_2.png'
            }
            alt="Marquee_One_2"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_3.png'
            }
            alt="Marquee_One_3"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_4.png'
            }
            alt="Marquee_One_4"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_5.png'
            }
            alt="Marquee_One_5"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_6.png'
            }
            alt="Marquee_One_6"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_7.png'
            }
            alt="Marquee_One_7"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_One_8.png'
            }
            alt="Marquee_One_8"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
        </Marquee>
        {/* Marquee 2 */}
        <Marquee autoFill speed={100}>
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_1.png'
            }
            alt="Marquee_Two_1"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_2.png'
            }
            alt="Marquee_Two_2"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_3.png'
            }
            alt="Marquee_Two_3"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_4.png'
            }
            alt="Marquee_Two_4"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_5.png'
            }
            alt="Marquee_Two_5"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_6.png'
            }
            alt="Marquee_Two_6"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Two_7.png'
            }
            alt="Marquee_Two_7"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
        </Marquee>
        {/* Marquee 3 */}
        <Marquee autoFill speed={100}>
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_1.png'
            }
            alt="Marquee_Three_1"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_2.png'
            }
            alt="Marquee_Three_2"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_3.png'
            }
            alt="Marquee_Three_3"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_4.png'
            }
            alt="Marquee_Three_4"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_5.png'
            }
            alt="Marquee_Three_5"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_6.png'
            }
            alt="Marquee_Three_6"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Three_7.png'
            }
            alt="Marquee_Three_7"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
        </Marquee>
        {/* Marquee 4 */}
        <Marquee autoFill speed={150}>
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Four_1.png'
            }
            alt="Marquee_Four_1"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Four_2.png'
            }
            alt="Marquee_Four_2"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Four_3.png'
            }
            alt="Marquee_Four_3"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
          <Image
            src={
              '/assets/images/strategiamarketingowa/marquee/Marquee_Four_4.png'
            }
            alt="Marquee_Four_4"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '50%',
              height: '50%',
              filter: 'grayscale(100%)',
              opacity: '0.5',
            }}
          />
        </Marquee>
      </div>
      <div className="OurClients_Card_Container popout">
        <div className="OurClients_Card_One">
          <ClientCarousel slides={slides} />
        </div>
        <div className="OurClients_Card_Two">
          <div>
            <Image
              src={'/assets/images/strategiamarketingowa/OurClientsImage.svg'}
              alt="OurClientsImage"
              width={250}
              height={180}
            />
          </div>
          <div className="OurClients_Card_Two_Content">
            Amerykańska agencja ratingowa “Rating Capitan” plasuje nas w swoim
            raporcie w gronie{' '}
            <span className="YelloMarkReverse">10 najlepszych agencji</span> w
            Polsce. (Na podstawie realnych opinii)
          </div>
        </div>
      </div>
    </div>
  );
}
