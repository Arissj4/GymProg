import React, { type ReactElement } from 'react'

type pageProps = {
  programs: string[],
}

const UserExercisePrograms = ({ programs }: pageProps): ReactElement => {
  return (
    <div>
      <h1>User Exercise Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program}>{program}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserExercisePrograms