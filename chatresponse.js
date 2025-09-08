let hour = rtnDate()[1] % 12
    hour = hour < 10  ?  '0' + hour : hour;

let minute = rtnDate()[5];
    minute = minute < 10 ? '0' + minute : minute;
let second = rtnDate()[6];
    second = second < 10 ? '0' + second : second;
let ampm = rtnDate()[1] >= 12 ? 'PM' : 'AM';

const response = [
    {
        key: 'date',
        replies: [
            `Today's date is ${rtnDate()[3]} ${rtnDate()[7]} ${rtnDate()[2]}`,
            `${rtnDate()[3]} ${rtnDate()[7]} ${rtnDate()[2]}`,
            `Ok, Today is ${rtnDate()[4]}`,
            `${rtnDate()[7]} ${rtnDate()[2]+1}`,
            `Thnk you for asking: ${rtnDate()[3]} ${rtnDate()[7]} ${rtnDate()[2]}`
        ]
    },
    {
        key: 'time',
        replies: [
            `the  time is ${hour}: ${minute} ${second} ${ampm}`,
            `${hour}: ${minute} ${second} ${ampm}`,
            `The current time when you make this request is: ${hour}: ${minute} ${second} ${ampm}`,
            `It's ${hour}: ${minute} ${second} ${ampm}`,
            `${hour}: ${minute} ${second} ${ampm}`,
        ]
    },
]


function rtnDate(){
    let dte = new Date();
    let mnt = dte.getMonth();
    let date = dte.getDate()
    let tdy = dte.getDay();
    let hr = dte.getHours();
    let yr = dte.getFullYear();
    let min = dte.getMinutes();
    let sec = dte.getSeconds();
    
    

    let monArr = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ]


    return[mnt, hr, yr, date, tdy, min, sec, monArr[mnt]];
}

const notRecognize = [
    'I don\'t understand, say that again, please',
    'say that again'
]   