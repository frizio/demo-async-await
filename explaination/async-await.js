// Altra soluzione alla callback hell: ASYNC-AWAIT

async function requestHandler(req, res) {

    try {
        const user = await User.findById(req.userId);
        const tasks = await Task.findById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed!');
    }
    catch(err) {
        res.send(err);
    }

}
