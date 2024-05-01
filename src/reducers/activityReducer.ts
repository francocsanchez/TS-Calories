import { Activity } from "../types";

export type ActivityAction =
  | {
      type: "save-activity";
      payload: { newActivity: Activity };
    }
  | {
      type: "set-activeId";
      payload: { id: Activity["id"] };
    }
  | {
      type: "delete-activity";
      payload: { id: Activity["id"] };
    }
  | {
      type: "reset-activities";
    };

const activityList = (): Activity[] => {
  const localStoreActivities = localStorage.getItem("activities");
  return localStoreActivities ? JSON.parse(localStoreActivities) : [];
};

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: activityList(),
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  if (action.type === "save-activity") {
    let updateActivity: Activity[] = [];
    if (state.activeId) {
      updateActivity = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      updateActivity = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updateActivity,
      activeId: "",
    };
  }

  if (action.type === "set-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    const newListActivy = state.activities.filter(
      (activity) => activity.id != action.payload.id
    );

    return {
      ...state,
      activities: newListActivy,
    };
  }

  if (action.type === "reset-activities") {
    return {
      activities: [],
      activeId: "",
    };
  }

  return state;
};
