
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("hi")

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("Hi")

const string = "Let's have dinner together!";
function sayHiToHeadphonedRoommate(string) {
    if (string === ("Let's have dinner together!")) {
        return "I would love to!";
        if (string === string.toUpperCase()) {
            return "YES INDEED!";
            if (string === string.toLowerCase()) {
                return "I can't hear you!"
            }
        }
    }

}
console.log(sayHiToHeadphonedRoommate())
console.log(string === string.toUpperCase())
