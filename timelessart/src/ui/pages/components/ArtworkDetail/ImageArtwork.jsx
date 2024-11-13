import { Grid } from "@mui/material";
import { CardMedia, Card } from "@mui/material";
import "./artworkComponent.css";

const ImageArtwork = ({ artworkDetail }) => {
  return (
    <Grid item xs={12} sm={7} md={6}>
      <div className="artwork-image-text-container">
          <CardMedia
            component="img"
            src={artworkDetail.imageUrls[0]}
            srcSet={`${artworkDetail.imageUrls[0]}?dpr=2 2x`}
            loading="lazy"
            className="card-media-artwork"
          />
      </div>
    </Grid>
  );
};

export default ImageArtwork;
