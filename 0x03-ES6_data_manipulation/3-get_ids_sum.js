import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students = getListStudents()) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
