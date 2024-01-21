import { useState } from "react";

import { Box } from "@mui/material";

import MAP_IMAGES from "../../globals/images";

import { SelectComponent } from "../../types/types";

interface IInputItemComponentsProps {}

const COMPONENT_SIZE = "40px";

const DEFAULT_COMPONENTS: SelectComponent[] = [
  {
    component: "sword",
    selected: false,
    amount: 0,
  },
  {
    component: "bow",
    selected: false,
    amount: 0,
  },
  {
    component: "chain",
    selected: false,
    amount: 0,
  },
  {
    component: "cloack",
    selected: false,
    amount: 0,
  },
  {
    component: "rod",
    selected: false,
    amount: 0,
  },
  {
    component: "tear",
    selected: false,
    amount: 0,
  },
  {
    component: "belt",
    selected: false,
    amount: 0,
  },
  {
    component: "glove",
    selected: false,
    amount: 0,
  },
];

const InputItemComponents = ({}: IInputItemComponentsProps) => {
  const [components, setComponents] = useState(DEFAULT_COMPONENTS);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box component="span" sx={{ fontSize: "1.3rem" }}>
        Selecione os componentes
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {components.map((component) => {
          const { component: name, amount } = component;
          return (
            <Box
              key={name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${MAP_IMAGES[name]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: COMPONENT_SIZE,
                  height: COMPONENT_SIZE,
                  margin: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              />
              <Box>{amount}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default InputItemComponents;
