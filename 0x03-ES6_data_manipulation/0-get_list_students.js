export default function getListStudents() {
  // Helper function to generate student objects with provided attributes
  const studentFactory = (id, name, city) => ({
    id,
    firstName: name,
    location: city,
  });

  return [
    studentFactory(1, 'Guillaume', 'San Francisco'),
    studentFactory(2, 'James', 'Columbia'),
    studentFactory(5, 'Serena', 'San Francisco'),
  ];
}
