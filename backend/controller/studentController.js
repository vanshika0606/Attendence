const Student = require("../modals/studentModal");

exports.CheckIn = async (req, res, next) => {
  const roll = req.body.rollNo;
  const name = req.body.name;

  var checkIn = new Date().toLocaleTimeString();

  var student = await Student.find({ rollNo: roll });

  var date = new Date().toDateString();

  if (student.length != 0) {
    student.forEach((e) => {
      e.DateOfCheckIn = date;
    });

  } else {
    var student = await Student.create({
      rollNo: roll,
      name: name,
      checkIn: checkIn,
      DateOfCheckIn: date,
    });
  }
  res.status(201).json({
    success: true,
    message: `${name} with ${roll} Roll Number Checked In successfully`,
  });
};

exports.checkOut = async (req, res, next) => {
  const rollNo = req.body.rollNo;
  const name = req.body.name;

  var date;
  date = new Date();
  date = date.toLocaleTimeString();

  var student = await Student.find({ rollNo: rollNo });

  var checkOut;

  student.forEach((s) => {
    checkOut = s.checkOut;
  });

  if (checkOut == null) {
    var student = await Student.updateOne(
      { rollNo: rollNo },
      {
        $set: {
          checkOut: date,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: `${name} with ${rollNo} Checked Out successfully`,
    });
  } else {
    res.status(200).json({
      success: true,
      message: `${name} with ${rollNo} already Checked Out successfully`,
    });
  }
};

exports.studentInSchool = async (req, res, next) => {
  var date = new Date().toDateString();

  const student = await Student.find({ DateOfCheckIn: date });

  var studentInSchool = 0;

  student.forEach((s) => {
    if (s.checkOut == null) {
      studentInSchool++;
    }
  });

  res.status(200).json({
    success: true,
    message: `${studentInSchool} Students present in School`,
  });
};
