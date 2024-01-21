import { NextFunction, Request, Response } from "express";
import { SuperStar_Model } from "../../Modals/superstars";
import { SortOrder } from "mongoose";
// import { Error } from "mongoose";

export const postSuperstar = async (
    req: Request,
    res: Response
) => {
    try {
        let insData = {
            rank: req.body.rank,
            name: req.body.name,
            matches: req.body.matches,
            won: req.body.won,
            loss: req.body.loss,
            power: req.body.power,
            height: req.body.height,
            weight: req.body.weight,
            chest: req.body.chest,
            biceps: req.body.biceps,
            signature: req.body.signature,
            poster_url: req.body.poster_url,
        };
        const data = await SuperStar_Model.insertMany([insData]);
        res.status(200).json({
            data,
        });
    } catch (e) {
        console.log(e);
        res.status(404).json({ err: e });
    }
};

export const getAllSuperStars = async (
    req: Request,
    res: Response
) => {
    try {
        console.log("getAllStars");
        const { sort } = req.query;
        const sortDefaultValue: SortOrder = 'asc';
        const validSortValues: SortOrder[] = ['asc', 'desc'];

        // Use the default value if `sort` is not defined or not a valid sort value
        const sort_type: SortOrder = validSortValues.includes(sort as SortOrder) ? (sort as SortOrder) : sortDefaultValue;

        const sort_query = { rank: sort_type };

        const query = {};

        const data = await SuperStar_Model.find(query).sort(sort_query);

        res.status(200).send({
            data,
        });
    } catch (e) {
        console.log(e);
        res.send({
            e,
        });
    }
};

export const deleteAstarByID = async (
    req: Request,
    res: Response,
) => {
    try {
        const { rank } = req.query;
        console.log("deleteAstar");
        const query = { rank: { $eq: rank } };
        const data = await SuperStar_Model.deleteOne(query);
        res.send({
            data,
        });
    } catch (e) {
        res.send({
            e,
        });
    }
};

export const updateByRank = async (
    req: Request,
    res: Response
) => {
    try {
        {
            console.log("updateA Star");
            const { rank } = req.params;
            const { field, value } = req.body;
            const fieldArray = [
                "rank",
                "name",
                "matches",
                "won",
                "loss",
                "power",
                "height",
                "weight",
                "chest",
                "biceps",
                "signature",
                "poster_url",
            ]
            const existsOrNot = Object.keys(req.body).every(element => fieldArray.includes(element));

            const filter = { rank };
            if (!existsOrNot)
                res.send({
                    msg: "Invalid filed name",
                    existsOrNot
                });
            const data = await SuperStar_Model.updateOne(filter, req.body);
            res.status(200).send({
                data, rank, field, value, existsOrNot
            })
        }
    } catch (e) {
        console.log(e);
        res.send({
            e
        })
    }
}
