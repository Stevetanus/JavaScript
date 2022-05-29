import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
};

function PhoneBookForm(props) {
  const initialData = {
    id: null,
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };

  const [data, setData] = useState(initialData);

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function handleSubmit(e) {
    {
      props.addUser(data);
    }
    setData(initialData);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={handleChange}
        value={data.userFirstname}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={handleChange}
        value={data.userLastname}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={handleChange}
        value={data.userPhone}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  const sortedUsers = props.users.sort((a, b) =>
    a.userLastname.localeCompare(b.userLastname)
  );
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>first name</th>
          <th style={style.tableCell}>last name</th>
          <th style={style.tableCell}>phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.length > 0 ? (
          sortedUsers.map((user, index) => {
            return (
              <tr key={index}>
                <th style={style.tableCell}>{user.userFirstname}</th>
                <th style={style.tableCell}>{user.userLastname}</th>
                <th style={style.tableCell}>{user.userPhone}</th>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function Application(props) {
  const userData = [];
  const [users, setUsers] = useState(userData);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  return (
    <section>
      <PhoneBookForm addUser={addUser} />
      <InformationTable users={users} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
