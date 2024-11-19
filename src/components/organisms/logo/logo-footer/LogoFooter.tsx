import React, { useState } from 'react';
import Link from 'next/link';
import './logo-footer.css';

const LogoFooter = ({ openModal }) => {
  const buttonsData = [
    { id: 1, label: '1', content: 'Co otrzymam' },
    { id: 2, label: '2', content: 'Jak to działa' },
    { id: 3, label: '3', content: 'Galeria' },
    { id: 4, label: '4', content: 'Przykłady realizacji' },
  ];

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <>
      <div className="nazwa_footer_bottom">
        <div className="nazwa_footer_bottom_left">
          {buttonsData.map((button) => (
            <Link
              key={button.id}
              href={`#sec${button.id}`}
              className={activeButton === button.id ? 'activeLink' : ''}
              onClick={() => handleButtonClick(button.id)}
            >
              <button>{button.label}</button>
              {activeButton === button.id && <span>{button.content}</span>}
            </Link>
          ))}
        </div>
        <div className="nazwa_footer_bottom_right">
          {/* to be deleted */}
          {/* <a href="https://drive.google.com/uc?authuser=0&id=1sXRhdpQRI228rKk2CcuDTtpnF8DhAj2Q&export=download">
            <button className="nazwa_footer_bottom_PDF">
              Pobierz wersję PDF
            </button>
          </a> */}

          <button className="nazwa_footer_bottom_Offer" onClick={openModal}>
            Otrzymaj ofertę
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoFooter;
