# express-simple-crud
A simple CRUD build with express.js



# dependencies 
link example crud: https://shouts.dev/nodejs-simple-crud-with-expressjs-and-mysql

npm install express
npm isntall express-flash
npm install express-session
npm install method-override
npm install mysql

# mysql 

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `books` ADD PRIMARY KEY (`id`);
ALTER TABLE `books` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;