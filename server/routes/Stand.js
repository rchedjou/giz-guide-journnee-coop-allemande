const express = require("express");
const router = express.Router();
const db = require("../models");


//create Stand

router.post("/add",async(req,res)=>{
    const  type_lieux = req.body.title;
    const position = req.body.position;
    const image_svg = req.body.image_svg;

    const SaveLieu = db.stand.build({
        type_lieux,
        position,
        image_svg
    });
    await SaveLieu.save();
    res.send("data posted!");
});


// get liste Stand

router.get("/",async(req,res)=>{
    const AllStand = await db.stand.findAll();
    res.json(AllStand);

});

// get Stand by id

router.get("/:id",async(req,res)=>{
    const stand = await db.stand.findOne({ where: { id: req.params.id } });
    if (stand === null) {
        console.log('Not found!');
      } else {
       console.log(stand.type_lieux); // 'My type_lieux'
       res.json(stand);
      }

});

// update Stand by id

router.put("/:id",async(req,res)=>{
    const type_lieux = req.body.type_lieux;
    const position = req.body.position;
    const image_svg = req.body.image_svg;
    await db.stand.update({
        type_lieux:type_lieux,
        position:position,
        image_svg:image_svg
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
    await db.stand.destroy({
      where:{
                id:req.params.id,
            },
        });
    //    res.redirect("/");  Redirige vers la liste des Stands
    res.send("Delete ok");    
});


module.exports = router;