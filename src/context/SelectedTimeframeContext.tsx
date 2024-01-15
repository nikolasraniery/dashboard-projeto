import { ReactNode, createContext, useContext, useState } from "react";
import { Timeframe } from "../interfaces/Timeframe";

type TimeFramesTypes = keyof Timeframe

interface TimeframeContextProps {
    globalTimeframeSelected: TimeFramesTypes;
    setGlobalTimeframeSelected: (timeframeSelected: TimeFramesTypes) => void;
}

const TimeframeContext = createContext<TimeframeContextProps>({} as TimeframeContextProps);

export function TimeframeProvider({children}: {children: ReactNode}) {
    const [globalTimeframeSelected, setGlobalTimeframeSelected] = useState<TimeFramesTypes>('daily')

    function handleUpdateTimeframe(timeframe: TimeFramesTypes){
        setGlobalTimeframeSelected(timeframe)
    }

    return (
        <TimeframeContext.Provider
            value={{
                globalTimeframeSelected,
                setGlobalTimeframeSelected: handleUpdateTimeframe
            }}
        >
            {children}
        </TimeframeContext.Provider>
    )
}

export function useTimeFrameContext(){
    const selectedTimeframeContext = useContext(TimeframeContext);
    return selectedTimeframeContext
}