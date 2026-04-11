import Note from "../models/Note.js"

export async function getAllNotes(req,res){ // now we can directly write '/' instread of '.api/notes' because we have already defined the base route in server.js
    // res.status(200).send("You just fetched the notes");
    try {
        const notes = await Note.find().sort({createdAt:-1})    // -1 will sort in desc order (latest first)
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getting all notes: ",error)
        res.status(500).json({message: "Internal Server Error"})
    }

}; 

export async function getNotes(req,res){
    try {
        const getNote = await Note.findById(req.params.id);
        if(!getNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(getNote);
    } catch (error) {
        console.error("Error finding the note",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function createANote(req,res) {
    // res.status(201).send("Notes created successfully");
    try {
        const {title,content} = req.body
        const note = new Note({title,content}) // since title=title and content=content here so we can shorten it and just write title,content instead title:title,content:content
        const savedNote = await note.save()

        res.status(201).json(savedNote)
    } catch (error) {
        console.log("Error writing notes: ",error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function updateNote(req,res){

    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{new:true});
        if(!updatedNote) return res.status(404).json({message: "note not found"});
        // res.status(200).json({message: "notes updated successfully"});
        res.status(200).json(updatedNote) ; 

    } catch (error) {
        console.error("error updating the note: ",error);
        res.status(500).json({message:"Internal server error"});
    }

   
}

export async function deleteNote (req,res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({message:"id not found"});
        res.status(200).json({message:"notes deleted successfully"});
    } catch (error) {
        console.error("Error deleting the note: ",error);
        res.status(500).json({message:"Internal server error"});    
    }
};