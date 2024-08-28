import React from 'react';
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/material/Tooltip";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ShopCard = React.memo(({ imageUrl, artworkTitle, price, id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/shop/${id}`);
  };

  return (
    <Card
      onClick={handleClickCard}
      sx={{
        width: 300,
        height: 400,
        backgroundColor: "transparent",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover .icon-button": {
          opacity: 1,
        },
      }}
      variant="plain"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          srcSet={`${imageUrl}?dpr=2 2x`}
          loading="lazy"
          alt={artworkTitle}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <Tooltip title="Save" placement="bottom-end">
          <IconButton
            className="icon-button"
            aria-label={`bookmark ${artworkTitle}`}
            color="danger"
            size="lg"
            variant="solid"
            sx={{
              position: "absolute",
              top: "0.2rem",
              right: "0.2rem",
              opacity: 0,
              transition: "opacity 0.3s ease",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "var(--secondary-color)",
              },
            }}
          >
            <BookmarkAdd />
          </IconButton>
        </Tooltip>
      </div>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography
          level="h6"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          {artworkTitle}
        </Typography>
        <Typography fontSize="lg" fontWeight="lg" sx={{ marginBottom: "8px" }}>
          €{price}
        </Typography>
        <Button
          variant="outlined"
          size="md"
          aria-label="Add to cart"
          sx={{
            fontWeight: 600,
            fontSize: "0.7rem",
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
            "&:hover": {
              backgroundColor: "var(--secondary-color)",
              color: "#fff",
              borderColor: "var(--secondary-color)",
            },
          }}
        >
          {t("shop.addToCart")}
        </Button>
      </CardContent>
    </Card>
  );
});

export default ShopCard;
