export const getTodayAsIsoString = (): string => {
    return new Date().toISOString().split('T')[0];
};

export const generateDateFromISOString = (date: string): Date => {
    return new Date(date + 'T00:00:00.000Z');
};

export const isTodayOrYesterday = (date: Date): boolean => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    today.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const isYesterday = date.getTime() === yesterday.getTime();
    const isToday = date.getTime() === today.getTime();

    return isYesterday || isToday;
};
