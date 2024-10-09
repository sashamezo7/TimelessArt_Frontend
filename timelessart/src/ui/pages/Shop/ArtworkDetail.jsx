import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtworkById } from "../../../lib/api/ArtworksData/artworkData";
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
        setLoading(false); // Oprește loader-ul după ce datele au fost procesate
      }
    };

    if (id) {
      fetchArtwork();
    }
  }, [id]);

  // Afișează loader-ul dacă artwork este null sau încă se încarcă
  if (loading || !artwork) {
    return <div className="loader"></div>;
  }

  // Afișează componentele doar după ce artwork a fost încărcat
  return (
    <>
      <ArtworkComponent artworkDetail={artwork} />
      <div className="image-artist-shop-detail">
        <ArtistDescription />
      </div>
    </>
  );
};

export default ArtworkDetail;
