package com.ivangu.gestordetareasdam.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.OnConflictStrategy
import com.ivangu.gestordetareasdam.entity.Usuario

@Dao
interface UserDao {

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun insertar(usuario: Usuario)

    @Query("SELECT * FROM usuarios")
    suspend fun getTodos(): List<Usuario>

    @Query("SELECT * FROM usuarios WHERE id = :id LIMIT 1")
    suspend fun getPorId(id: Int): Usuario?
}
