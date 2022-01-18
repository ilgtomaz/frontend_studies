import app from "./app";
import "reflect-metadata";
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}.`);
})