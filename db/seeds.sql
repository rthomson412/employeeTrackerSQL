USE company;
INSERT INTO departments (name)
VALUES
 ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Salesperson", 80000, 1), 
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2),
("Account Manager", 160000, 1), 
("Accountant", 125000, 3), 
("Legal Team Lead", 250000, 4), 
("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES 
("Chet", "Baker", 1), 
("Ella", "Fitzgerald", 2), 
("Sonny", "Rollins", 3),
("Fats", "Waller", 4), 
("Sarah", "Vaughn", 5), 
("Art", "Pepper", 6), 
("Count", "Basie", 7), 
("Ornette", "Coleman", 1), 
("Nina", "Simone", 7);