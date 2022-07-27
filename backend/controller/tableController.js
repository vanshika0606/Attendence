const Table = require("../modals/tableModal");

exports.Tabledata = async (req,res,next)=>{

    const table = await Table.create(req.body);
    
    res.status(201).json({
        success:true,
        table
    })
    
}

exports.GetData = async(req,res,next) =>{
    const table = await Table.find();

    res.status(200).json({
        success:true,
        table
    })
}


exports.deleteA= (async (req, res, next) => {
    const table = await Table.findById(req.params.id);
  
   
    
    await table.remove();
  
    res.status(200).json({
      success: true,
      message: "User  Successfully",
    });
  });


  exports.Edit = async(req,res,next) =>{
    let table = await Table.findById(req.params.id);
    

    table = await Table.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators: true,
        useFindAndModify:false,
    })
    console.log(table);
    res.status(200).json({
        success: true,
        table
    })
  }

