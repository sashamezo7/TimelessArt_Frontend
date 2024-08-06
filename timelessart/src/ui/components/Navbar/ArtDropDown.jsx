import "./artDropDown.css";
import '../../../util/i18n'
import { useTranslation } from 'react-i18next';

const ArtDropDown = ({ closeArtDropDown }) => {
    const { t } = useTranslation();

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
                            <p>{t('navbar.painting')}</p>
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
