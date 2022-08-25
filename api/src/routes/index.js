import express from "express";
import lawsuits from "./lawsuitsRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Welcome to the Lawsuits finder API!" })
    });

    app.use(
        express.json(),
        lawsuits
    );
}

export default routes;