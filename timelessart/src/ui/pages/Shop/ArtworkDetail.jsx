import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getArtworkById } from "../../../lib/api/ArtworksData/artworkData";
import ArtworkComponent from "../components/ArtworkDetail/ArtworkComponent";

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const data = await getArtworkById(id);
        setArtwork(data);
      } catch (error) {
        alert(error.message);
      }
    };

    if (id) {
      fetchArtwork();
      console.log(artwork)

    }
  }, [id]);

  useEffect(() => {
    console.log('Artwork state updated:', artwork);
  }, [artwork]);

  return <ArtworkComponent artworkDetail={artwork} />;
};

export default ArtworkDetail;
