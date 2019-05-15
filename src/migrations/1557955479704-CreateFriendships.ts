import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFriendships1557955479704 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: "friendships",
      columns: [
        {
          name: "friend_id1",
          type: "int",
          isNullable: false,
          isPrimary: true,
        },
        {
          name: "friend_id2",
          type: "int",
          isNullable: false,
          isPrimary: true,
        },
      ],
    });

    table.addForeignKey(new TableForeignKey({
      columnNames: ["friend_id1"],
      referencedTableName: "cats",
      referencedColumnNames: ["id"],
    }));

    table.addForeignKey(new TableForeignKey({
      columnNames: ["friend_id2"],
      referencedTableName: "cats",
      referencedColumnNames: ["id"],
    }));

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("friendships");
  }
}
