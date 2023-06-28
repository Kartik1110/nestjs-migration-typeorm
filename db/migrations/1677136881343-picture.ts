import { MigrationInterface, QueryRunner } from "typeorm";

export class picture1677136881343 implements MigrationInterface {
    name = 'picture1677136881343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "picture" ("id" SERIAL NOT NULL, "picture1" character varying NOT NULL, "picture2" character varying NOT NULL, CONSTRAINT "PK_31ccf37c74bae202e771c0c2a38" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "picture"`);
    }

}
