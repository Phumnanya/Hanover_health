export const fetchDiseaseData = async (): Promise<any[]> => {
  const response = await fetch("http://127.0.0.1:5000/fetch-data");
  if (!response.ok) {
    throw new Error("Failed to fetch disease data");
  }
  const data = await response.json();
  return data;
};
