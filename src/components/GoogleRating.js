import Rating from "material-ui-rating";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";

function GoogleRating(props) {
  return (
    <Box className="rating-box">
      Google rating:
      <Box>
        <Rating name="read-only" value={props.value} readOnly />
      </Box>
      <Box component="legend">({props.value}/5)</Box>
    </Box>
  );
}
export default GoogleRating;
