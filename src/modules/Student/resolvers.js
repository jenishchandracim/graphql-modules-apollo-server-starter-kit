// TODO: stubbed data to be removed
const allStudentsStubbedData = [
  { id: 'johnsmith', name: 'John Smith', class: 'Computer Science' },
  { id: 'jamesbull', name: 'James Bull', class: 'Art and Design' },
  { id: 'seanpaul', name: 'Sean Paul', class: 'Music' },
  { id: 'victormarch', name: 'Victor March', class: 'Cooking' },
];

const resolvers = () => ({
  Query: {
    getAllStudents: () => allStudentsStubbedData,
  },
});

module.exports = resolvers;
