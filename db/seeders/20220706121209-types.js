module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Types', [
    //   {
    //   typeName: 'Комната',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   typeName: 'Квартира',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   typeName: 'Дом',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }
  // ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, { restartIdentity: true, truncate: true });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
