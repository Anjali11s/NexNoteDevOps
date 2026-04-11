import express from 'express';
import { createANote, deleteNote, getAllNotes, updateNote,getNotes } from '../controllers/notesControllers.js';
const router = express.Router(); // create a router instance so that we can use it to define our routes and use it all at one place in esrver.js

router.get("/",getAllNotes);

router.get("/:id",getNotes);

router.post("/",createANote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);


export default router; // export the router instance so that we can use it in server.js