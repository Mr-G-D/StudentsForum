const fs = require("fs");
const csv = require("csv-parser");
const Colleges = require("../Models/Colleges");
const test = require("../Models/test");
const Course = require("../Models/Course");

// FEED
exports.feedData = async (req, res, next) => {
  // let chunk = [];
  // await fs
  //   .createReadStream("./assets/data/colleges.csv")
  //   .pipe(csv({}))
  //   .on("data", (data) => {
  //     chunk.push(data);
  //   })
  //   .on("end", () => {
  //     for (let i = 0; i < chunk.length; i++) {
  //       const college = new Colleges({
  //         CollegeName: chunk[i]["CollegeName"] ? chunk[i]["CollegeName"] : null,
  //         GendersAccepted: chunk[i]["GendersAccepted"]
  //           ? chunk[i]["GendersAccepted"]
  //           : null,
  //         CampusSize: chunk[i]["CampusSize"] ? chunk[i]["CampusSize"] : null,
  //         TotalStudents: chunk[i]["TotalStudents"]
  //           ? chunk[i]["TotalStudents"]
  //           : null,
  //         TotalFacilities: chunk[i]["TotalFacilities"]
  //           ? chunk[i]["TotalFacilities"]
  //           : null,
  //         EstablishedYear: chunk[i]["EstablishedYear"]
  //           ? chunk[i]["EstablishedYear"]
  //           : null,
  //         Rating: chunk[i]["Rating"] ? chunk[i]["Rating"] : null,
  //         University: chunk[i]["University"] ? chunk[i]["University"] : null,
  //         Courses: "yet to add",
  //         Facilities: chunk[i]["Facilities"] ? chunk[i]["Facilities"] : null,
  //         City: chunk[i]["City"] ? chunk[i]["City"] : null,
  //         State: chunk[i]["State"] ? chunk[i]["State"] : null,
  //         Country: chunk[i]["Country"] ? chunk[i]["Country"] : null,
  //         CollegeType: chunk[i]["CollegeType"] ? chunk[i]["CollegeType"] : null,
  //         AverageFees: chunk[i]["AverageFees"] ? chunk[i]["AverageFees"] : null,
  //       });
  //       college.save().then(() => {
  //         console.log(i);
  //       });
  //     }
  //   });

  console.log("work Done");
  res.send("Completed");
};

exports.feedCourses = (req, res, next) => {
  let chunk = [];
  fs.createReadStream("./assets/data/courses.csv")
    .pipe(csv({}))
    .on("data", (data) => {
      chunk.push(data);
    })
    .on("end", () => {
      // for (let i = 0; i < chunk.length; i++) {
      //   const Courses = new Course({
      //     id: i,
      //     course: chunk[i]["course"],
      //   });
      //   Courses.save().then(() => {
      //     console.log(i);
      //   });
      res.send(chunk);
      // }
    });
};

//FETCH
exports.getColleges = (req, res, next) => {
  const data = Colleges.find({}, (err, resu) => {
    res.send(resu);
  }).select("CollegeName");
};

exports.getCourses = (req, res, next) => {
  Course.find({ id: 119 }, (err, resp) => {
    res.send(resp);
  });
};
