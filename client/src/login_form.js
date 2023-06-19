import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [user, setUser] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    //     const response = await fetch("http://localhost:4567/todo", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         todo: todo,
    //         category: category,
    //         user: user,
    //       }),
    //     });
    //     if (response.ok) {
    //       console.log("Data successfully sent to database!");
    //       alert("Data successfully sent to database!");
    //     } else {
    //       console.error("Error sending data to database:", response.status);
    //     }
    //   };

    return (
      <div>
        <h2>
          Please enter in your Todo that you would like to get done and your
          name as ID..
        </h2>

        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {/* <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          User:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <br /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default LoginForm;
