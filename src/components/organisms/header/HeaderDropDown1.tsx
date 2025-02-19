import React from "react";
import { Container, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import Link from "next/link";

const HeaderDropDown1 = () => {
  return (
    <div>
      <div className={style.headerDrop1}>
        <Container>
          <Row>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>BĄDŹ widoczny</h3>
                <Link href="/tworzenie-stron-i-design-ux">
                  Tworzenie stron i design UX
                </Link>
                <Link href="/video-marketing">
                  Video marketing
                </Link>
                <Link href="/kreatywny-montaz-wideo">
                  Kreatywny montaż wideo
                </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>ZOSTAŃ zapamiętany</h3>
                <Link href="/tresci-i-hasla-sprzedazowe">
                  Treści i hasła sprzedażowe
                </Link>
                <Link href="/projektowanie-logo">Projektowanie logo</Link>
                <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>ODBLOKUJ zyski</h3>
                <Link href="/strategia-marketingowa">
                  Strategia marketingowa
                </Link>
                <Link href="/konsultacja-marketingu">Konsultacja marketingu</Link>
                <Link href="/">Marketing międzynarodowy</Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Wydajny marketing</h3>
                <Link href="/strategia-marketingowa">
                  Strategia marketingowa
                </Link>
              </div>
            </Col>
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przekonujące treści</h3>
                
              </div>
            </Col> */}
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Klienci i opinie</h3>
                <Link href="/marketersi-opinie">Opinie klientów</Link>
                {/* <a href="/">Nasi klienci</a> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderDropDown1;
