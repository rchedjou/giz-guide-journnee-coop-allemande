const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

// [id,name,description,heure_debut,heure_fin,likes,dislikes,createdAt,updatedAt,journeeId,StandId]

//create Event

router.post("/add",async(req,res)=>{
    const  name = req.body.name;
    const  description = req.body.description;
    const  heure_debut = req.body.heure_debut;
    const  heure_fin = req.body.heure_fin;
    const  journeeId = req.body.journeeId;
    const StandId = req.body.StandId;

    const SaveEvent = db.Evenements.build({
        name,
        description,
        heure_debut,
        heure_fin,name,
        journeeId,
        StandId
    });
    await SaveEvent.save();
    res.send("data posted!");
});


// get liste Event

router.get("/",async(req,res)=>{
    const AllEvent = await db.Evenements.findAll();
    res.json(AllEvent);

});

// get event by id journee

router.get("/:id",async(req,res)=>{
    const event = await db.Evenements.findOne(
        { 
            where: {  
                    journeeId:req.params.journeeId 
                } 
            }
        );
    if (event === null) {
        console.log('Not found!');
      } else {
       console.log(event.name); // 'My type_lieux'
       res.json(event);
      }

});

// get event by id stand

router.get("/stand/:id",async(req,res)=>{
    const event = await db.Evenements.findOne(
        { 
            where: {  
                    standId: req.params.StandId 
                } 
            }
        );
    if (event === null) {
        console.log('Not found!');
      } else {
       console.log(event.name); // 'My type_lieux'
       res.json(event);
      }

});

// update Event by id

router.put("/:id",async(req,res)=>{
    const  name = req.body.name;
    const  description = req.body.description;
    const  heure_debut = req.body.heure_debut;
    const  heure_fin = req.body.heure_fin;
    const  journeeId = req.body.journeeId;
    const  StandId = req.body.StandId;

    await db.Evenements.update({
        name:name,
        description:description,
        heure_debut:heure_debut,
        heure_fin,name:heure_fin,
        journeeId:journeeId,
        StandId:StandId
    },{
        where:{
                id:req.params.id
            },
        }
    );
//    res.redirect("/");  Redirige vers la liste des Evenements
    res.send("Update ok");
});

// delete Event by id
router.delete("/:id", async(req,res)=>{
    await db.Evenements.destroy({
      where:{
                id:req.params.id,
            },
        });
    //    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Delete ok");    
});


module.exports = router;