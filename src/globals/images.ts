import { ItemComponent } from "../types/types";

type MapImages = {
  [key: ItemComponent | string]: string;
};

const MAP_IMAGES: MapImages = {
  sword: "https://ap.tft.tools/img/items_s10/BFSword.jpg",
  bow: "https://ap.tft.tools/img/items_s10/RecurveBow.jpg",
  chain: "https://ap.tft.tools/img/items_s10/ChainVest.jpg",
  cloack: "https://ap.tft.tools/img/items_s10/NegatronCloak.jpg",
  rod: "https://ap.tft.tools/img/items_s10/NeedlesslyLargeRod.jpg",
  tear: "https://ap.tft.tools/img/items_s10/TearOfTheGoddess.jpg",
  belt: "https://ap.tft.tools/img/items_s10/GiantsBelt.jpg",
  glove: "https://ap.tft.tools/img/items_s10/SparringGloves.jpg",
};

export default MAP_IMAGES;
