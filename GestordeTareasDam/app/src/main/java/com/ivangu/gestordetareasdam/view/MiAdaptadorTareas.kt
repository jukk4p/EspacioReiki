package com.ivangu.gestordetareasdam.view

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.ivangu.gestordetareasdam.R
import com.ivangu.gestordetareasdam.entity.Tarea
import com.ivangu.gestordetareasdam.entity.TareaConCategoria

class MiAdaptadorTareas(
    private val lista: MutableList<TareaConCategoria>,
    private val alBorrar: (Tarea) -> Unit,
    private val alCambiarCheckbox: (Tarea, Boolean) -> Unit
) : RecyclerView.Adapter<MiAdaptadorTareas.MiViewHolder>() {

    // El ViewHolder para no buscar las vistas mil veces
    class MiViewHolder(vista: View) : RecyclerView.ViewHolder(vista) {
        val tvNombre: TextView = vista.findViewById(R.id.textoTarea)
        val tvCategoria: TextView = vista.findViewById(R.id.textoCategoria)
        val cbEstado: CheckBox = vista.findViewById(R.id.checkCompletada)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MiViewHolder {
        val layout = LayoutInflater.from(parent.context).inflate(R.layout.tarea_item, parent, false)
        return MiViewHolder(layout)
    }

    override fun onBindViewHolder(holder: MiViewHolder, position: Int) {
        val item = lista[position]
        val t = item.tarea
        
        holder.tvNombre.text = t.texto
        holder.tvCategoria.text = item.categoria.nombre // Nombre de la categoría asociada

        // Cargo el estado del checkbox
        holder.cbEstado.isChecked = t.completada
        ponerTachado(holder.tvNombre, t.completada)

        // Si marco o desmarco la tarea...
        holder.cbEstado.setOnClickListener {
            val marcado = holder.cbEstado.isChecked
            ponerTachado(holder.tvNombre, marcado)
            alCambiarCheckbox(t, marcado)
        }

        // Borrar si mantenemos pulsado el dedo sobre el registro
        holder.itemView.setOnLongClickListener {
            alBorrar(t)
            true
        }
    }

    // El efecto de tachar el texto si está completada
    private fun ponerTachado(texto: TextView, tachar: Boolean) {
        if (tachar) {
            texto.paintFlags = texto.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
        } else {
            texto.paintFlags = texto.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
        }
    }

    override fun getItemCount(): Int {
        return lista.size
    }
}
