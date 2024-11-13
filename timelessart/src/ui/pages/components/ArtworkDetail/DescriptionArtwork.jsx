import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/material";
import ButtonBig from "../ButtonBig/ButtonBig";

const DescriptionArtwork = ({ artworkDetail }) => {
  return (
    <Grid item xs={12} sm={7} md={6}>
      <div className="artwork-image-text-container">
        <Box className="box-artwork">
          <Typography
            variant="h3"
            gutterBottom
            className="typography-title roboto-bold"
            style={{ paddingBottom: "40px" }}
          >
            {artworkDetail.title}
          </Typography>

          <div className="separator-line-artwork-description"></div>

          <div className="description-artwork-shop">
            <Typography
              variant="body2"
              className="typography-body roboto-regular"
              style={{ paddingBottom: "20px" }}
            >
              Technique: {artworkDetail.technique}
            </Typography>
            <Typography
              variant="body1"
              className="typography-body roboto-regular"
              style={{ paddingBottom: "20px" }}
            >
              Type: {artworkDetail.artworkType}
            </Typography>
            <Typography
              variant="body1"
              className="typography-body roboto-regular"
              style={{ paddingBottom: "20px" }}
            >
              Frame: {artworkDetail.frame ? "Yes" : "No"}
            </Typography>
            <Typography
              variant="body1"
              className="typography-body roboto-regular"
              style={{ paddingBottom: "40px" }}
            >
              Dimensions: {artworkDetail.width} x {artworkDetail.height} cm
            </Typography>
          </div>

          <div className="separator-line-artwork-description"></div>


          <Typography
            className="price-artwork-detail-shop roboto-regular"
            variant="h4"
            style={{ paddingBottom: "40px" }}
          >
            Price: €{artworkDetail.price}
          </Typography>

          <ButtonBig />
        </Box>
      </div>
    </Grid>
  );
};

export default DescriptionArtwork;
