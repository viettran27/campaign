import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import Input from "components/input/input";

const CampaignInfo = ({
  campaign,
  isSubmited,
  handleChangeCampaignName,
  handleChangeCampaignStatus,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Input
          label="Tên chiến dịch con"
          name="name"
          error={isSubmited && !campaign?.name}
          helperText="Dữ liệu không hợp lệ"
          value={campaign?.name}
          onChange={handleChangeCampaignName}
        />
      </Grid>
      <Grid item xs={4}>
        <Box>
          <FormControlLabel
            sx={{ userSelect: "none" }}
            control={
              <Checkbox
                checked={campaign?.status}
                name="status"
                onChange={handleChangeCampaignStatus}
              />
            }
            label="Đang hoạt động"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CampaignInfo;
