const { response } = require("express");

const getUsers = (req, res = response) => {
  const { name = "not fund" } = req.query;
  res.json({
    msg: "get API - controller",
    name,
  });
};

const createUsers = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: "create API - controller",
    name: name,
    age: age,
  });
};

const updateUsers = (req, res = response) => {
  res.json({
    msg: "update API - controller",
    id: req.params.id,
  });
};

const deleteUsers = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
