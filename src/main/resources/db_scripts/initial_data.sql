INSERT INTO `jhi_authority` VALUE('ROLE_ALUMNO');
INSERT INTO `jhi_authority` VALUE('ROLE_PROFESOR');

ALTER TABLE alumno ADD COLUMN user_id BIGINT(20);
ALTER TABLE profesor ADD COLUMN user_id BIGINT(20);
