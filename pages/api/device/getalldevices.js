import dbConnect from "utils/dbConnect"; // import db connexion
import Device from "models/Device"; //import db model

dbConnect();

export default async (req, res) => {
  try {
    let find = await Device.find({});
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
