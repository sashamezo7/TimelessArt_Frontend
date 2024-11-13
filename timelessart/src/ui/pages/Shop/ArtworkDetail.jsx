import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtworkById } from "../../../lib/api/ArtworksData/artworkData";
import ArtworkListImage from "../components/ArtworkListImage/ArtworkListImage";
import ArtistDescription from "../components/ArtistDescription/ArtistDescription";
import "./artworkDetail.css";

const ArtworkComponent = React.lazy(() =>
  import("../components/ArtworkDetail/ArtworkComponent")
);

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const data = await getArtworkById(id);
        setArtwork(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtwork();
    }
  }, [id]);

  if (loading || !artwork) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="container-artwork-page">
        <ArtworkComponent artworkDetail={artwork} />
        <div className="image-artist-shop-detail">
          <ArtistDescription />
        </div>
        <ArtworkListImage />
      </div>
    </>
  );
};

export default ArtworkDetail;
