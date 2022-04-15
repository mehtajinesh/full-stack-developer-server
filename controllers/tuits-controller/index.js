import {daoCreateTuit, daoDeleteTuit, daoFindAllTuits, daoUpdateTuit} from "../../database/tuits/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
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
    const insertedTuit = await daoCreateTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await daoFindAllTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await daoUpdateTuit(tuitdIdToUpdate, updatedTuit);
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await daoDeleteTuit(tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
