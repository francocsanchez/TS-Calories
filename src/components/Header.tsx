import { Dispatch, useMemo } from "react";
import { ActivityAction, ActivityState } from "../reducers/activityReducer";

type HeaderPropos = {
  dispatch: Dispatch<ActivityAction>;
  state: ActivityState;
};

export default function Header({ dispatch, state }: HeaderPropos) {
  const isDisableButton = () =>
    useMemo(() => state.activities.length, [state.activities]);

  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-center text-3xl font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button
          onClick={() =>
            dispatch({
              type: "reset-activities",
            })
          }
          disabled={!isDisableButton()}
          className="uppercase bg-indigo-900 text-white font-bold px-6 py-2 rounded-lg disabled:opacity-10"
        >
          Reiniciar
        </button>
      </div>
    </header>
  );
}
