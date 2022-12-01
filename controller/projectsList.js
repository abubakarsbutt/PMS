import listModel from "../model/listModel.js";

const projectList = async (req, res) => {
  const {
    project,
    milestone,
    task,
    id,
    type,
    assignee,
    group,
    Status,
    expected,
    estimated,
    tracked,
    start,
    due,
    closed,
    qa,
    created,
    bgColor,
    grey,
    img,
  } = req.body;

  const newList = await listModel.create({
    project,
    milestone,
    task,
    id,
    type,
    assignee,
    group,
    Status,
    expected,
    estimated,
    tracked,
    start,
    due,
    closed,
    qa,
    created,
    bgColor,
    grey,
    img,
  });
  res.status(200).json({ List: newList });
};

export default projectList;
