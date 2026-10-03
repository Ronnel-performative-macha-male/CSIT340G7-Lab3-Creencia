
const Header = (props) => {
  return (
    <header className="bg-blue-600 text-white px-8 py-6 shadow-md">
      <h1 className="text-3xl font-bold text-center">
        {props.course}
      </h1>
    </header>
  )
}

// 2. Content Component
const Content = (props) => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Course Exercises
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4">
            <span className="text-gray-700 font-medium">
              {props.part1}
            </span>
            <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full">
              {props.exercises1}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4">
            <span className="text-gray-700 font-medium">
              {props.part2}
            </span>
            <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full">
              {props.exercises2}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4">
            <span className="text-gray-700 font-medium">
              {props.part3}
            </span>
            <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full">
              {props.exercises3}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

// 3. Total Component
const Total = (props) => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6 text-center">
        <p className="text-xl font-semibold">
          Number of exercises
        </p>

        <p className="text-4xl font-bold mt-2">
          {props.total}
        </p>
      </div>
    </div>
  )
}

// 4. Footer Component
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

// 5. Main App Component
const App = () => {
  const course =
    'CIT-U Bachelor of Science in Information Technology: Industry Elective'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part3 = 'State of component'
  const exercises3 = 14

  const name = 'Ronnel P. Creencia'
  const courseCode = 'CSIT340'
  const section = 'G7'

  const total = exercises1 + exercises2 + exercises3

  return (
    <div className="min-h-screen bg-gray-100">
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
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
