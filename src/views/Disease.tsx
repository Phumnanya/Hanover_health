export const fetchDiseaseData = async (): Promise<any[]> => {
  const response = await fetch("https://hanover-backend.onrender.com/fetch-data");
  if (!response.ok) {
    throw new Error("Failed to fetch disease data");
  }
  const data = await response.json();
  return data;
};

