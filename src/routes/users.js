const express = require("express");
const UserRepo = require("../repos/user-repo");

const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await UserRepo.find();

    res.send(users);
});

router.get('/users/:id', async (req, res) => {
    const {
        id
    } = req.params;

    const user = await UserRepo.findById(id);
    if (user) {
        return res.send(user);
    }
    return res.sendStatus(404);
});

router.post('/users', async (req, res) => {
    const {
        username,
        bio
    } = req.body;
    const user = await UserRepo.insert(username, bio);
    if (user) {
        return res.send(user)
    }
    return res.sendStatus(404);

});

router.put('/users/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const {
        username,
        bio
    } = req.body;
    const user = await UserRepo.update(id, username, bio);
    if(user){
        return res.send(user);
    }
    return res.status(404).send("Cannot find user with given id!");
});

router.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    const user = await UserRepo.delete(id);
    if(user){
        return res.send(user);
    }else{
        return res.status(404).send("Cannot find user with given id!");
    }
});

module.exports = router;