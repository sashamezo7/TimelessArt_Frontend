import "./shop.css";
import { useEffect, useState } from "react";
import {
  getAllArtworksBYTypeData,
  getAllArtworks,
} from "../../../lib/api/ArtworksData/artworkData.jsx";
import Grid from "../components/Grid/Grid.jsx";
import { useLocation } from "react-router-dom";


const Shop = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeArtwork = searchParams.get("typeArtwork");



  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        let response;

      
        if (typeArtwork) {
          response = await getAllArtworksBYTypeData(typeArtwork);
        } else {
          response = await getAllArtworks();
        }

        if (Array.isArray(response)) {
          setArtworks(response);
        } else {
          console.error("Response is not an array");
          setError("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching artworks:", error);
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [typeArtwork]);
  if (loading) return <div className="loader"></div>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Grid artworkArray={artworks} />
    </>
  );
};

export default Shop;
