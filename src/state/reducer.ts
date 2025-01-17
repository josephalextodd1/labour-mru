import {
  Action,
  SET_POLICY_STANCE_ACTION,
  SET_DATA_ACTION,
  SET_VIEW_ACTION,
  SET_SEARCH_INPUT_ACTION,
  SET_SORTBY_ACTION,
} from "./actions";
import { AppState, initState } from "./store";

// Use the initialState as a default value
export default function appReducer(
  state = initState,
  action: Action
): AppState {
  switch (action.type) {
    case SET_DATA_ACTION: {
      const { data } = state;
      const { profiles, status } = action.payload;
      return {
        ...state,
        data: {
          ...data,
          profiles: profiles,
          status,
        },
      };
    }
    case SET_VIEW_ACTION: {
      return {
        ...state,
        view: action.payload.view,
      };
    }
    case SET_POLICY_STANCE_ACTION: {
      const { category, positive } = action.payload;
      const { policies } = state.activeFilters;
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          policies: { ...policies, [category]: { positive } },
        },
      };
    }
    case SET_SEARCH_INPUT_ACTION: {
      const { value } = action.payload;
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          searchInput: value,
        },
      };
    }
    case SET_SORTBY_ACTION: {
      const { descending } = action.payload;
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          sortDescending: descending,
        },
      };
    }
    default: {
      return state;
    }
  }
}
