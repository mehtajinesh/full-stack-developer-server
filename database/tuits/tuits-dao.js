import tuitsModel from './tuits-model.js';

export const daoFindAllTuits = () => tuitsModel.find();
export const daoCreateTuit = (tuit) => tuitsModel.create(tuit);
export const daoDeleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const daoUpdateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})