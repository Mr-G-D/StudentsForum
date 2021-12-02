"use strict";

const fs = require("fs");
const csv = require("csv-parser");
const Colleges = require("../Models/Colleges");
const test = require("../Models/test");
const Course = require("../Models/Course");

// FEED
exports.feedData = async (req, res, next) => {
  let chunk = [];
  // await fs
  //   .createReadStream("./assets/data/colleges.csv")
  //   .pipe(csv({}))
  //   .on("data", (data) => {
  //     chunk.push(data);
  //   })
  //   .on("end", async () => {
  //     for (let i = 0; i < chunk.length; i++) {
  //       const college = await new Colleges({
  //         CollegeName: chunk[i]["CollegeName"]
  //           ? chunk[i]["CollegeName"].trim()
  //           : null,
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
  //         Courses: [],
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
  let index = 0;
  fs.createReadStream("./assets/data/courses.csv")
    .pipe(csv({}))
    .on("data", (data) => {
      chunk.push({
        course: data.course,
        id: index,
      });
      index++;
    })
    .on("end", () => {
      // for (let i = 0; i < chunk.length; i++) {
      //   const Courses = new Course({
      //     id: i,
      //     course: chunk[i]["course"],
      //   });
      // Courses.save().then(() => {
      //   console.log(i);
      // });
      console.log(
        chunk.filter((e) => e.course === "B.Tech Computer Science Engineering"),
      );
      res.send(chunk);
    });
};

exports.setCourses = async (req, res, next) => {
  await Colleges.deleteMany({ Courses: [0, 0] });
  res.send(" Work Done ");
  //   let chunk = [];
  //   fs.createReadStream("./assets/data/colleges.csv")
  //     .pipe(csv())
  //     .on("data", (data) => {
  //       chunk.push({
  //         name: data["CollegeName"],
  //         courses: data["Courses"].split(",").map(function (item) {
  //           return item.trim();
  //         }),
  //       });
  //     })
  //     .on("end", async () => {
  //       let chunk2 = [];
  //       let index = 0;
  //       fs.createReadStream("./assets/data/courses.csv")
  //         .pipe(csv({}))
  //         .on("data", (data) => {
  //           chunk2.push({
  //             course: data.course,
  //             id: index,
  //           });
  //           index++;
  //         })
  //         .on("end", async () => {
  //           Colleges.find({ Courses: [0] }, (err, resp) => {
  //             resp.map((value) => {
  //               Course.find(
  //                 {
  //                   course: chunk.filter(
  //                     (e) => e.name.trim() == value.CollegeName,
  //                   )[0].courses,
  //                 },
  //                 async (err, newData) => {
  //                   await Colleges.findOneAndUpdate(
  //                     { CollegeName: value.CollegeName },
  //                     {
  //                       $push: {
  //                         Courses: newData[0].id,
  //                       },
  //                     },
  //                   );
  //                   console.log(value.CollegeName);
  //                 },
  //               );
  //             });
  //           }).select({ CollegeName: 1, _id: 0 });
  //           res.send("Working");
  //         });
  //     });
};

//FETCH
exports.getColleges = (req, res, next) => {
  const data = Colleges.find({}, (err, resu) => {
    res.send(resu);
  }).select("CollegeName");
};

exports.getCourses = (req, res, next) => {
  const courses = ["0"];
  const college = req.query.college;
  if (college != null) {
    Colleges.find({ CollegeName: college }, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        await result[0].Courses.forEach((element) => {
          Course.find({ id: element }, (err, courseName) => {
            courses.push(courseName[0].course);
          }).select({ course: 1, _id: 0 });
        });
        res.send(courses);
      }
    }).select({ Courses: 1, _id: 0 });
  }
};

//SET COURSES V1

// for (let i = 114; i < chunk.length; i++) {
//   let currCourses = [];
//   for (let j = 0; j < chunk[i]["courses"].length; j++) {
//     await Course.find({ course: chunk[i]["courses"][j].trim() }).then(
//       (newData) => {
//         // if (!currCourses.includes(newData[0].id)) {
//         //   currCourses.push(newData[0].id);
//         // }
//       },
//     );
//   }
// console.log(currCourses);
// console.log(chunk[i]["name"]);

// Colleges.findOneAndUpdate(
//   { CollegeName: chunk[i]["name"] },
//   { Courses: currCourses },
//   (err, records) => {
//     console.log(currCourses);
//     console.log(chunk[i]["name"]);
//   },
// );
// }

//SET COURSES V2

// chunk2.forEach((item) => {
//   chunk
//     .filter((e) => e.courses.includes(item.course))
//     .map(async (element) => {
//       await Colleges.findOneAndUpdate(
//         {
//           CollegeName: element.name,
//         },
//         {
//           $addToSet: {
//             Courses: item.id,
//           },
//         },
//       );
//       console.log(element.name);
//       console.log(item);
//     });
// });
// console.log(
//   chunk.filter((e) =>
//     e.courses.includes("B.Tech Mechanical Engineering"),
//   ),
// );
// res.send(chunk);
// }
