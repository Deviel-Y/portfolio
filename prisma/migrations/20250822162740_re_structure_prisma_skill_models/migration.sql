/*
  Warnings:

  - You are about to drop the `BackEnd_skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DevOps_skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FrontEnd_skill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `BackEnd_skill`;

-- DropTable
DROP TABLE `DevOps_skill`;

-- DropTable
DROP TABLE `FrontEnd_skill`;

-- CreateTable
CREATE TABLE `skill` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `skillType` ENUM('FRONT_END', 'BACK_END', 'DEV_OPS') NOT NULL,

    UNIQUE INDEX `skill_id_key`(`id`),
    UNIQUE INDEX `skill_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
