package com.ivangu.gestordetareasdam.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.ivangu.gestordetareasdam.dao.CategoriaDao
import com.ivangu.gestordetareasdam.dao.TareaDao
import com.ivangu.gestordetareasdam.dao.UserDao
import com.ivangu.gestordetareasdam.entity.Categoria
import com.ivangu.gestordetareasdam.entity.Tarea
import com.ivangu.gestordetareasdam.entity.Usuario

@Database(
    entities = [Usuario::class, Categoria::class, Tarea::class],
    version = 2,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {

    // Mis DAOs
    abstract fun tareaDao(): TareaDao
    abstract fun userDao(): UserDao
    abstract fun categoriaDao(): CategoriaDao

    companion object {
        @Volatile
        private var INSTANCIA: AppDatabase? = null

        // Uso Singleton para que no haya mil hilos abriendo la base de datos
        fun getInstance(context: Context): AppDatabase {
            return INSTANCIA ?: synchronized(this) {
                val baseDatos = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "gestordetareas_db"
                ).fallbackToDestructiveMigration()
                    .build()
                INSTANCIA = baseDatos
                baseDatos
            }
        }
    }
}