import { ColorType } from "./type";

// action
const SET_COLORS = 'SET_COLORS' as const;
const INPUT_COLOR = 'INPUT_COLOR' as const;

export const setColors = (diff: ColorType[]) => ({
  type: SET_COLORS,
  payload: diff
})
export const inpurtColor = (diff: string) => ({
  type: INPUT_COLOR,
  payload: diff
})

type Action = 
  | ReturnType<typeof setColors>
  | ReturnType<typeof inpurtColor>

//state

type State = {
  colors: ColorType[],
  targetColor: string
}

const initialState: State = {
  colors: [],
  targetColor: ''
}

function reducer (
  state: State = initialState,
  action: Action
): State {
  switch(action.type) {
    case "SET_COLORS":
      return {...state, colors: [...action.payload] };
    case "INPUT_COLOR":
      return {...state, targetColor: action.payload };
    default:
      return state;
  }
}

export default reducer;
export type RootState = ReturnType<typeof reducer>;