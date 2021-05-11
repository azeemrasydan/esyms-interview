//------------ Routing via Auth ------------//
module.exports = {
    isPersonnel: (req, res, next) => {
        if (req.user.group == 1) {
            
            return next();
        }
        
        res.redirect('/');
    },
    isPatient: (req, res, next) => {
        if (req.user.group == 2) {
            return next();
        }
        res.redirect('/');
    }
};