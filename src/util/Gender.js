class Gender {
    constructor(gender) { 
        this.gender = gender.toLowerCase(); 
        this.Pronoum = this.PronoumDict[this.gender]?? "e";
        this.Greeting = `Bem vind${this.Pronoum}!`;
    }

    PronoumDict = {
        "male": "o",
        "masculino": "o",
        "female": "a",
        "feminino": "a",
        "Attack Helicopter": "🚁"
    }
}

export default Gender;