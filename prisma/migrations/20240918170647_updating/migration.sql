/*
  Warnings:

  - You are about to alter the column `maximumAttendess` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "maximumAttendess" INTEGER,
    "slug" DATETIME NOT NULL
);
INSERT INTO "new_Event" ("details", "id", "maximumAttendess", "slug", "title") SELECT "details", "id", "maximumAttendess", "slug", "title" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
