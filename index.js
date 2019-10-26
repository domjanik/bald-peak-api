"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const srv = require("./src/main");
const db = require("./src/services/databaseService");
srv.app.listen(srv.port, () => {
    console.log(`Example app listening on port ${srv.port}!`);
    db.prepareDB();
});
//# sourceMappingURL=index.js.map