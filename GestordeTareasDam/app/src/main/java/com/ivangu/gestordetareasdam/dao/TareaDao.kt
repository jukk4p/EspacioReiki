package com.ivangu.gestordetareasdam.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import androidx.room.Delete
import androidx.room.Transaction
import com.ivangu.gestordetareasdam.entity.Tarea
import com.ivangu.gestordetareasdam.entity.TareaConCategoria

@Dao
interface TareaDao {

    @Transaction
    @Query("SELECT * FROM tareas")
    suspend fun getTodasConCategoria(): List<TareaConCategoria>

    @Transaction
    @Query("SELECT * FROM tareas WHERE (:uId = -1 OR usuarioId = :uId) AND (:cId = -1 OR categoriaId = :cId)")
    suspend fun getFiltradas(uId: Int, cId: Int): List<TareaConCategoria>

    @Query("SELECT * FROM tareas")
    suspend fun getTodas(): List<Tarea>

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun insertar(tarea: Tarea): Long

    @Update
    suspend fun actualizar(tarea: Tarea)

    @Delete
    suspend fun borrar(tarea: Tarea)

    @Query("DELETE FROM tareas WHERE id = :id")
    suspend fun borrarPorId(id: Int)
}
