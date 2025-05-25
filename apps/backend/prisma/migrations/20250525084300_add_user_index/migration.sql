/*
  Warnings:

  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_gametouser` DROP FOREIGN KEY `_GameToUser_B_fkey`;

-- DropTable
DROP TABLE `player`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `userType` INTEGER NOT NULL DEFAULT 0,
    `gender` INTEGER NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NULL,
    `register_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    INDEX `idx_user_email`(`email`),
    INDEX `idx_user_username`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GameToUser` ADD CONSTRAINT `_GameToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
