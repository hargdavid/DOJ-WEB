/* 
    Example Input: 
    image-ceb1c18e5f5082981a2f14f0700858a9be1b9e61-5472x3648-jpg 
*/
export const imageAssetToPath = (rawString?: string): string => {
  if (typeof rawString === "undefined") {
    return "";
  } else {
    const cdnBasePath = process.env.NEXT_PUBLIC_CDN_PATH;
    const type =
      rawString.indexOf("-jpg") === -1 ? ImageType.PNG : ImageType.JPG;
    let formattedString = rawString.replace("image-", "");

    if (type === ImageType.JPG) {
      formattedString = formattedString.replace("-jpg", ".jpg");
    } else {
      formattedString = formattedString.replace("-png", ".png");
    }

    return cdnBasePath + formattedString;
  }
};

enum ImageType {
  JPG,
  PNG,
}
