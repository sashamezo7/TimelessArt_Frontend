import "./artDropDown.css";
import '../../../util/i18n'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import TypeArtwork from "../../../util/TypeArtwork.jsx";
import { useState } from "react";

const ArtDropDown = ({ closeArtDropDown }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [typeArtwork, setTypeArtwork] = useState('');

    const handlePaintings = () => {
        const artworkType = TypeArtwork.pictura;  // Directly use TypeArtwork.pictura
        navigate('/shop?typeArtwork=pictura');
        localStorage.setItem('TypeArtwork', artworkType);  // Set localStorage first
        setTypeArtwork(artworkType);  // Update state

    }
    return (
        <div 
            className="art-drop-down-container"
            onMouseLeave={() => closeArtDropDown(false)}
        >
            <div className="art-drop-down-frame">
                <div className="art-drop-down-content">
                    <p>{t('navbar.art')}</p>
                    <div className="art-drop-down-link-container">
                        <div className="art-drop-down-link">
                            <p onClick={handlePaintings}>{t('navbar.painting')}</p>
                            <p>{t('navbar.sculpture')}</p>
                            <p>{t('navbar.graphics')}</p>
                        </div>
                        <div className="art-drop-down-link">
                            <p>{t('navbar.photography')}</p>
                            <p>{t('navbar.other')}</p>
                            <p>{t('navbar.all')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDropDown;
