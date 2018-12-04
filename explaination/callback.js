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
                // Trova l'elenco dei tasks dell'utente
                Tasks.findBy(
                    user.tasksId,
                    function(err, tasks) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(tasks);
                        }
                    }
                );
            }
        } 
    );
}
