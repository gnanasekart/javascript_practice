function course()
{
    this.topic="selenium";
    this.duration="20 hrs";
}
    
    var obj_course = new course();
    console.log(obj_course.topic+"---"+obj_course.duration);


function Student(name, Id)
{
    this.name = name;
    this.Id = Id;
}

var obj_stud = new Student("gnana", 101);
console.log(obj_stud.name+ "---" +obj_stud.Id);