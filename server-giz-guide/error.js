export const createError = (statut,message) =>{
    const errw = new Error();
    errw.statut=statut;
    errw.message=message;
    return errw;
}