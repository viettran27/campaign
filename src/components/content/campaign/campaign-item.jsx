import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { validAds } from "utils/validate";

const CampaignItem = ({ isSubmited, item, active, onClick }) => {
  const { name, status } = item;
  const quantity = item?.ads.reduce(
    (total, b) => total + Number(b.quantity),
    0
  );

  return (
    <Box
      border={active ? "2px solid rgb(33, 150, 243)" : "2px solid gray"}
      borderRadius={"5px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "px",
        minWidth: "210px",
        maxWidth: "210px",
        minHeight: "120px",
        maxHeight: "120px",
        cursor: "pointer",
        overflow: "hidden",
      }}
      p={1}
      onClick={onClick}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Typography
          variant="h6"
          sx={{
            mr: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            wordBreak: "break-all",
            maxWidth: "85%",
            minHeight: "32px",
            textAlign: "left",
            color: isSubmited && !validAds(item?.ads) ? "#d32f2f" : "black",
          }}
        >
          {name}
        </Typography>
        <CheckCircleIcon
          style={{
            color: status ? "green" : "gray",
            fontSize: "14px",
          }}
        />
      </Box>
      <Typography variant="h6">{quantity || 0}</Typography>
    </Box>
  );
};

export default CampaignItem;
