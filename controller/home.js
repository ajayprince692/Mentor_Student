export const getHomePage = (req, res) => {
  try {
    app.get("/", (req, res) => {
      try {
        const Content = `
                    <html>
                        <head>
                            <title>Student Mentor API</title>
                            <style>
                                body {
                                    background-color: black;
                                    color:cyan;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 100vh;
                                }
                                .container {
                                    text-align: center;
                                }
                                h1 {
                                    color: #333;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1>Welcome to Mentor and Student Assigning with Database API 😊</h1>
                            </div>
                        </body>
                    </html>
                `;
        res.status(200).send(Content);
      } catch (error) {
        res.status(500).json({
          message: "Internal server Error",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
