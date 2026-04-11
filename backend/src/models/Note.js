import mongoose from "mongoose";

// 1. create a schema
// 2. create a model based of that schema

// building schema
const notesSchema = new mongoose.Schema(
    {
    // what every single note will have
    title:{
        type:String,
        required:true
    },

    content: {
        type:String,
        required:true
    }
    }, 
    {timestamps:true} // mongodb by default will give you createAt, updatedAt
)

// building model 

const Note = mongoose.model("Note", notesSchema) // we will call this model as Note and it is based on the schema notesSchema

export default Note 