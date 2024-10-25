const express = require('express')

const { requireAuth, decodeJWT } = require('../../utils/auth')
const { Appointment } = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

// Get Appointments by week
router.get(
    "/:startDay/:endDay",
    requireAuth,
    async (req, res, next) => {
        const { id } = decodeJWT(req)
        let { startDay, endDay } = req.params

        const appointments = await Appointment.findAll({
            where: {
                user_id: id,
                date: {
                    [Op.between]: [startDay, endDay]
                }
            }
        })
        return res.json(appointments)
    }
)

// create Appointment
router.post(
    "/new",
    requireAuth,
    async(req, res, next) => {
        const { id } = decodeJWT(req)
        const { date, startTime, endTime, description } = req.body

        try {
            const newAppointment = await Appointment.create({
                date, startTime, endTime, description, user_id: id
            })

            return res.json(newAppointment)

        } catch (error) {
            next(error)
        }
    }
)

// Edit Appointment
router.put(
    "/:apptId/edit",
    requireAuth,
    async(req, res, next) => {
        const { date, startTime, endTime, description } = req.body

        try {
            await Appointment.update({
                date, startTime, endTime, description
            },
            {
                where: {
                    id: req.params.apptId
                }
            })

            return res.json({
                date, startTime, endTime, description
            })

        } catch (error) {
            next(error)
        }
    }
)

// Delete Appointment
router.delete(
    "/:apptId",
    requireAuth,
    async(req, res, next) => {
        try {
            await Appointment.destroy({
                where: {
                    id: req.params.apptId
                }
            })
            res.json({message: "success!"})
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router
