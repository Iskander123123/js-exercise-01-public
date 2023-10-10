const isHappyTicket = (number) => {
    let a = 0;
    let b = 0;
    for(let i = 0;i<number.length/2;i++) a+=parseInt(number[i]);
    for(let i = number.length/2;i<number.length;i++) b+=parseInt(number[i]);
    if(a==b)return true;
    else return false;
};

export { isHappyTicket };