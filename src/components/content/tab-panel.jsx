import { Box } from "@mui/material";

const TabPanel = ({ children, value, tab }) => {
  return <Box display={value === tab ? "block" : "none"}>{children}</Box>;
};

export default TabPanel;
