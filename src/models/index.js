const User = require("./User.model");
const Profile = require("./Profile.model");
const Speciality = require("./Speciality.model");
const GroupModel = require("./Group.model");
const SubjectModel = require("./Subject.model");
const SemesterModel = require("./Semester.model");

User.hasOne(Profile, { foreignKey: "userId" });
Profile.belongsTo(User, { foreignKey: "userId" });

Speciality.hasMany(User);
User.belongsTo(Speciality);

Speciality.hasMany(GroupModel);
GroupModel.belongsTo(Speciality);

GroupModel.hasMany(User);
User.belongsTo(GroupModel);

GroupModel.hasMany(SemesterModel);
SemesterModel.belongsTo(GroupModel);

SemesterModel.hasMany(SubjectModel);
SubjectModel.belongsTo(SemesterModel);

SubjectModel.belongsToMany(User, {
  as: "teachers",
  scope: { role: "teacher" },
  through: "TeacherSubjects",
});
User.belongsToMany(SubjectModel, {
  through: "TeacherSubjects",
  as: "subjects",
});

module.exports = {
  User,
  Profile,
};
