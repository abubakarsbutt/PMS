import workSpaceModel from "../model/workspaceModel.js";

export const createWorkspace = async (req, res) => {
  const { name, font, primaryColor, secondaryColor, timeZone, members } =
    req.body;

  try {
    const workspaceExists = await workSpaceModel.findOne({ name });
    if (workspaceExists) {
      return res.status(400).json({ msg: "Workspace Already Exists" });
    }

    const newWorkspace = await workSpaceModel.create({
      name,
      font,
      primaryColor,
      secondaryColor,
      timeZone,
      members,
    });

    res.status(400).json({ newWorkspace });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export default { createWorkspace };
