import "./artDropDown.css";
import "../../../util/i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import paintingImage from "/Users/sasamezo/Developer/TimelessArtFolder/Frontend/timelessart/src/assets/poza_pictura_navbar.jpg";
import allArtworksImage from "/Users/sasamezo/Developer/TimelessArtFolder/Frontend/timelessart/src/assets/img_all_artworks.jpg";

const ArtDropDown = ({ closeArtDropDown }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentBackground, setCurrentBackground] = useState(""); // Imaginea activă
  const [nextBackground, setNextBackground] = useState(""); // Imaginea următoare
  const [isTransitioning, setIsTransitioning] = useState(false); // Pentru tranziție

  const handleMouseEnter = (newBackground) => {
    if (currentBackground !== newBackground) {
      setNextBackground(newBackground); // Setăm imaginea următoare
      setIsTransitioning(true); // Pornim tranziția

      // După terminarea tranziției, actualizăm fundalul curent
      setTimeout(() => {
        setCurrentBackground(newBackground);
        setIsTransitioning(false); // Terminăm tranziția
      }, 500); // Timpul trebuie să fie egal cu `transition` din CSS
    }
  };

  const handleMouseLeave = () => {
    setNextBackground("");
    setIsTransitioning(false);
  };

  const handlePaintings = () => {
    navigate("/shop?typeArtwork=pictura");
    localStorage.setItem("TypeArtwork", "pictura");
  };

  const handleAllArtwork = () => {
    navigate("/shop");
  };

  return (
    <div
      className="art-drop-down-container"
      onMouseLeave={() => {
        closeArtDropDown(false);
        handleMouseLeave();
      }}
    >
      {/* Background Layer 1 (current 
      ) */}
      <div
        className="art-drop-down-background current"
        style={{
          backgroundImage: `url(${currentBackground})`,
          opacity: isTransitioning ? 0 : 0.4,
        }}
      ></div>

      {/* Background Layer 2 (next image during transition) */}
      <div
        className="art-drop-down-background next"
        style={{
          backgroundImage: `url(${nextBackground})`,
          opacity: isTransitioning ? 0.4 : 0,
        }}
      ></div>

      <div className="art-drop-down-frame">
        <div className="art-drop-down-content">
          <p>{t("navbar.art")}</p>
          <div className="art-drop-down-link-container">
            <div className="art-drop-down-link">
              <p
                onMouseEnter={() => handleMouseEnter(paintingImage)}
                onClick={handlePaintings}
              >
                {t("navbar.painting")}
              </p>
              <p>{t("navbar.sculpture")}</p>
              <p>{t("navbar.graphics")}</p>
            </div>
            <div className="art-drop-down-link">
              <p>{t("navbar.photography")}</p>
              <p>{t("navbar.other")}</p>
              <p
                onMouseEnter={() => handleMouseEnter(allArtworksImage)}
                onClick={handleAllArtwork}
              >
                {t("navbar.all")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDropDown;
