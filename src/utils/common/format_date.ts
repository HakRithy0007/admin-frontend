import dayjs from "dayjs";

export const formatDate = (date: string | Date): string => {
    return dayjs(date).format('YYYY-MM-DD');
}

export const formatTime = (dateTime: string | Date): string => {
    return dayjs(dateTime).format("HH:mm:ss");
};