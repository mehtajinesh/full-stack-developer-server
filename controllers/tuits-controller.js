import posts from "./tuits.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.topic = "Web Development";
    newTuit.postedBy = {
        "username": "ReactJS"
    };
    newTuit.liked = true;
    newTuit.disliked = true;
    newTuit.verified = false;
    newTuit.handle = "ReactJS";
    newTuit.time = "2h";
    newTuit.title = "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs"
    newTuit.attachments = {
        video: "unKvMC3Y1kI"
    }
    newTuit.logoImage = "./../images/reactjs-logo.svg";
    newTuit.avatarImage = "./../images/reactjs-logo.svg";
    newTuit.stats = {
        comments: 123, retuits: 234, likes: 345, dislikes: 100
    }
    tuits.unshift(newTuit);
    res.json(newTuit);
}
const findAllTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
