const express = require("express");
const router = express.Router();
const db = require("../models");


// [id 	texte,evenementId]

//create Event

router.post("/add",async(req,res)=>{
    const  texte = req.body.texte;
    const  evenementId = req.body.evenementId;

    const SaveComment = db.Commentaires.build({
        texte,
        evenementId
    });
    await SaveComment.save();
    res.send("data posted!");
});


// get liste Event

router.get("/",async(req,res)=>{
    const AllComment = await db.Commentaires.findAll();
    res.json(AllComment);

});

// get event by Event

router.get("/:id",async(req,res)=>{
    const comment = await db.Commentaires.findOne(
        { 
            where: {  
                    evenementId: req.params.evenementId 
                } 
            }
        );
    if (comment === null) {
        console.log('Not found!');
      } else {
       console.log(comment.texte); // 'My type_lieux'
       res.json(comment);
      }

});


// update Event by id
/* 
router.put("/update/:id",async(req,res)=>{
    const  texte = req.body.texte;
    const  evenementId = req.body.evenementId;

   await db.Commentaires.update({
        texte,
        evenementId
    },{
        where:{
                id:req.params.id
            },
        }
    );
//    res.redirect("/");  Redirige vers la liste des Evenements
    res.send("Update ok");
}); */

// delete Event by id
router.delete("/:id", async(req,res)=>{
    await db.Commentaires.destroy({
      where:{
                id:req.params.id,
            },
        });
    //    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Delete ok");    
});



module.exports = router;