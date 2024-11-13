import ImageAvatar from "../ImageAvatar/ImageAvatar";
import "./artistDescription.css";
const ArtistDescription = () => {
  return (
    <div className="parent-rectangle">
      <div className="rectangle-artist-description">
        <div className="avatar-container">
          <ImageAvatar />
        </div>
        <div className="text-container">
          <div className="text-content">
            <p>
              Într-o lume plină de posibilități, fiecare zi ne oferă ocazia de a
              explora noi orizonturi.
            </p>
            <p>
              Fie că alegem să ne îmbarcăm într-o călătorie fizică sau să ne
              aventurăm în gândire, fiecare experiență ne îmbogățește sufletul.
            </p>
            <p>
              Frumusețea vieții constă în diversitatea momentelor și emoțiilor
              pe care le trăim.
            </p>
            <p>
              De la bucuria unei întâlniri cu un prieten vechi la liniștea unei
              seri petrecute în natură, aceste clipe ne conturează identitatea.
            </p>
            <p>
              Să ne amintim să prețuim fiecare moment și să ne deschidem inimile
              către tot ceea ce viața ne oferă.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDescription;
