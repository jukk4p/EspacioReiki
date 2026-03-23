"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un correo electrónico válido"),
  asunto: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Ocultar mensaje de éxito tras 5 segundos
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-border/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden h-full">
      <h2 className="font-heading text-3xl font-medium text-text-main mb-8">Envíanos un mensaje</h2>
      
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="p-4 bg-primary/10 text-primary-dark rounded-xl border border-primary/20 overflow-hidden"
          >
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible para llenarte de luz.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="nombre" className="text-sm font-medium text-text-main">
              Nombre <span className="text-accent">*</span>
            </label>
            <Input id="nombre" {...register("nombre")} placeholder="Tu nombre" aria-invalid={!!errors.nombre} />
            {errors.nombre && <p className="text-xs text-accent mt-1">{errors.nombre.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-text-main">
              Email <span className="text-accent">*</span>
            </label>
            <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" aria-invalid={!!errors.email} />
            {errors.email && <p className="text-xs text-accent mt-1">{errors.email.message}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="asunto" className="text-sm font-medium text-text-main">
            Asunto o Terapia <span className="text-accent">*</span>
          </label>
          <Input id="asunto" {...register("asunto")} placeholder="Ej. Sesión de Armonización" aria-invalid={!!errors.asunto} />
          {errors.asunto && <p className="text-xs text-accent mt-1">{errors.asunto.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="mensaje" className="text-sm font-medium text-text-main">
            Mensaje <span className="text-accent">*</span>
          </label>
          <Textarea id="mensaje" {...register("mensaje")} placeholder="¿En qué podemos acompañarte?" aria-invalid={!!errors.mensaje} className="min-h-[150px]" />
          {errors.mensaje && <p className="text-xs text-accent mt-1">{errors.mensaje.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base shadow-lg shadow-primary/20 mt-4">
          {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
        </Button>
      </form>
    </div>
  );
}
