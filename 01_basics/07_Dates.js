const myDate=new Date();
console.log(myDate);//2025-05-31T05:06:57.296Z
console.log(myDate.toString());//Sat May 31 2025 05:09:32 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat May 31 2025
console.log(myDate.toLocaleString());//5/31/2025, 6:00:43 AM
console.log(typeof(myDate));// object

let myCreatedDate=new Date("05-31-2025");
console.log(myCreatedDate.toLocaleString());//5/31/2025, 12:00:00 AM

let timeStamp=Date.now();//current time in ms
console.log(timeStamp);//1748672165501, ms from 1971 as per js rules

//turning object data to milliseco, generally for comparison purposes.
console.log(myCreatedDate.getTime());//1748649600000

myCreatedDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'GMT'
})
console.log(myCreatedDate);//2025-05-31T00:00:00.000Z
