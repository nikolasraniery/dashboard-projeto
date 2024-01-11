type TimeframeOption = {
    current: number;
    previous: number;
}

export type Timeframe = {
    daily: TimeframeOption;
    weekly: TimeframeOption;
    monthly: TimeframeOption;
}