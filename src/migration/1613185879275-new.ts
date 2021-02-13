import {MigrationInterface, QueryRunner} from "typeorm";

export class new1613185879275 implements MigrationInterface {
    name = 'new1613185879275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "task"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "name" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "task" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "status" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "task"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "name" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "status" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "item" ADD "task" character varying(300) NOT NULL`);
    }

}
