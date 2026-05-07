package com.ivangu.gestordetareasdam.view

import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AppCompatDelegate
import androidx.lifecycle.lifecycleScope
import com.ivangu.gestordetareasdam.database.AppDatabase
import com.ivangu.gestordetareasdam.R
import com.ivangu.gestordetareasdam.dao.UserDao
import com.ivangu.gestordetareasdam.entity.Usuario
import kotlinx.coroutines.launch

class AddUserActivity : AppCompatActivity() {

    private lateinit var bd: AppDatabase
    private lateinit var daoUser: UserDao

    override fun onCreate(savedInstanceState: Bundle?) {
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_user)

        // Inicializo la DB
        bd = AppDatabase.Companion.getInstance(this)
        daoUser = bd.userDao()

        val inputNombre = findViewById<EditText>(R.id.editTextNombreUser)
        val botonAdd = findViewById<Button>(R.id.btnGuardarUser)

        botonAdd.setOnClickListener {
            val nombreEscrito = inputNombre.text.toString().trim()

            if (nombreEscrito.isNotEmpty()) {
                val u = Usuario(nombre = nombreEscrito)
                lifecycleScope.launch {
                    daoUser.insertar(u)
                    Toast.makeText(this@AddUserActivity, "Usuario guardado correctamente", Toast.LENGTH_SHORT).show()
                    finish() // Cierro esto y vuelvo a la pantalla de antes
                }
            } else {
                Toast.makeText(this, "El nombre no puede estar vacío", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
