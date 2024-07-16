export const validAds = (ads) => {
  if (!ads) return false;
  if (ads.length === 0) return false;
  return ads.every((ad) => ad.name && ad.quantity > 0);
};

export const validSubCampaigns = (subCampaigns) => {
  if (!subCampaigns) return false;
  return subCampaigns.every(
    (subCampaign) => subCampaign.name && validAds(subCampaign.ads)
  );
};

export const validInformation = (information) => {
  if (!information) return false;
  return !!information.name;
};
