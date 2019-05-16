import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCats1557945380731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.createTable(new Table({
      name: "cats",
      columns: [
        {
          name: "id",
          type: "serial",
          isNullable: false,
          isPrimary: true,
        },
        {
          name: "first_name",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "last_name",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "age",
          type: "int",
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("cats");
  }
}
