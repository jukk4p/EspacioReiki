package com.ivangu.gestordetareasdam.entity

import androidx.room.ForeignKey
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.Index

@Entity(
    tableName = "tareas",
    foreignKeys = [
        ForeignKey(
            entity = Usuario::class,
            parentColumns = ["id"],
            childColumns = ["usuarioId"],
            onDelete = ForeignKey.CASCADE
        ),
        ForeignKey(
            entity = Categoria::class,
            parentColumns = ["id"],
            childColumns = ["categoriaId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index("usuarioId"), Index("categoriaId")]
)
data class Tarea(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val texto: String,
    val completada: Boolean = false,
    val usuarioId: Int,
    val categoriaId: Int
)
