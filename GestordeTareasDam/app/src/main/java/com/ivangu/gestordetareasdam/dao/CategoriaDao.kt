package com.ivangu.gestordetareasdam.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.OnConflictStrategy
import com.ivangu.gestordetareasdam.entity.Categoria

@Dao
interface CategoriaDao {

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun insertar(categoria: Categoria)

    @Query("SELECT * FROM categorias")
    suspend fun getTodas(): List<Categoria>
}
