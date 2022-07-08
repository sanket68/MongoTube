const Student = require("../app/student.js");
const assert = require("assert");

describe("Delete Tests",()=>{
    let deleter;
    beforeEach((done)=>{
        deleter=new Student({name:"Deleter"});
        deleter.save()
        .then(()=>done());
    });
        it("A delete test for deleter",(done)=>{
            Student.findByIdAndDelete(deleter._id)
            .then(()=>Student.findOne({name:"Deleter"}))
            .then((student)=>{
                assert(student===null);
                done();
            })
        })
})
