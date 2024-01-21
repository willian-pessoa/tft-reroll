export type ItemComponent =
  | "sword"
  | "bow"
  | "chain"
  | "cloack"
  | "rod"
  | "tear"
  | "belt"
  | "glove";

export type SelectComponent = {
  component: ItemComponent;
  selected: boolean;
  amount: number;
};

export type Item = [ItemComponent, ItemComponent];

export type Champion = {
  name: string;
  cost: number;
  pictureUrl: string;
  firstItem: Item;
  secondItem: Item;
  fillItems: Item[];
};
