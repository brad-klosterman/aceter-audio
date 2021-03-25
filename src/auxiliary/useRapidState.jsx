import { useCallback, useLayoutEffect, useRef, useState } from 'react';
/*
  STATE DISPATCHER
*/

const AudioContext = React.createContext();

const useRapidState = ({ model, actions }) => {
    const [state, setState] = useState(model);
    const stateRef = useRef(state);

    useLayoutEffect(() => {
        stateRef.current = state;
    });

    // STATE DISPATCHER
    const DISPATCH = useCallback(
        ({ key, value, shouldUpdate = () => true }) =>
            shouldUpdate({ state: stateRef.current }) &&
            setState((prevState) => ({
                ...prevState,
                ...{
                    ...actions,
                }[key](prevState, value),
            })),
        [actions],
    );

    return {
        STATE: state,
        DISPATCH,
    };
};

const PROVIDER = ({ STATE, DISPATCH }) => {
    return (
        <AudioContext.Provider
            value={{
                STATE,
                DISPATCH,
            }}
        >
            {props.children}
        </AudioContext.Provider>
    );
};

const useAudio = () => ({
	...useContext(AudioContext),
});

export { useRapidState, useAudio, PROVIDER };
