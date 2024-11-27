import '../ButtonBig/buttonBig.css'
import Button from "@mui/joy/Button";
import { useTranslation } from "react-i18next";


const ButtonFilled = ({placeholder, fontSize, width}) => {
    const { t } = useTranslation();

    return ( <>
    <Button
          variant="outlined"
          size="md"
          aria-label={placeholder}
          sx={{
            fontWeight: 600,
            fontSize: {fontSize},
            width: {width},
            height: 'auto',
            color: "#fff",
            backgroundColor: "var(--primary-color)",
            border: "none",
            "&:hover": {
              backgroundColor: "var(--secondary-color)",
              color: "#fff",
            },
          }}
        >
          {placeholder}
    </Button>
    </> );
}
 
export default ButtonFilled;