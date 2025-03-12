export const API_Key = 'AIzaSyBIr9nic1tdAWqj5Fxwc6HL-8Epw7Ifa4E';
export const value_converter = (value)=>{
    if(value >= 1000000)
    {
        return Math.floor(value/1000000) + 'M';
    }
    else if(value >= 1000)
    {
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}