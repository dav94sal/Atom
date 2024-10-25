const express = require('express')

const { requireAuth } = require('../../utils/auth')
const { Appointment } = require('../../db/models')

const router = express.Router();

// Get Appointments by week
router.get(
    "/:startDay/:endDay",
    requireAuth,
    async (req, res, next) => {

    }
)

// create Appointment
router.post(
    "/new",
    requireAuth,
    async(req, res, next) => {

    }
)

// Edit Appointment
router.put(
    "/:apptId/edit",
    requireAuth,
    async(req, res, next) => {

    }
)

// Delete Appointment
router.delete(
    "/:apptId",
    requireAuth,
    async(req, res, next) => {

    }
)

module.exports = router
