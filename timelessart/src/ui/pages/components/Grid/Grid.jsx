import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Grow from "@mui/material/Grow";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const ShopCard = lazy(() => import("../ShopCard/ShopCard"));

export default function SpacingGrid({ artworkArray }) {
  const [spacing, setSpacing] = React.useState(2);
  const navigate = useNavigate();
  console.log(artworkArray);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={spacing}>
      {artworkArray.length > 0 ? (
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={1}>
            {artworkArray.map((artwork, index) => (
              <Grid key={index} item>
                <Suspense>
                  <ShopCard
                    imageUrl={artwork.previewUrl[0]}
                    artworkTitle={artwork.title}
                    price={artwork.price}
                    id={artwork.id}
                  />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6">No artworks found</Typography>
        </Grid>
      )}
    </Grid>
  );
}
