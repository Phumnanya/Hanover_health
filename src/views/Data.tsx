// src/utils/fetchDiseaseData.ts
/*export interface DiseaseData {
  IndicatorCode: string;
  TimeDim: number;
  SpatialDim: string;
  Value: string;
  Dim1?: string;
  Dim2?: string;
}

export const fetchDiseaseData = async (
  indicatorCode: string,
  countryCode: string = 'NGA',
  year: number = 2022
): Promise<DiseaseData[]> => {
  const res = await fetch(`https://ghoapi.azureedge.net/api/${indicatorCode}`);
  const json = await res.json();

  const filtered = json.value.filter(
    (item: DiseaseData) =>
      item.SpatialDim === countryCode && item.TimeDim === year
  );

  return filtered;
};
*/