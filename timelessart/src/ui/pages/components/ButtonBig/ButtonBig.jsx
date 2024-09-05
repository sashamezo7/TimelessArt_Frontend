import '../ButtonBig/buttonBig.css'
import Button from "@mui/joy/Button";
import { useTranslation } from "react-i18next";


const ButtonBig = () => {
    const { t } = useTranslation();

    return ( <>
    <Button
          variant="outlined"
          size="md"
          aria-label="Add to cart"
          sx={{
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
            "&:hover": {
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              borderColor: "var(--primary-color)",
            },
          }}
        >
          {t("shop.addToCart")}
    </Button>
    </> );
}
 
export default ButtonBig;