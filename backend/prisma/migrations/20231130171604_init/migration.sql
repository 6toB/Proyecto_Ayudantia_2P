-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutor" (
    "id" SERIAL NOT NULL,
    "especialidad" TEXT NOT NULL,
    "reputacion" TEXT NOT NULL,
    "estudianteId" INTEGER NOT NULL,

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorado" (
    "id" SERIAL NOT NULL,
    "reputacion" TEXT NOT NULL,
    "estudianteId" INTEGER NOT NULL,

    CONSTRAINT "Tutorado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotivoAyudantia" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "MotivoAyudantia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ayudantia" (
    "id" SERIAL NOT NULL,
    "numeroSesiones" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaProgramada" TIMESTAMP(3) NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "tutorId" INTEGER NOT NULL,
    "tutoradoId" INTEGER NOT NULL,
    "motivoAyudantiaId" INTEGER NOT NULL,

    CONSTRAINT "Ayudantia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_cedula_key" ON "Estudiante"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_estudianteId_key" ON "Tutor"("estudianteId");

-- CreateIndex
CREATE UNIQUE INDEX "Tutorado_estudianteId_key" ON "Tutorado"("estudianteId");

-- CreateIndex
CREATE UNIQUE INDEX "Ayudantia_motivoAyudantiaId_key" ON "Ayudantia"("motivoAyudantiaId");

-- AddForeignKey
ALTER TABLE "Tutor" ADD CONSTRAINT "Tutor_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorado" ADD CONSTRAINT "Tutorado_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ayudantia" ADD CONSTRAINT "Ayudantia_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ayudantia" ADD CONSTRAINT "Ayudantia_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ayudantia" ADD CONSTRAINT "Ayudantia_tutoradoId_fkey" FOREIGN KEY ("tutoradoId") REFERENCES "Tutorado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ayudantia" ADD CONSTRAINT "Ayudantia_motivoAyudantiaId_fkey" FOREIGN KEY ("motivoAyudantiaId") REFERENCES "MotivoAyudantia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
