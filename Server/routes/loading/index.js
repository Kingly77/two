const load = require('express').Router();
const db = require('../../models');

load.get('/load/:id',async (req,res)=>{

    console.log('DO LOAD');

    const {id: saveID} = req.params;
    const perSec = await    db.save.savps.findOne({where: {saveID}})
    const units = await     db.save.savunit.findOne({where: {saveID}})
    const upgrades = await  db.save.savUp.findOne({where: {saveID}})
    const perClick = await  db.save.savpc.findOne({where: {saveID}})
    const hide = await      db.save.savhid.findOne({where: {saveID}})

    if(units === null) return res.status(400).json({});

    console.log(upgrades.toJSON())

    res.json(
        {
            persec:     {...(perSec.toJSON())},
            units:      {...(units.toJSON())},
            upgrade:    {...(upgrades.toJSON())},
            perclick:   {...(perClick.toJSON())},
            hide:       {...(hide.toJSON())},

        }
    )

})

module.exports = load;