// Soluzione alla callback hell: PROMISES

function requestHandler(req, res) {
    // Promise: then + catch
    User.findById(req.userId)
        // Gestione del dato che si aspetta
        .then(
            function(user)  {
                res.send(user);
            }
        )
        // Gestione dell'errore
        .catch(
            function(err) {
                res.send(err);
            }
        );
}