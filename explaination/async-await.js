// Altra soluzione alla callback hell: ASYNC-AWAIT

async function requestHandler(req, res) {
    
    // await User.findById(req.userId);
    // let user = await User.findById(req.userId);
    const user = await User.findById(req.userId);

}