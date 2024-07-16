import { useState } from "react";
import { validInformation, validSubCampaigns } from "./utils/validate";

import Content from "./components/content/content";
import Header from "./components/header/header";

function App() {
  const [campaign, setCampaign] = useState({
    information: {
      name: "",
      describe: "",
    },
    subCampaigns: [
      {
        name: "Chiến dịch con 1",
        status: true,
        ads: [
          {
            name: "Quảng cáo 1",
            quantity: 0,
          },
        ],
      },
    ],
  });

  const [error, setError] = useState({
    information: false,
    subCampaigns: false,
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const handleClick = () => {
    if (
      validInformation(campaign?.information) &&
      validSubCampaigns(campaign?.subCampaigns)
    ) {
      alert(JSON.stringify(campaign));
      return;
    }
    alert("Vui lòng điền đúng và đầy đủ thông tin");
    setIsSubmited(true);
  };

  return (
    <>
      <Header handleClick={handleClick} />
      <Content
        campaign={campaign}
        setCampaign={setCampaign}
        error={error}
        setError={setError}
        isSubmited={isSubmited}
      />
    </>
  );
}

export default App;
