--populate department table
INSERT INTO department(dept_name)
VALUES
('Engineering'),
('Sales'),
('Legal'),
('Human Resources'),
('Administration'):

-- populate roles table
INSERT INTO roles(title, salary, department_id)
VALUES
('Jr Software Engineer', 75000, 1),
('Sr Software Engineer', 100000, 1),
('Tech Lead', 120000, 1),

('Sales Manager', 90000, 2),
('Salesperson', 70000, 2),

('Legal Team Lead', 150000, 3),
('Lawyer', 125000, 3),

('Human Resources Clerk', 45000, 4),
('Director of Human Resources', 90000, 4),

('Vice President', 115000, 5),
('CEO', 250000, 5);


--populate employees table
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Alisa', 'Florence', 11, 0),
('Dexter','Goldman', 10, 1),
('Ellie','Elington', 9, 2),
('Betty','Crocker', 8, 3),
('Saul','Goodman', 7, 6),
('Cooper','Florence', 6, 1),
('Vic','Vinegar', 5, 4),
('Walter','White', 4, 1),
('Dave','Toth', 3, 1),
('Brendan','Toth', 2, 9),
('Mason','Toth', 1, 9);