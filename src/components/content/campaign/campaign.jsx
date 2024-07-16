import { useMemo, useState } from "react";

import { Box } from "@mui/material";

import CampaignInfo from "./campagn-info";
import CampaignList from "./campaign-list";
import TableCustom from "../../table/table";

const Campaign = ({ campaign, isSubmited, setCampaign }) => {
  const [indexActive, setIndexActive] = useState(0);
  const subCampaigns = campaign?.subCampaigns || [];
  const activeCampaign = subCampaigns?.[indexActive];

  const tableConfig = useMemo(
    () => [
      {
        key: "name",
        name: "Tên quảng cáo*",
        error: (value) => {
          return isSubmited && !value;
        },
      },
      {
        key: "quantity",
        name: "Số lượng*",
        type: "number",
        error: (value) => {
          return isSubmited && Number(value) <= 0;
        },
      },
    ],
    [isSubmited]
  );

  const handleAddCampaign = () => {
    setCampaign({
      ...campaign,
      subCampaigns: [
        ...subCampaigns,
        {
          name: `Chiến dịch con ${subCampaigns.length + 1}`,
          status: true,
          ads: [
            {
              name: `Quảng cáo 1`,
              quantity: 0,
            },
          ],
        },
      ],
    });
    handleActiveCampaign(subCampaigns.length);
  };

  const handleActiveCampaign = (index) => {
    setIndexActive(index);
  };

  const handleChangeCampaignName = (name, nameCampaign) => {
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive][name] = nameCampaign;
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  const handleChangeCampaignStatus = (event) => {
    const { name, checked } = event.target;
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive][name] = checked;
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  const handleChangeInputRow = (index, name, roWValue) => {
    const ads = [...activeCampaign.ads];
    ads[index][name] = roWValue;
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive].ads = ads;
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  const handleDeleteRow = (index) => {
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive].ads.splice(index, 1);
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  const handleDeleteRowSeleted = (selected) => {
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive].ads = newSubCampaigns[indexActive].ads.filter(
      (_, index) => !selected.includes(index)
    );
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  const handleAddRow = () => {
    const newSubCampaigns = [...subCampaigns];
    newSubCampaigns[indexActive].ads = [
      ...activeCampaign.ads,
      {
        name: `Quảng cáo ${activeCampaign.ads.length + 1}`,
        quantity: 0,
      },
    ];
    setCampaign({ ...campaign, subCampaigns: newSubCampaigns });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Box paddingX={"9px"} display={"flex"} flexDirection={"column"} gap={3}>
        <CampaignList
          subCampaigns={subCampaigns}
          indexActive={indexActive}
          isSubmited={isSubmited}
          handleAddCampaign={handleAddCampaign}
          handleActiveCampaign={handleActiveCampaign}
        />
        <CampaignInfo
          campaign={activeCampaign}
          isSubmited={isSubmited}
          handleChangeCampaignName={handleChangeCampaignName}
          handleChangeCampaignStatus={handleChangeCampaignStatus}
        />
      </Box>
      <TableCustom
        tableConfig={tableConfig}
        tableValue={activeCampaign?.ads}
        handleChangeInputRow={handleChangeInputRow}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRowSeleted={handleDeleteRowSeleted}
        handleAddRow={handleAddRow}
      />
    </Box>
  );
};

export default Campaign;
