const express = require('express');

const { decodeJWT, requireAuth } = require('../../utils/auth');
const { Note } = require('../../db/models');

const router = express.Router();

// Get all notes
router.get(
    '/',
    requireAuth,
    async (req,res,next) => {
        try {
            const { id } = decodeJWT(req);

            const notes =  await Note.findAll({
                where: { user_id: id }
            })

            return res.json(notes)
        } catch (error) {
            next(error)
        }
    }
)

// Get note by id
router.get(
    '/:noteId',
    requireAuth,
    async (req,res,next) => {
        try {
            const { id }= decodeJWT(req);

            const note = await Note.findByPk(req.params.noteId)

            let err;
            if (!note) {
                err = new Error("Note not found");
                err.title = "Not Found"
                err.status = 404
            }
            else if (note.user_id !== id) {
                err = new Error("Unauthorized");
                err.title = "Unauthorized"
                err.status = 401
            }

            if (err) throw err

            return res.json(note)
        } catch (error) {
            next(error)
        }
    }
)

// Create new note
router.post(
    '/',
    requireAuth,
    async (req,res,next) => {
        try {
            const { title, type, note } = req.body
            const { id } = decodeJWT(req);

            const newNote = await Note.create({
                title,
                type,
                note,
                user_id: id
            })

            return res.json(newNote)

        } catch (error) {
            next(error)
        }
    }
);

// Update note
router.put(
    '/:noteId',
    requireAuth,
    async (req,res,next) => {
        const { title, type, note } = req.body
        const { id } = decodeJWT(req)

        try {
            const oldNote = await Note.findByPk(req.params.noteId)

            console.log(oldNote)
            let err;
            if (!oldNote) {
                err = Error("Note not Found");
                err.title = "Not Found";
                err.status = 404
            }
            else if (oldNote.user_id !== id) {
                err = Error("Unauthorized");
                err.title = "Unauthorized";
                err.status = 401
            }

            if (err) throw err;

            await Note.update({
                title,
                type,
                note,
                user_id: id
            },
            {
                where: {
                    id: req.params.noteId
                }
            })

            return res.json({
                title, type, note
            })

        } catch (error) {
            next(error)
        }
    }
)

// Delete note
router.delete(
    '/:noteId',
    requireAuth,
    async (req,res,next) => {
        try {
            await Note.destroy({
                where: {
                    id: req.params.noteId
                }
            })
            res.json({message: "success!"})
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;
