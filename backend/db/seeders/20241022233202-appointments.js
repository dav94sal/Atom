'use strict';

const { Appointment } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Appointment.bulkCreate([
      {
        date: "10/31/2024",
        startTime: "8:00pm",
        endTime: "12:00am",
        description: "Halloween Party!",
        user_id: 1
      },
      {
        date: "10/30/2024",
        startTime: "4:00pm",
        endTime: "11:00pm",
        description: "Halloween Eve!",
        user_id: 2
      },
      {
        date: "11/1/2024",
        startTime: "8:00am",
        endTime: "8:00pm",
        description: "Bring your own Treats!",
        user_id: 3
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Appointments", {
      user_id: [1, 2, 3]
    })
  }
};
