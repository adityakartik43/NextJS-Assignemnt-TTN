import data from "@/data/data.json";

export async function GET(req, { params }) {

  const { id } = await params;
  const teacherId = parseInt(id);

  const filteredStudents = data.students.filter(
    (student) => student.teacherId === teacherId
  );

  return Response.json(filteredStudents);
}
