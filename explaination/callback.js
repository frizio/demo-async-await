// Problema: CALLBACKS
function requestHandler(req, res) {
    // Gestore di richieste. (Tipica funzionalitò di un server in Node js).
    // Trova un utente in un database
    User.findById( 
        req.userId, 
        function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        } 
    );
}
