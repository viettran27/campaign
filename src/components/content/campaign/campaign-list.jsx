import CampaignItem from "./campaign-item";

import { Box, Button } from "@mui/material";

import AddIcon from "@material-ui/icons/Add";

const CampaignList = ({
  subCampaigns,
  indexActive,
  isSubmited,
  handleAddCampaign,
  handleActiveCampaign,
}) => {
  return (
    <Box position={"relative"} display={"flex"} py={2} overflow={"auto"}>
      <Box
        sx={{
          position: "sticky",
          left: 0,
          top: 0,
          bottom: -0,
          backgroundColor: "white",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pr: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: "50%", aspectRatio: "1/1", p: 0 }}
          onClick={handleAddCampaign}
        >
          <AddIcon />
        </Button>
      </Box>
      <Box display={"flex"} gap={2}>
        {subCampaigns.map((item, index) => (
          <CampaignItem
            isSubmited={isSubmited}
            onClick={() => handleActiveCampaign(index)}
            active={index === indexActive}
            key={index}
            item={item}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CampaignList;
