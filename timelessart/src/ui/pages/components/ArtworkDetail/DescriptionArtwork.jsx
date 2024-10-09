import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/material";
import ButtonBig from "../ButtonBig/ButtonBig";

const DescriptionArtwork = ({ artworkDetail }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box className="box-artwork">
        <Typography
          variant="h3"
          gutterBottom
          className="typography-title roboto-bold"
          style={{ paddingBottom: "15%" }} // Spațiu suplimentar între elemente
        >
          {artworkDetail.title}
        </Typography>
        <div className="description-artwork-shop">
          
          <Typography
            variant="body2"
            className="typography-body roboto-regular"
            style={{ paddingBottom: "3%" }} // Spațiu suplimentar între elemente
          >
            Technique: {artworkDetail.technique}
          </Typography>
          <Typography
            variant="body1"
            className="typography-body roboto-regular"
            style={{ paddingBottom: "3%" }} // Spațiu suplimentar între elemente
          >
            Type: {artworkDetail.artworkType}
          </Typography>
          <Typography
            variant="body1"
            className="typography-body roboto-regular"
            style={{ paddingBottom: "3%" }} // Spațiu suplimentar între elemente
          >
            Frame: {artworkDetail.frame ? "Yes" : "No"}
          </Typography>
          <Typography
            variant="body1"
            className="typography-body roboto-regular"
            style={{ paddingBottom: "15%" }} // Spațiu suplimentar între elemente
          >
            Dimensions: {artworkDetail.width} x {artworkDetail.height} cm
          </Typography>
        </div>

        <Typography
          className="price-artwork-detail-shop roboto-bold"
          variant="h4"
          style={{ paddingBottom: "5%" }} // Spațiu suplimentar între elemente
        >
          Price: €{artworkDetail.price}
        </Typography>

        <ButtonBig/>
        
      </Box>
    </Grid>
  );
};

export default DescriptionArtwork;
