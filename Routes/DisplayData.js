const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory])
    }catch (error){
     console.error(error.message);
     res.send("Server Error")
    }
})

module.exports = router;

// router.post('/foodData', async (req, res) => {
//     try {
//       // Assuming global.food_items and global.foodCategory are promises
//       const [foodItems, foodCategory] = await Promise.all([global.food_items, global.foodCategory]);
  
//       res.send([foodItems, foodCategory]);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Server Error");
//     }
//   });
  