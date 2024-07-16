import { useCallback } from "react";
import Input from "components/input/input";
import { Box } from "@mui/material";

const Info = ({ campaign, setCampaign, isSubmited }) => {
  const handleChange = useCallback(
    (name, inputValue) => {
      const information = {
        ...campaign?.information,
        [name]: inputValue,
      };

      setCampaign({
        ...campaign,
        information,
      });
    },

    // eslint-disable-next-line
    [campaign]
  );

  const information = campaign?.information || {};

  return (
    <Box paddingX={"9px"}>
      <Input
        error={isSubmited && !information?.name}
        value={information?.name}
        isSubmited={isSubmited}
        helperText="Dữ liệu không hợp lệ"
        label="Tên chiến dịch*"
        name="name"
        onChange={handleChange}
      />
      <Input
        value={information?.describe}
        label="Mô tả"
        name="describe"
        style={{ mt: 2 }}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Info;
