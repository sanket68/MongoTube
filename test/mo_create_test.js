const Student = require("../app/student.js");
const assert = require("assert");

describe("Create records", () => {
    it("Create user in DB", () => {
        //assert(false);
        const sanket = new Student({ name: "Sanket" });
        sanket.save()
            .then(() => {
                assert(!sanket.isNew);
            })
            .catch(() => {
                console.log("error");
            })
    });
});
