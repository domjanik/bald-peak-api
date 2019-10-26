import * as srv from "./src/main";
import * as db from "./src/services/databaseService";

srv.app.listen(srv.port, () => {
    console.log(`Example app listening on port ${srv.port}!`);
    db.prepareDB();
});
