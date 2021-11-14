class Gender {
    constructor(gender) { 
        this.gender = gender; 
        this.Pronoum = this.PronoumDict[this.gender]?? "e";
        this.Greeting = `Bem vind${this.Pronoum}!`;
    }

    PronoumDict = {
        "male": "o",
        "female": "a",
        "Attack Helicopter": "🚁"
    }
}

export default Gender;