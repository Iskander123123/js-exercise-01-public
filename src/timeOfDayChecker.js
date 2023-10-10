const determineTimeOfDay = (time) => {
    if(time >=6 && time <12) return "утро";
    if(time >=12 && time <12) return "день";
    if(time >=18 && time <12) return "вечер";
    if((time >=22 && time <24)||(time >=0 && time <6)) return "ночь";
    return "ошибка данных";
 };

export { determineTimeOfDay };