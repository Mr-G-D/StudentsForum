exports.feedUsers = async (req, res, next) => {
  const colleges = await Colleges.find();
  res.json(colleges[50].CollegeName);
  const response = await axios.get(
    "https://www.breakingbadapi.com/api/characters",
  );
  for (let index = 0; index < 40; index++) {
    const currCourse = await Course.find({
      id: Math.floor(Math.random(0, 11935) * 11935),
    }).select({
      course: 1,
      _id: 0,
    });
    const newUser = await User.create({
      firstName: response.data[index].name.split(" ")[0],
      lastName: response.data[index].name.split(" ")[1],
      emailID: response.data[index].nickname.split(" ")[0] + "@outlook.com",
      password: response.data[index].char_id,
      dateOfBirth: new Date(),
      college: colleges[index + 50].CollegeName,
      course: currCourse[0]?.course,
      courseBegin: new Date(),
      courseEnd: new Date(),
      admin: false,
    });
    newUser.save();
    console.log(response.data[index].name);
  }
};

exports.deleteUsers = async () => {
  await User.deleteMany({ admin: false });
};

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
