import { createServer } from "miragejs";
import employeesList from "./nameslist";

createServer({
    routes() {
        this.get('/api/employees', () => employeesList);

        this.post("/api/employees", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);

            employeesList.push(attrs);
          })
    }
})
