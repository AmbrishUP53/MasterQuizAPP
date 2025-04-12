class ExpressEroor extends Error{
    constructor(self , status , message){
        super();
        this.status = status;
        this.message = message;
    }
}
module.exports = ExpressEroor;