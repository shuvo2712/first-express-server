// import express from "express";
const express = require("express");
const cors = require('cors')
const players = require("./playersData.json");
const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.get("/home", (req, res) => {
  res.send("This is Homeeeeeee");
});

app.get("/players", (req, res) => {
    console.log("total players : ", players.length);
    res.send(players);
});

app.get("/player/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log('player : ', id);
    
    const player = players.find(p => p.id === id) || {};
    res.send(player);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
