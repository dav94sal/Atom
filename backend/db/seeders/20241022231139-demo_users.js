'use strict';

const { User } = require("../models")

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
   await User.bulkCreate([
    {
      firstName: "David",
      lastName: "Salas",
      username: "dav94sal",
      email: "d.sal@gmail.com",
      password: "password"
    },
    {
      firstName: "demo",
      lastName: "user",
      username: "demo-user",
      email: "demo.user@gmail.com",
      password: "password2"
    },
    {
      firstName: "Luna",
      lastName: "Salas",
      username: "cat_chaser",
      email: "cat_chaser@gmail.com",
      password: "password3"
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
    await queryInterface.bulkDelete('Users', {
      username: [
        "dav94sal", "demo-user", "cat_chaser"
      ]
    })
  }
};
