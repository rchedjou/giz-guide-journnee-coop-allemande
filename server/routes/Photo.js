const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

//create Stand
//[name,createdAt,updatedAt,evenementId]
router.post("/add",async(req,res)=>{
    const  name = req.body.name;
    const evenementId = req.body.evenementId;

    const SavePhoto = db.Photos.build({
        name,
        evenementId
    });
    await SavePhoto.save();
    res.send("data posted!");
});


// get liste Photos

router.get("/",async(req,res)=>{
    const AllPhoto = await db.Photos.findAll();
    res.json(AllPhoto);

});

// get Photos vy Evenement by id

router.get("/:id",async(req,res)=>{
    const photos = await db.Photos.find({ where: { evenementId: req.params.id } });
    if (photos === null) {
        console.log('Not found!');
      } else {
       console.log(photos.name); // 'My type_lieux'
       res.json(photos);
      }

});

// update Photo by EvenementId

router.put("/E/:id",async(req,res)=>{
    const name = req.body.name;
    const evenementId = req.body.evenementId;
    
    await db.photos.update({
        name:name,
        evenementId:evenementId
    },{
        where:{
                evenementId:req.params.id
            },
        }
    );
//    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Update ok");
});
// update Photo by photo

router.put("/:id",async(req,res)=>{
    const name = req.body.name;
    const evenementId = req.body.evenementId;
    
    await db.photos.update({
        name:name,
        evenementId:evenementId
    },{
        where:{
                id:req.params.id
            },
        }
    );
//    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Update ok");
});

// delete Stand by id
router.delete("/:id", async(req,res)=>{
    await db.Photos.destroy({
        where: {
            [Op.or]: [
              { id:req.params.id, },
              { evenementId:req.params.id }
            ]
          },
        });
    //    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Delete ok");    
});



module.exports = router;