<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Leyes de Newton y aplicaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-2
          .p-4
            p.mb-0(data-aos="fade-up") Las leyes de Newton son principios fundamentales que describen cómo las fuerzas afectan el movimiento de los cuerpos. Estas leyes, desarrolladas por Isaac Newton en el siglo XVII, son la base de la mecánica clásica y tienen una amplia gama de aplicaciones en diversos campos, incluyendo la ingeniería industrial. En esta sección, se explorarán en detalle las tres leyes de Newton: el principio de inercia, la relación entre fuerza, masa y aceleración, y el principio de acción y reacción. Además, se identificarán las fuerzas comunes como el peso, la normal, la tensión y la fricción, y se analizarán sus aplicaciones en entornos industriales, desde el diseño de máquinas hasta el análisis de procesos de fabricación.
        .col-lg-auto.mb-3.mb-lg-0.order-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')                   


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Primera Ley de Newton: principio de la inercia

    .row.mb-5           
      .col-lg-8
        p(data-aos="fade-down") La primera ley de Newton, también conocida como principio de inercia, establece que un objeto en reposo permanecerá en reposo y un objeto en movimiento permanecerá en movimiento, con velocidad constante, a menos que una fuerza externa neta actúe sobre él. En otras palabras, los objetos tienden a resistir cambios en su estado de movimiento. Esta propiedad se conoce como inercia (Lifante et al., 2015).
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/22.svg")
            .col-lg
              p.mb-0 La primera ley de Newton implica que, en ausencia de fuerzas externas, un objeto mantendrá su estado de movimiento. Si está en reposo, seguirá en reposo, y si está en movimiento, continuará moviéndose en línea recta con velocidad constante. Esta ley también sugiere que se requiere una fuerza para cambiar el estado de movimiento de un objeto, ya sea para iniciarlo, detenerlo o cambiar su dirección. 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 2. 
      span Primera Ley de Newton

    .bg-color-7.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-4    
          figure
            img.img-a.img-t(src="@/assets/curso/temas/28.png", alt="")                            
        .col-lg-7
          p(data-aos="fade-down") Gráfico que ilustra la primera #[b ley de Newton] (la ley de la inercia):
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Objeto en reposo (en rojo):] el objeto no se mueve, su posición permanece constante en todo el intervalo de tiempo.

            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Movimiento con velocidad constante (en verde):] el objeto se mueve con una velocidad constante, manteniendo una trayectoria recta, lo que ilustra que continuará moviéndose en línea recta, sin cambios en su velocidad, a menos que una fuerza externa actúe sobre él.   

          p(data-aos="fade-down") Este gráfico refleja cómo los objetos, en ausencia de fuerzas externas, mantienen su estado de reposo o movimiento uniforme. 

    .row.mb-5           
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-2.p-4.j1.h-100(data-aos="fade-left")
          p.mb-0 En el contexto de la ingeniería industrial, la primera ley de Newton tiene diversas aplicaciones. Por ejemplo, en el diseño de sistemas de transporte de materiales, como cintas transportadoras, es importante considerar la inercia de los objetos transportados. Al arrancar o detener la cinta, se debe aplicar una fuerza suficiente para superar la inercia de los objetos y evitar que se deslicen o caigan. Asimismo, en el diseño de máquinas rotativas, como motores y turbinas, la inercia de los componentes en rotación, debe tenerse en cuenta para garantizar un funcionamiento suave y evitar vibraciones excesivas. 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", data-aos="zoom-in")

    p(data-aos="fade-down") Ejercicios:                                             
               
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/25.png")           
            .col-lg-7
              h5 Ejercicio 1  
              h5 Un libro está en reposo sobre una mesa. Si no hay fuerzas externas presentes, ¿cuál será el estado de movimiento del libro después de 5 segundos?                            
              p Solución:                            
              p Según la primera ley de Newton, si no hay fuerzas externas presentes, el libro permanecerá en reposo. Después de 5 segundos, el libro seguirá en reposo sobre la mesa. 
 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/26.png")           
            .col-lg-7
              h5 Ejercicio 2 
              h5 Un automóvil viaja en línea recta con una velocidad constante de 60 km/h. Si no hay fuerzas externas netas actuando sobre el automóvil, ¿cuál será su velocidad después de 10 minutos?                            
              p Solución:                            
              p De acuerdo con la primera ley de Newton, si no hay fuerzas externas netas actuando sobre el automóvil, mantendrá su velocidad constante. Después de 10 minutos, el automóvil seguirá viajando a 60 km/h en línea recta. 


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/27.png")           
            .col-lg-7
              h5 Ejercicio 3 
              h5 Una caja está en reposo sobre una superficie horizontal. Se aplica una fuerza horizontal de 10 N a la caja, pero no se mueve. ¿Qué se puede concluir sobre las fuerzas que actúan sobre la caja?                            
              p Solución:                            
              p Si la caja no se mueve a pesar de la aplicación de una fuerza horizontal, se puede concluir que hay una fuerza de fricción igual y opuesta a la fuerza aplicada. Según la primera ley de Newton, si la suma de las fuerzas (fuerza neta) es cero, el objeto permanecerá en reposo. En este caso, la fuerza de fricción de 10 N equilibra la fuerza aplicada, resultando en una fuerza neta cero y manteniendo la caja en reposo.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Segunda ley de Newton: relación entre fuerza, masa y aceleración

    p(data-aos="fade-down") La segunda ley de Newton es uno de los pilares fundamentales de la mecánica clásica, ya que establece una relación directa entre la fuerza aplicada a un objeto, su masa y la aceleración que experimenta.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center                
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Segunda ley de Newton: relación entre fuerza, masa y aceleración 
            p.mb-4(data-aos="fade-right") En el PDF Segunda ley de Newton, se presentan explicaciones detalladas, ejemplos gráficos y ejercicios que permiten comprender cómo esta ley permite predecir y analizar el comportamiento del movimiento, en diferentes contextos físicos. Esta comprensión resulta especialmente útil en áreas como la ingeniería industrial, donde calcular fuerzas y aceleraciones, es clave para el diseño eficiente de sistemas mecánicos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Segunda ley de Newton: relación entre fuerza, masa y aceleración 

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/29.png', alt='') 

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Tercera ley de Newton: acción y reacción

    p(data-aos="fade-down") La tercera ley de Newton establece que cuando un objeto ejerce una fuerza sobre otro objeto, el segundo objeto ejerce una fuerza igual y opuesta sobre el primero. En otras palabras, las fuerzas siempre se producen en pares de acción-reacción. Estas fuerzas actúan sobre objetos diferentes y, aunque son iguales en magnitud, tienen direcciones opuestas (Bujovtsev, 2010). 


    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 3. 
      span Tercera ley de Newton

    .bg-color-7.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-4    
          figure
            img.img-a.img-t(src="@/assets/curso/temas/30.png", alt="")                            
        .col-lg-7
          p(data-aos="fade-down") Gráfico que ilustra la #[b tercera ley de Newton] (acción y reacción):
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Fuerza de A sobre B (Acción):] El objeto A ejerce una fuerza de 5 N sobre el objeto B (en azul).

            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Fuerza de B sobre A (Reacción):] El objeto B ejerce una fuerza de -5 N sobre el objeto A (en rojo), igual en magnitud pero opuesta en dirección.  

          p(data-aos="fade-down") Este gráfico muestra cómo las fuerzas actúan en pares de acción y reacción, siendo iguales en magnitud pero opuestas en dirección, como lo establece la tercera ley de Newton.

    p(data-aos="fade-up") Según Götze (2010), en "Elementos de física matemática, Tomo I", la tercera ley de Newton implica que no puede haber una fuerza sin su correspondiente fuerza de reacción.
    .row.mb-5           
      .col-lg-8
        p(data-aos="fade-down") Por ejemplo, cuando una persona empuja una pared, la pared ejerce una fuerza de reacción igual y opuesta sobre la persona. Estas fuerzas de acción-reacción no se anulan entre sí, porque actúan sobre objetos diferentes.
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/31.svg")
            .col-lg
              p.mb-0 En el ámbito de la ingeniería industrial, la tercera ley de Newton tiene aplicaciones en el diseño de estructuras y máquinas. Por ejemplo, en el diseño de cimentaciones para maquinaria pesada, es necesario considerar las fuerzas de reacción que el suelo ejercerá sobre la base de la máquina. Estas fuerzas de reacción deben ser adecuadamente distribuidas y soportadas para evitar asentamientos o fallos estructurales. Asimismo, en el diseño de sistemas de propulsión, como motores de cohetes, la tercera ley de Newton explica cómo la expulsión de gases a alta velocidad, genera una fuerza de reacción que impulsa el cohete en la dirección opuesta. 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Ejercicio 1")
            p Un patinador de 60 kg empuja a otro patinador de 40 kg que inicialmente está en reposo. Si el primer patinador ejerce una fuerza de 30 N sobre el segundo patinador, ¿cuál es la fuerza que el segundo patinador ejerce sobre el primero?

            h5 Solución: 
            p Según la tercera ley de Newton, la fuerza que el segundo patinador ejerce sobre el primero es igual y opuesta a la fuerza que el primer patinador ejerce sobre el segundo. Por lo tanto, la fuerza de reacción es de 30 N en la dirección opuesta.    

          .div(titulo="Ejercicio 2")
            p Un libro de 1 kg se encuentra en reposo sobre una mesa. ¿Cuál es la fuerza de reacción que la mesa ejerce sobre el libro?

            h5 Solución: 
            p El libro ejerce una fuerza hacia abajo sobre la mesa, debido a su peso, que se calcula como: Peso = masa × aceleración de la gravedad Peso = 1 kg × 9.8 m/s² = 9.8 N

            p Según la tercera ley de Newton, la mesa ejerce una fuerza de reacción igual y opuesta al peso del libro. Por lo tanto, la fuerza de reacción de la mesa es de 9.8 N hacia arriba.   

          .div(titulo="Ejercicio 3")
            p Un cohete expulsa gases a una velocidad de 1000 m/s. Si la masa de los gases expulsados por segundo es de 0.5 kg, ¿cuál es la fuerza de empuje que experimenta el cohete?

            h5 Solución: 
            p La fuerza de empuje del cohete se debe a la reacción de la expulsión de los gases según la tercera ley de Newton. Podemos calcularla usando la segunda ley de Newton y el principio de conservación del momento lineal.

            p La fuerza de empuje es igual a la tasa de cambio del momento lineal de los gases expulsados: Fempuje = (mv)gases / t
            p Donde m es la masa de los gases expulsados por segundo, v es la velocidad de los gases y t es el tiempo (en este caso, 1 segundo).

            p Fempuje = (0.5 kg × 1000 m/s) / 1 s = 500 N
            p Por lo tanto, el cohete experimenta una fuerza de empuje de 500 N en la dirección opuesta a la expulsión de los gases. 

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Identificación de fuerzas: peso, normal, tensión y fricción

    p(data-aos="fade-down") La identificación de fuerzas es una etapa clave en el análisis del movimiento de los cuerpos, ya que permite comprender cómo interactúan los objetos con su entorno físico.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center                
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Identificación de fuerzas: peso, normal, tensión y fricción  
            p.mb-4(data-aos="fade-right") En el PDF Identificación de fuerzas, se explican los conceptos fundamentales de peso, fuerza normal, tensión y fricción, a través de ejemplos claros y ejercicios prácticos. Esta comprensión resulta esencial para aplicar correctamente las leyes de Newton en diversos contextos de la ingeniería, facilitando el diseño y el análisis de sistemas mecánicos, eficientes y seguros.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Identificación de fuerzas: peso, normal, tensión y fricción 

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/34.png', alt='') 

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Aplicaciones de las leyes de Newton en entornos industriales

    p(data-aos="fade-down") La aplicación de las leyes de Newton es fundamental para comprender y optimizar el funcionamiento de los sistemas mecánicos utilizados en la industria.

    .bg-full-width.bg-color-6
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/35.png', alt='')                        
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Aplicaciones de las leyes de Newton en entornos industriales 
            p.mb-4(data-aos="fade-right") En el PDF Aplicaciones de las leyes de Newton en entornos industriales, se presentan ejemplos concretos que ilustran cómo estos principios físicos se utilizan en el diseño de maquinaria, la manipulación de materiales, los procesos de fabricación y la construcción de estructuras. Este enfoque práctico permite a los estudiantes relacionar los conceptos teóricos con situaciones reales del entorno industrial, fortaleciendo sus habilidades para la toma de decisiones técnicas y estratégicas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones de las leyes de Newton en entornos industriales



    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/20.svg")
          .col-lg
            p.mb-0 Recuerde que el dominio de las leyes de Newton y su aplicación en entornos industriales, requiere práctica y experiencia. Se recomienda resolver problemas adicionales, analizar casos de estudio y participar en proyectos prácticos para consolidar los conocimientos adquiridos. Además, la consulta de referencias especializadas y la colaboración con expertos en el campo, pueden enriquecer su comprensión y ampliar sus horizontes en la aplicación de la mecánica newtoniana en la ingeniería industrial.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1" target="_blank" rel="noopener noreferrer") Bujovtsev, B. B. (2010). Problemas seleccionados de la física elemental. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1" target="_blank" rel="noopener noreferrer") Götze, R. (2010). Elementos de física matemática. Tomo I. Instituto Politécnico Nacional.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1" target="_blank" rel="noopener noreferrer") Irodov, I. E. (2010). Problemas de física general. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1" target="_blank" rel="noopener noreferrer") Lifante, G. Bravo, D. & Jaque, D. (2015). Problemas resueltos de fundamentos de física (I). Editorial Universidad Autónoma de Madrid.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1" target="_blank" rel="noopener noreferrer") Pérez Oviedo, W. (2023). De Newton a Nash: la influencia de la física y la matemática en la economía. FLACSO Ecuador.                                                         

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-2-primera-ley-de-newton" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Primera ley de Newton. En Física universitaria volumen 1.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-3-segunda-ley-de-newton" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Segunda ley de Newton. En Física universitaria volumen 1.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-4-tercera-ley-de-newton" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Tercera ley de Newton. En Física universitaria volumen 1.                               

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/OpR1FL0FGBY" target="_blank" rel="noopener noreferrer") Ceroentropia. (2020). Leyes de Newton.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/yiPHvYmQuEI" target="_blank" rel="noopener noreferrer") Cifuentes Juarez, V. E. (2020). Clases Leyes de Newton (ejercicios).
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/3AOwM8ku2z4" target="_blank" rel="noopener noreferrer") CEDU Uninorte. (2015). Acción-Reacción y la tercera ley de Newton.                            

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
