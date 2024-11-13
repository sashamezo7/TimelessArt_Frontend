import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import "../ArtworkDetail/artworkComponent.css";
import DescriptionArtwork from "./DescriptionArtwork";
import ImageArtwork from "./ImageArtwork";

import { Suspense } from "react";


export default function ArtworkComponent({ artworkDetail }) {
  if (!artworkDetail) return <div className="loader"></div>;

  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Container maxWidth="lg" className="container-artwork">
        <Grid container spacing={10}>
          <ImageArtwork artworkDetail={artworkDetail} />

          <DescriptionArtwork artworkDetail={artworkDetail} />
        </Grid>
      </Container>
    </Suspense>
  );
}
