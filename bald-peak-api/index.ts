import * as srv from "./src/main";

srv.app.listen(srv.port, () => console.log(`Example app listening on port ${srv.port}!`));