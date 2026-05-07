package com.ivangu.gestordetareasdam.entity

import androidx.room.Embedded
import androidx.room.Relation

// Clase para que Room me devuelva la tarea y la categoría juntas
// Así me ahorro hacer el JOIN a mano
data class TareaConCategoria(
    @Embedded val tarea: Tarea,
    @Relation(
        parentColumn = "categoriaId",
        entityColumn = "id"
    )
    val categoria: Categoria
)
