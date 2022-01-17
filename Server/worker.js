class Worker{
    constructor(id, firstName, lastName, imagePath, team, descripton, email){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.imagePath=imagePath;
        this.team=team;
        this.descripton=descripton;
        this.email=email;
    }
}

module.exports = Worker;