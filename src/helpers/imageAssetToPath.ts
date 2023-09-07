/* 
    Example Input: 
    image-ceb1c18e5f5082981a2f14f0700858a9be1b9e61-5472x3648-jpg 
*/
export const imageAssetToPath = (rawString: string): string => {
  const cdnBasePath = process.env.NEXT_PUBLIC_CDN_PATH;
  const formattedString = rawString
    .replace("image-", "")
    .replace("-jpg", ".jpg");

  return cdnBasePath + formattedString;
};
