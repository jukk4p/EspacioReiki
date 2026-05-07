package com.ivangu.gestordetareasdam.view

import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AppCompatDelegate
import androidx.appcompat.widget.Toolbar
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.lifecycle.lifecycleScope
import com.ivangu.gestordetareasdam.database.AppDatabase
import com.ivangu.gestordetareasdam.R
import com.ivangu.gestordetareasdam.dao.CategoriaDao
import com.ivangu.gestordetareasdam.dao.TareaDao
import com.ivangu.gestordetareasdam.dao.UserDao
import com.ivangu.gestordetareasdam.entity.Categoria
import com.ivangu.gestordetareasdam.entity.Tarea
import com.ivangu.gestordetareasdam.entity.TareaConCategoria
import com.ivangu.gestordetareasdam.entity.Usuario
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    // Listas para las cosas de la BD
    private val listaTareas = mutableListOf<TareaConCategoria>()
    private val listaCategorias = mutableListOf<Categoria>()
    private val listaUsuarios = mutableListOf<Usuario>()
    
    private lateinit var adaptador: MiAdaptadorTareas
    private lateinit var spinnerCategorias: Spinner
    private lateinit var spinnerFiltro: Spinner
    private lateinit var spinnerUsuario: Spinner

    // Mis variables de la base de datos
    private lateinit var db: AppDatabase
    private lateinit var tareaDao: TareaDao
    private lateinit var userDao: UserDao
    private lateinit var categoriaDao: CategoriaDao

    override fun onCreate(savedInstanceState: Bundle?) {
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Pongo la barrita de arriba
        val toolbar = findViewById<Toolbar>(R.id.toolbar)
        setSupportActionBar(toolbar)

        // Arranco Room
        db = AppDatabase.Companion.getInstance(this)
        tareaDao = db.tareaDao()
        userDao = db.userDao()
        categoriaDao = db.categoriaDao()

        // Busco las cosas del diseño
        val recyclerView = findViewById<RecyclerView>(R.id.recyclerViewTareas)
        val campoTexto = findViewById<EditText>(R.id.editTextTarea)
        val btnAdd = findViewById<Button>(R.id.btnAnadir)
        
        spinnerCategorias = findViewById(R.id.spinnerCategorias)
        spinnerFiltro = findViewById(R.id.spinnerFiltro)
        spinnerUsuario = findViewById(R.id.spinnerUsuario)
        val btnAbrirAddUser = findViewById<ImageButton>(R.id.btnAbrirAddUser)

        btnAbrirAddUser.setOnClickListener {
            val intent = Intent(this, AddUserActivity::class.java)
            startActivity(intent)
        }

        // Al encender, creo categorías si no hay y busco las tareas
        lifecycleScope.launch {
            if (categoriaDao.getTodas().isEmpty()) {
                categoriaDao.insertar(Categoria(id = 1, nombre = "Trabajo"))
                categoriaDao.insertar(Categoria(id = 2, nombre = "Personal"))
                categoriaDao.insertar(Categoria(id = 3, nombre = "Varios"))
            }
            obtenerTareas()
        }

        // Si cambio el filtro de arriba, actualizo la lista
        val controlDeCambios = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
                obtenerTareas() 
            }
            override fun onNothingSelected(p0: AdapterView<*>?) {}
        }
        spinnerFiltro.onItemSelectedListener = controlDeCambios
        spinnerUsuario.onItemSelectedListener = controlDeCambios

        // El adaptador de las tareas
        adaptador = MiAdaptadorTareas(
            listaTareas,
            alBorrar = { t ->
                // Mensaje para confirmar el borrado
                AlertDialog.Builder(this)
                    .setTitle("¿Seguro que quieres borrar?")
                    .setMessage("Esta acción no se puede deshacer.")
                    .setPositiveButton("Borrar") { _, _ ->
                        lifecycleScope.launch {
                            tareaDao.borrar(t)
                            obtenerTareas()
                        }
                    }
                    .setNegativeButton("Cancelar", null)
                    .show()
            },
            alCambiarCheckbox = { t, marcado ->
                lifecycleScope.launch {
                    val tMod = t.copy(completada = marcado)
                    tareaDao.actualizar(tMod)
                }
            }
        )

        recyclerView.adapter = adaptador
        recyclerView.layoutManager = LinearLayoutManager(this)

        // Si guardo una tarea nueva...
        btnAdd.setOnClickListener {
            val texto = campoTexto.text.toString()
            
            if (texto.trim().isEmpty()) {
                Toast.makeText(this, "Escribe una tarea antes de añadirla", Toast.LENGTH_SHORT).show()
            } else {
                // Busco el ID de la categoría y el usuario por si acaso
                val nombreCat = spinnerCategorias.selectedItem?.toString() ?: ""
                val nombreUser = spinnerUsuario.selectedItem?.toString() ?: ""
                
                val idCat = listaCategorias.find { it.nombre == nombreCat }?.id ?: 1
                val idUser = if (nombreUser == "Todos los usuarios") {
                    if (listaUsuarios.isNotEmpty()) listaUsuarios[0].id else 1
                } else {
                    listaUsuarios.find { it.nombre == nombreUser }?.id ?: 1
                }

                lifecycleScope.launch {
                    val nuevaT = Tarea(
                        texto = texto,
                        completada = false,
                        usuarioId = idUser,
                        categoriaId = idCat
                    )
                    tareaDao.insertar(nuevaT)
                    campoTexto.text.clear()
                    obtenerTareas()
                }
            }
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.main_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Usamos when que es más pro en Kotlin
        return when (item.itemId) {
            else -> super.onOptionsItemSelected(item)
        }
    }

    override fun onResume() {
        super.onResume()
        // Por si vuelvo de crear un usuario en la otra pantalla
        if (::userDao.isInitialized) {
            actualizarListas()
        }
    }

    // Para rellenar los desplegables del filtro y añadir
    private fun actualizarListas() {
        lifecycleScope.launch {
            // Categorías
            val datosCats = categoriaDao.getTodas()
            listaCategorias.clear()
            listaCategorias.addAll(datosCats)
            
            val nombres = datosCats.map { it.nombre }
            spinnerCategorias.adapter = ArrayAdapter(this@MainActivity, android.R.layout.simple_spinner_item, nombres)

            val comboFiltro = mutableListOf("Ver todas")
            comboFiltro.addAll(nombres)
            spinnerFiltro.adapter = ArrayAdapter(this@MainActivity, android.R.layout.simple_spinner_item, comboFiltro)

            // Usuarios
            val datosUsers = userDao.getTodos()
            if (datosUsers.isEmpty()) {
                Toast.makeText(this@MainActivity, "Debes crear un usuario primero", Toast.LENGTH_LONG).show()
                val i = Intent(this@MainActivity, AddUserActivity::class.java)
                startActivity(i)
            } else {
                listaUsuarios.clear()
                listaUsuarios.addAll(datosUsers)
                
                val comboUsuarios = mutableListOf("Todos los usuarios")
                comboUsuarios.addAll(datosUsers.map { it.nombre })
                spinnerUsuario.adapter = ArrayAdapter(this@MainActivity, android.R.layout.simple_spinner_item, comboUsuarios)
            }
        }
    }

    // Aquí cargo las tareas filtrando por usuario y categoría (Filtro cruzado)
    private fun obtenerTareas() {
        lifecycleScope.launch {
            val nombreUser = spinnerUsuario.selectedItem?.toString() ?: "Todos los usuarios"
            val filtroCat = spinnerFiltro.selectedItem?.toString() ?: "Ver todas"
            
            // Buscamos el ID del usuario seleccionado por nombre
            val idUser = when {
                nombreUser == "Todos los usuarios" -> -1
                else -> listaUsuarios.find { it.nombre == nombreUser }?.id ?: -1
            }
            
            // Calculamos el ID de categoría (-1 si es "Ver todas")
            val idCat = when {
                filtroCat == "Ver todas" -> -1
                else -> listaCategorias.find { it.nombre == filtroCat }?.id ?: -1
            }

            // Pido las tareas filtradas a la BD
            val resultado = tareaDao.getFiltradas(idUser, idCat)

            listaTareas.clear()
            listaTareas.addAll(resultado)
            adaptador.notifyDataSetChanged()
        }
    }
}
