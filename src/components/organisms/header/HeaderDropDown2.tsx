import React from "react";
import { Container, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import Link from "next/link";

const HeaderDropDown2 = () => {
  return (
    <div>
      <div className={style.headerDrop1}>
        <Container>
          <Row>
            {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Przewodniki</h3>
                <a href="/">Landing Pages</a>
                <a href="/">Strona internetowa</a>
                <a href="/">Content Marketing</a>
              </div>
            </Col> */}
            <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Narzędzia</h3>
                <Link href="/czy-oplaca-sie-agencja-marketingowa">
                  Policz czy Ci się to opłaca?
                </Link>
                {/* <a href="/">Test skuteczności strony (Krótki)</a> */}
               
              </div>
            </Col>
            {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Pobierz teraz</h3>
                <a href="/">eMarketing 2024 - Pierwsze Kroki [PDF]</a>
                <a href="/">Profil klienta - Zeszyt ćwiczeń [PDF]</a>
                <a href="/">Psychologia cen w internecie [PDF]</a>
              </div>
            </Col> */}
          </Row>
        </Container>
        <div className={style.headerDrop2BG}>
          <Container>
            <Row className="mt-4">
              <Col sm={4}>
                <div className={style.headerMenu}>
                  <h3>Hity na blogu:</h3>
                  {/* <a href="/">Notatki z przełomowych książek</a> */}
                  <Link href="/marketingowa-psychologia-sprzedazy">
                    {/* 10 Faktów psychologii: Strony www */}
                    25 faktów psychologii sprzedaży
                  </Link>
                  {/* <a href="/">Skuteczne banery internetowe</a> */}
                </div>
              </Col>
              {/* <Col sm={4}>
              <div className={style.headerMenu}>
                <h3>Kategorie:</h3>
                <a href="/">Marketing</a>
                <a href="/">Grafika</a>
                <a href="/">Blog</a>
              </div>
            </Col> */}
              <Col sm={4}></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown2;
