// Soluzione alla callback hell: PROMISES

function requestHandler(req, res) {
    // Promise: then + catch
    User.findById(req.userId)
        // Gestione del dato che si aspetta
        .then(
            function(user)  {
                return Tasks.findBy(user.tasksId);
            }
        )
        .then(
            function(tasks) {
                // Modifica del dato ottenuto dalla consultazione precedente
                tasks.completed  = true;
                tasks.save();
            }
        )
        // Gestione dell'errore
        .catch(
            function(errors) {
                res.send(errors);
            }
        );
}