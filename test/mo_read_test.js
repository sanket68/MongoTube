const Student = require("../app/student.js");
const assert = require("assert");

describe("Read Tests",()=>{
    let reader;
    beforeEach((done)=>{
        reader=new Student({name:"Reader"})
        reader.save()
        .then(()=>{
            done();
        })
        .catch(()=>{
            console.log("Error in reading");
        })
    })
    it("Read a user:Reader",()=>{
        Student.find({name:"Reader"})
        .then((students)=>{
          //id is a BSON value so convert it for comparision
          assert(reader._id.toString()===students[0]._id.toString())
          done();  
        })
    })
})
