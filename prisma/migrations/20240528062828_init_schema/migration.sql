-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "live_url" TEXT,
    "github_url" TEXT,
    "techstack" TEXT[],

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "linkedin" TEXT,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_name_key" ON "Portfolio"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Testimonials_username_key" ON "Testimonials"("username");
