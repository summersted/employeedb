import { createServer, Model } from "miragejs";
import employeesInitList from "./nameslist";

let employeeData = employeesInitList;
createServer({
    models: {
        employee: Model
    },

    seeds(server) {
        server.createList('employee', 0)
        employeeData.forEach((row) => {
            server.create('employee', row)
        })
    },

    routes() {
        this.get("/api/employees", (schema) => {
            return schema.employees.all();
        });

        this.get("/api/employees/:id", (schema, request) => {
            let id = request.params.id;

            return schema.employees.find(id);
        });

        this.post("/api/employees", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            return schema.employees.create(attrs);
        });

        this.patch("/api/employees/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody);
            let id = request.params.id;
            let employee = schema.employees.find(id);

            return employee.update(newAttrs);
        });

        this.delete("/api/employees/:id", (schema, request) => {
            let id = request.params.id;
            console.log(id);
            schema.employees.find(id).destroy();
            // return schema.employees.findBy((raw) => raw.id == id).destroy();
        })
    }
})
