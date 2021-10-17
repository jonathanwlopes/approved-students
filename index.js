const approvedStudents = (listStudents, minAverage = 6) => {
  if (!listStudents) return
  const listApprovedStudents = []

  const newListStudents = [...listStudents]

  for (let i = 0; i < newListStudents.length; i++) {
    const average = calcAverage(newListStudents[i].subjects)
    newListStudents[i].average = average

    if (newListStudents[i].average >= minAverage) {
      listApprovedStudents.push(newListStudents[i])
    }
  }

  return listApprovedStudents
}

const calcAverage = (obj) => {
  const values = Object.values(obj)
  let average = 0

  for (let value of values) {
    average += value
  }
  average = average / values.length
  average = Math.round(average)
  return average
}

const listStudents = [
  {
    name: "Jonathan",
    course: "Banco de Dados",
    subjects: { fundamentals: 10, optimization: 8, algorithms: 10 },
    average: 0,
  },
  {
    name: "Alyson",
    course: "Banco de Dados",
    subjects: { fundamentals: 1, optimization: 1, algorithms: 1 },
    average: 0,
  },
  {
    name: "Letícia",
    course: "Banco de Dados",
    subjects: { fundamentals: 10, optimization: 10, algorithms: 10 },
    average: 0,
  },
]

const result = approvedStudents(listStudents)

printApprovedStudents(result)

function printApprovedStudents(listStudentsApproved) {
  console.log("Lista de alunos aprovados(as)")
  listStudentsApproved.forEach((student) => {
    const { name, average } = student
    console.log(`
    Nome: ${name}
    Média: ${average}
    `)
  })
}
