USE employee_db;

INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Information Technology");
INSERT INTO department (name) VALUES ("Corporate");

INSERT INTO role (title, salary, department_id) VALUES ("Analyst", 70, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Communications Associate", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Social Media Manager", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Maria", "Soares", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Andrew", "Lopez", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Tina", "Rebello", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Ivonne", "Riveira", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Rosely", "Lopes", 5);