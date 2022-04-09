"use strict";

const home = (req, res) => {
    res.render("../views/home/index.ejs");
}

const login =  (req, res) =>{
    res.render("../views/home/login.ejs");
}

module.exports = {
    // home: home,
    // login: login,
    home,
    login,
};

