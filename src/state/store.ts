import { values } from "../data/test/rawResponse";
import { Filters, MP, ViewType } from "../data/types";
import { formatResponse } from "../data/utils/utils";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export type AppState = {
  data: { status: "loading" | "complete" | "error"; profiles: MP[] };
  view: ViewType;
  activeFilters: Filters;
};

export const initState: AppState = {
  data: { status: "loading", profiles: formatResponse(values) },
  view: "about",
  activeFilters: {
    policies: {
      climate: {
        source: undefined,
        positive: undefined,
      },
      migration: {
        source: undefined,
        positive: undefined,
      },
      LGBTQ: {
        source: undefined,
        positive: undefined,
      },
      workers: {
        source: undefined,
        positive: undefined,
      },
      NHS: {
        source: undefined,
        positive: undefined,
      },
      benefits: {
        source: undefined,
        positive: undefined,
      },
      strikes: {
        source: undefined,
        positive: undefined,
      },
      publicOwnership: {
        source: undefined,
        positive: undefined,
      },
      housing: {
        source: undefined,
        positive: undefined,
      },
      palestine: {
        source: undefined,
        positive: undefined,
      },
    },
  },
};

const store = configureStore({ reducer: rootReducer });

export default store;
