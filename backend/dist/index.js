import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";
const PORT = process.env.PORT;
connectToDataBase()
    .then(() => {
    app.listen(PORT, () => {
        console.log("Server open and connected to the Database");
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map