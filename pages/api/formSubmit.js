export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/6344503e65b57a31e691bad8",
        {
          method: "PUT",
          "X-Bin-Versioning": true,
          body: JSON.stringify({
            email: email,
          }),
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2b$10$pBlmaMzNaVj2eUvi6ZhTHOG1E8ufvC.gmJFOFH4s9FUDeQqGOvYq6",
          },
        }
      );

      if (response.status === 200) {
        return res.status(200).json({ message: "Email registered" });
      } else {
        return res.status(500).json({ message: "Something went wrong" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return res.status(500).json({ msg: "This needs be to a post request" });
}
