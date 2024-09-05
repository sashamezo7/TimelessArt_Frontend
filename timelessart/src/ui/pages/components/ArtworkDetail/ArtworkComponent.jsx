import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../ArtworkDetail/artworkComponent.css";
import ButtonBig from "../ButtonBig/ButtonBig";

export default function ArtworkComponent({ artworkDetail }) {
  if (!artworkDetail) return <div></div>;
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ bgcolor: "transparent", p: 3 }}>
        <Grid container spacing={2}>
          {/* Coloana pentru imagine */}
          <Grid item xs={12} md={6}>
            <Card sx={{display: "flex" }}>
              <CardMedia
                component="img"
                src={artworkDetail.imageUrls[0]}
                srcSet={`${artworkDetail.imageUrls[0]}?dpr=2 2x`}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "var(--light-grey-color)",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "70%",
                padding: 4,
                boxSizing: "border-box", // Asigură că padding-ul este inclus în dimensiunile totale
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ color: "var(--dark-grey-color)" }}
              >
                {artworkDetail.title}
              </Typography>
              <div className="description-artwork-shop">
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "var(--dark-grey-color)" }}
                >
                  {artworkDetail.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "var(--dark-grey-color)" }}
                >
                  Technique: {artworkDetail.technique}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "var(--dark-grey-color)" }}
                >
                  Medium: {artworkDetail.artworkType}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "var(--dark-grey-color)" }}
                >
                  Frame: {artworkDetail.frame ? "Yes" : "No"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "var(--dark-grey-color)" }}
                >
                  Dimensions: {artworkDetail.width} x {artworkDetail.height} cm
                </Typography>
              </div>

              <Typography
                className="price-artwork-detail-shop"
                variant="h4"
                sx={{
                  color: "var(--dark-grey-color)",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                Price: ${artworkDetail.price}
              </Typography>
              <ButtonBig className="button-artwork-detail-shop" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
