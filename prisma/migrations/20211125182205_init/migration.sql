-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kitsu_id` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,
    `canonical_title` VARCHAR(191) NOT NULL,
    `titles` LONGTEXT NULL,
    `synopsis` TEXT NULL,
    `description` TEXT NULL,
    `season` ENUM('Winter', 'Springs', 'Summer', 'Fall') NULL,
    `season_year` VARCHAR(4) NULL,
    `date_begin` DATE NULL,
    `date_end` DATE NULL,
    `rating_average` DOUBLE NULL,
    `rating_rank` INTEGER UNSIGNED NULL,
    `popularity_count` DOUBLE NULL,
    `popularity_rank` INTEGER UNSIGNED NULL,
    `type` ENUM('TV', 'Movie', 'OAV', 'ONA', 'OVA', 'special', 'music') NULL,
    `poster` LONGTEXT NULL,
    `cover` LONGTEXT NULL,
    `episode_count` INTEGER UNSIGNED NULL,
    `episode_length` INTEGER UNSIGNED NULL,
    `status` ENUM('finished', 'current', 'unreleased', 'tba', 'upcoming') NOT NULL DEFAULT 'unreleased',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `animes_kitsu_id_key`(`kitsu_id`),
    UNIQUE INDEX `animes_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
