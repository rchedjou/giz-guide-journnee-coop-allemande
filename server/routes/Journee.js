const express = require("express");
const router = express.Router();
const db = require("../models");


// create journee

router.post("/add",async(req,res)=>{
    const  title = req.body.title;
    const heure_debut = req.body.heure_debut;
    const heure_fin = req.body.heure_fin;

    const SaveJournee = db.Journee.build({
        title,
        heure_debut,
        heure_fin
    });
    await SaveJournee.save();
    res.send("data posted!");
});


// get liste journee

router.get("/",async(req,res)=>{
    const alljournee = await db.Journee.findAll();
    res.json(alljournee);

});

// get journee by id

router.get("/:id",async(req,res)=>{
    const journee = await db.Journee.findOne({ where: { id: req.params.id } });
    if (journee === null) {
        console.log('Not found!');
      } else {
       console.log(journee.title); // 'My Title'
       res.json(journee);
      }

});

// update journee by id

router.put("/:id",async(req,res)=>{
    const title = req.body.title;
    const datedb = req.body.heure_debut;
    const datefn = req.body.heure_fin;
    db.Journee.update({
        title:title,
        heure_debut:datedb,
        heure_fin:datefn
    },{
        where:{
                id:req.params.id
            },
        }
    );
//    res.redirect("/");  Redirige vers la liste des journees
    res.send("Update ok");
});

// delete journee by id
router.delete("/:id", async(req,res)=>{
    db.Journee.destroy({
      where:{
                id:req.params.id,
            },
        });
    //    res.redirect("/");  Redirige vers la liste des journees
    res.send("Delete ok");    
});

module.exports = router;