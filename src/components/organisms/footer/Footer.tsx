import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className={style.footer}>
        <Container fluid>
          <div className={style.footerRow}>
            <div className={style.footerCol}>
              <div className={style.footerLogo}>
                <Image
                  src="https://images.prismic.io/marketersi/Zn0rnpbWFbowe74p_Marketersi-logo.png?auto=format,compress"
                  alt="My Image"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className={style.footerBrandLogo}>
                <Image
                  src="https://images.prismic.io/marketersi/ZvEEw7VsGrYSvqPY_Footer-brand-logo.png?auto=format,compress"
                  alt="My Image"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div className={style.footerCol}>
              <Row className="mb-sm-5">
                <Col sm={4} xs={6}>
                  <div className={style.footerRightMenu}>
                    <h3>BĄDŹ widoczny</h3>
                    <Link href="/tworzenie-stron-i-design-ux">
                      Tworzenie stron i design UX
                    </Link>
                    <Link href="/video-marketing">
                      {" "}
                      Video marketing
                    </Link>
                    <Link href="/kreatywny-montaz-wideo">
                      Kreatywny montaż wideo
                    </Link>
                  </div>
                </Col>
                <Col sm={4} xs={6}>
                  <div
                    className={`${style.footerRightMenu} ${style.mobileRightMenu}`}
                  >
                    <h3>ZOSTAŃ zapamiętany</h3>
                    <Link href="/tresci-i-hasla-sprzedazowe">
                      Treści i hasła sprzedażowe
                    </Link>
                    <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
                    <Link href="/projektowanie-logo">Projektowanie logo</Link>
                  </div>
                </Col>
                <Col sm={4} xs={6}>
                  <div className={style.footerRightMenu}>
                    <h3>ODBLOKUJ zyski</h3>
                    <Link href="/strategia-marketingowa">
                      Strategia marketingowa
                    </Link>
                    <Link href="/konsultacja-marketingu">Konsultacja marketingu</Link>
                    <Link href="/">Marketing międzynarodowy</Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>
                  <div className={style.footerRightMenu}>
                    <h3>Marketersi</h3>
                    <div className={style.footerCennik}>
                      <Link href="/Kim-jestesmy">Kim jesteśmy?</Link>
                      <Link href="/kontakt-marketersi">Kontakt</Link>
                      <Link href="/cennik" className={style.CennikBrn}>
                        Cennik
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col sm={9}>
                  <div className={style.footerRightMenu}>
                    <h3>Przydatne rzeczy</h3>
                    <Link href="/policz-czy-ci-sie-to-oplaca">
                      Policz czy Ci się to opłaca?
                    </Link>
                    <Link href="/zamow-bezplatne-badanie">Zamów bezpłatne badanie</Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className={style.copyright}>
            <div className={style.copyrightText}>
              <p>
                &copy; {currentYear} - marketersi.pl | Marketing, który działa! Regulamin | Polityka prywatności
              </p>
            </div>
            {/* <div className={style.copyrightMenu}>
              <p>
                <Link href="/#">Regulamin |</Link>
                <Link href="/#"> Polityka prywatnosci </Link>
              </p>
            </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
