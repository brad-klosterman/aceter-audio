import React, { Dispatch, createContext, useReducer } from 'react';

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export enum Types {
    Create = 'CREATE_TRACK',
    Delete = 'DELETE_TRACK',
    Load = 'LOAD_TRACK',
}

type TrackType = {
    trackID: string | undefined;
};

type TrackPayload = {
    [Types.Load]: {
        trackID: string | undefined;
    };
    [Types.Delete]: {
        trackID: string | undefined;
    };
};

type TrackActions = ActionMap<TrackPayload>[keyof ActionMap<TrackPayload>];

type InitialStateType = {
    track: TrackType;
};

const initialState = {
    track: {
        trackID: undefined,
    },
};

const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<TrackActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const trackReducer = (state: TrackType, action: TrackActions) => {
    switch (action.type) {
        case Types.Load:
            return {
                ...state,
                trackID: action.payload.trackID,
            };

        default:
            return state;
    }
};

const mainReducer = ({ track }: InitialStateType, action: TrackActions) => ({
    track: trackReducer(track, action),
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
