
const Header = (props) => {
  return (
    <header className="bg-blue-600 text-white px-8 py-6 shadow-md">
      <h1 className="text-3xl font-bold text-center">
        {props.course}
      </h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4">
      <span className="text-gray-700 font-medium">
        {props.part.name}
      </span>

      <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full">
        {props.part.exercises} Units
      </span>
    </div>
  )
}

const Content = (props) => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Course Subjects
        </h2>

        <div className="space-y-4">
          <Part part={props.part1} />
          <Part part={props.part2} />
          <Part part={props.part3} />
        </div>
      </div>
    </main>
  )
}

const Total = (props) => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6 text-center">
        <p className="text-xl font-semibold">
          Total Units
        </p>

        <p className="text-4xl font-bold mt-2">
          {props.total}
        </p>
      </div>
    </div>
  )
}

const Footer = (props) => {
  return (
    <footer className="mt-10 bg-gray-800 text-white py-6">
      <div className="text-center">
        <p className="text-lg font-semibold">
          {props.name}
        </p>

        <p className="text-gray-300 mt-1">
          {props.courseCode} - {props.section}
        </p>
      </div>
    </footer>
  )
}

const App = () => {
  const course =
    'Bachelor of Science in Information Technology'

  const part1 = {
    name: 'CSIT340 - Industry Elective 1',
    exercises: 3
  }

  const part2 = {
    name: 'CSIT321 - Web Development',
    exercises: 3
  }

  const part3 = {
    name: 'CSIT311 - Database Systems',
    exercises: 4
  }

  const name = 'Ronnel P. Creencia'
  const courseCode = 'CSIT340'
  const section = 'G7'

  const total =
    part1.exercises +
    part2.exercises +
    part3.exercises

  return (
    <div className="min-h-screen bg-gray-100">
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total total={total} />

      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App
