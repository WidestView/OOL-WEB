const PronoumDict = {}
PronoumDict["male"] = "o";
PronoumDict["female"] = "a";
PronoumDict["Attack Helicopter"] = "🚁";

export const Pronoum = (gender) => PronoumDict[gender]?? "e";
export const Greeting = (gender) => `Bem vind${Pronoum(gender)}!`;
