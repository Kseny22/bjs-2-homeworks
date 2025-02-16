function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Иван Иванов", "мужской", 24);
let student2 = new Student("Иван Петров", "мужской", 33);
let student3 = new Student("Алла Сидорова", "женский", 27);
let student4 = new Student("Ольга Смирнова", "женский", 30);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		console.log("Студент отчислен");
		return;
	} else if (!!marksToAdd.length) {
		this.marks.push(...marksToAdd);
	}
	return;

}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	const average = (this.marks.reduce((acc, item) => (acc + item), 0)) / this.marks.length;

	return average;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;

}
