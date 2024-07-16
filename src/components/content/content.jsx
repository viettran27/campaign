import { useCallback, useState } from "react";

import { Box, Container, Tab, Tabs } from "@mui/material";
import TabPanel from "./tab-panel";

import Info from "./info/info";
import Campaign from "./campaign/campaign";

const Content = ({ campaign, setCampaign, error, setError, isSubmited }) => {
  const [tab, setTab] = useState("info");

  const handleChange = useCallback((event, tab) => {
    setTab(tab);
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Box border={"1px solid gray"}>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="THÔNG TIN" value="info" />
          <Tab label="CHIẾN DỊCH CON" value="campaign" />
        </Tabs>
        <Box p={2}>
          <TabPanel tab="info" value={tab}>
            <Info
              setCampaign={setCampaign}
              campaign={campaign}
              error={error}
              setError={setError}
              isSubmited={isSubmited}
            />
          </TabPanel>
          <TabPanel tab="campaign" value={tab}>
            <Campaign
              setCampaign={setCampaign}
              campaign={campaign}
              error={error}
              setError={setError}
              isSubmited={isSubmited}
            />
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
