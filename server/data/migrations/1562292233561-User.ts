import {MigrationInterface, QueryRunner} from "typeorm";

export class User1562292233561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "passwordHash" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
