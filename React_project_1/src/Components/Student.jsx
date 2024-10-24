export const Student = (props) => {
  return (
    <div className="Student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Marriedal status</th>
            <td>{props.isMarried ? "Yes" : "No" }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// default props
Student.defaultProps={
  name: "No name",
  age: 0,
}