const isDivisibleBy5AndEven = (num) => {
    if(Math.abs(num)%2==0&&Math.abs(num)%5==0 && num!=0)return true;
    return false;
 };


export { isDivisibleBy5AndEven };