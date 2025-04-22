<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis del movimiento de cuerpos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-2
          .p-4
            p.mb-0(data-aos="fade-up") El análisis del movimiento de cuerpos, es una aplicación práctica de los conceptos y leyes estudiados en cinemática y dinámica. En esta sección, se abordarán las herramientas y técnicas necesarias para resolver problemas relacionados con el movimiento en situaciones reales, especialmente en el ámbito de la ingeniería industrial. Se introducirán los diagramas de cuerpo libre como una representación visual esencial para identificar todas las fuerzas que actúan sobre un cuerpo y plantear las ecuaciones de movimiento. Además, se estudiarán casos específicos como el movimiento en planos inclinados, superficies rugosas y trayectorias circulares, y se analizarán sistemas con múltiples cuerpos en interacción. A través de la resolución de problemas en contextos industriales, se desarrollarán habilidades para aplicar los principios de la física de manera práctica y tomar decisiones informadas en el diseño y optimización de sistemas y procesos.
        .col-lg-auto.mb-3.mb-lg-0.order-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')             
  
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Diagramas de cuerpo libre

    .row.mb-5           
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/37.svg")
            .col-lg
              p.mb-0 Los diagramas de cuerpo libre son representaciones gráficas que muestran todas las fuerzas que actúan sobre un objeto. Son una herramienta fundamental para analizar el movimiento de los cuerpos y aplicar las leyes de Newton. Al dibujar un diagrama de cuerpo libre, se considera el objeto de interés como un punto y se representan todas las fuerzas que actúan sobre él como vectores. Esto permite visualizar claramente las interacciones entre el objeto y su entorno, y facilita la aplicación de las leyes de Newton para determinar la aceleración, la velocidad y la posición del objeto (Lifante et al., 2015).
        p(data-aos="fade-down") Los pasos para construir un diagrama de cuerpo libre son los siguientes:              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", data-aos="zoom-in")

    .bg-full-width-3.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/39.png', alt='')         
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Paso 1 
                p Identificar el objeto de interés y aislarlo mentalmente de su entorno. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/41.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Paso 2 
                p Representar el objeto como un punto o un diagrama simplificado. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/42.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Paso 3 
                p Identificar todas las fuerzas que actúan sobre el objeto, incluyendo el peso, las fuerzas normales, las tensiones, las fuerzas de fricción y cualquier otra fuerza aplicada. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/43.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Paso 4 
                p Dibujar cada fuerza como un vector, con su origen en el objeto y su dirección y sentido correspondientes. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Paso 5 
                p Etiquetar cada fuerza con su magnitud y unidad. 


        .row.mb-5           
          .col-lg-8
            .bg-color-1.p-4.mb-4(data-aos="fade-left")
              p.mb-0 Una vez construido el diagrama de cuerpo libre, se pueden aplicar las leyes de Newton para plantear las ecuaciones de movimiento y resolver problemas de dinámica.

            p(data-aos="fade-down") En el ámbito de la ingeniería industrial, los diagramas de cuerpo libre son ampliamente utilizados en el diseño y análisis de sistemas mecánicos. Por ejemplo, al diseñar una estructura de soporte para una máquina, se puede dibujar un diagrama de cuerpo libre, de la estructura, representando todas las fuerzas que actúan sobre ella, como el peso de la máquina, las reacciones en los apoyos y cualquier fuerza externa. A partir de este diagrama, se pueden aplicar las leyes de Newton y los principios de la estática, para determinar las fuerzas resultantes y diseñar la estructura, de manera adecuada.

            h5(data-aos="fade-down") Ejercicio:             
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")     

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Ejercicio 1")
            p Identificar el objeto de interés (el bloque) y aislarlo mentalmente. 

          .div(titulo="Ejercicio 2")
            p Representar el bloque como un punto o un diagrama simplificado.

          .div(titulo="Ejercicio 3")
            p Identificar las fuerzas que actúan sobre el bloque:
            ul.lista-ul--color             
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Peso (W): Actúa verticalmente hacia abajo debido a la gravedad.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fuerza normal (N): Actúa perpendicularmente al plano inclinado, hacia arriba.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fuerza de fricción estática (fs): Actúa paralela al plano inclinado, oponiéndose al posible deslizamiento.            

          .div(titulo="Ejercicio 4")
            p Dibujar cada fuerza como un vector:
            figure
              img.img-a.img-t(src="@/assets/curso/temas/47.png", alt="")  
            p Diagrama de cuerpo libre del bloque en plano inclinado.                        

          .div(titulo="Ejercicio 5")
            p Etiquetar cada fuerza con su magnitud y unidad:
            ul.lista-ul--color            
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Peso (W): W = mg = 5 kg × 9.8 m/s² = 49 N
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fuerza normal (N): Por determinar al aplicar la segunda ley de Newton. 
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fuerza de fricción estática (fs): fs ≤ μs × N, donde μs es el coeficiente de fricción estática.

    .bg-full-width.bg-color-9.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/48.svg")
          .col-lg
            p.mb-0 Recuerde que el dominio de las leyes de Newton y su aplicación en entornos industriales, requiere práctica y experiencia. Se recomienda resolver problemas adicionales, analizar casos de estudio y participar en proyectos prácticos para consolidar los conocimientos adquiridos. Además, la consulta de referencias especializadas y la colaboración con expertos en el campo, pueden enriquecer su comprensión y ampliar sus horizontes en la aplicación de la mecánica newtoniana en la ingeniería industrial.  

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Movimiento en planos inclinados y superficies rugosas

    p(data-aos="fade-down") El estudio del movimiento en planos inclinados y superficies rugosas permite comprender cómo interactúan las fuerzas en situaciones donde el rozamiento y la inclinación afectan el comportamiento de los cuerpos.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center                
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Movimiento en planos inclinados y superficies rugosas  
            p.mb-4(data-aos="fade-right") En el PDF Movimiento en planos inclinados y superficies rugosas, se presenta un enfoque práctico para analizar el desplazamiento de objetos sometidos a fricción en planos inclinados, integrando diagramas de cuerpo libre, descomposición de fuerzas y aplicación de la segunda ley de Newton. Este contenido es esencial para la ingeniería industrial, porque permite optimizar sistemas de transporte, manipulación de materiales y procesos productivos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Movimiento en planos inclinados y superficies rugosas

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/34.png', alt='') 

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Movimiento Circular Uniforme (MCU) y No Uniforme (MCNU)

    p(data-aos="fade-down") El movimiento circular, tanto uniforme como no uniforme, es una parte fundamental del estudio de la cinemática y tiene múltiples aplicaciones prácticas en la ingeniería.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/35.png', alt='')                        
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Movimiento Circular Uniforme (MCU) y No Uniforme (MCNU)
            p.mb-4(data-aos="fade-right") En el PDF Movimiento Circular Uniforme y No Uniforme, se presentan los conceptos esenciales para comprender cómo varían la velocidad angular, la aceleración centrípeta y la velocidad lineal de un objeto que sigue una trayectoria circular. A través de ejemplos aplicados, se explora su utilidad en sistemas industriales como engranajes, poleas y maquinaria rotativa, permitiendo analizar con precisión, fenómenos de rotación y optimizar el funcionamiento de equipos y procesos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Movimiento Circular Uniforme (MCU) y No Uniforme (MCNU) 

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Análisis de sistemas con múltiples cuerpos 

    .row.mb-5           
      .col-lg-8
        .bg-color-5.p-4.mb-4(data-aos="fade-up")
          p.mb-0 En muchos sistemas de ingeniería, es común encontrar múltiples cuerpos interactuando entre sí. Estos sistemas pueden incluir mecanismos, máquinas y estructuras compuestas por varios componentes conectados. El análisis de sistemas con múltiples cuerpos implica la aplicación de las leyes de Newton y los principios de la mecánica para determinar las fuerzas, aceleraciones y movimientos resultantes de cada cuerpo (Götze, 2010).
        p(data-aos="fade-down") Para analizar sistemas con múltiples cuerpos, se deben seguir los siguientes pasos:            
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/49.png", data-aos="zoom-in") 

    .row.align-items-start.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(src="@/assets/curso/temas/50.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Identificar todos los cuerpos que componen el sistema y sus conexiones.  

          .div(titulo="Paso 2")
            p Dibujar diagramas de cuerpo libre para cada cuerpo, representando todas las fuerzas que actúan sobre ellos, incluyendo las fuerzas de interacción entre los cuerpos. 

          .div(titulo="Paso 3")
            p Aplicar las leyes de Newton a cada cuerpo, considerando tanto las fuerzas externas como las fuerzas de interacción. 

          .div(titulo="Paso 4")
            p Establecer ecuaciones de movimiento para cada cuerpo, teniendo en cuenta las restricciones y condiciones de contorno del sistema. 

          .div(titulo="Paso 5")
            p Resolver las ecuaciones de movimiento simultáneamente, para determinar las aceleraciones, velocidades y posiciones de cada cuerpo, en función del tiempo.

    .row.align-items-start.mb-5
      .col-lg-8
        p(data-aos="fade-down") En el ámbito de la ingeniería industrial, el análisis de sistemas con múltiples cuerpos, es fundamental para el diseño y optimización de diversos sistemas mecánicos. Por ejemplo, en el diseño de un robot manipulador, es necesario considerar las interacciones entre los diferentes eslabones y articulaciones para garantizar un movimiento preciso y controlado. En el análisis de un sistema de suspensión de un vehículo, se deben tener en cuenta las fuerzas de interacción entre las ruedas, los amortiguadores y la carrocería, para optimizar el rendimiento y la comodidad.

        h5(data-aos="fade-down") Ejercicio:

        p(data-aos="fade-down") Dos bloques, A y B, de masas 5 kg y 3 kg respectivamente, están conectados por una cuerda ligera que pasa por una polea sin fricción. El bloque A se encuentra sobre una superficie horizontal sin fricción, mientras que el bloque B cuelga verticalmente. Determine la aceleración de los bloques y la tensión en la cuerda.

        h5(data-aos="fade-down") Solución:         
      .col-lg-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(src="@/assets/curso/temas/51.png", alt="")  

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/53.png")           
            .col-lg-7
              h5 Paso 1             
              p Identificar los cuerpos y sus conexiones.
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Bloque A (masa mA = 5 kg) sobre una superficie horizontal sin fricción.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Bloque B (masa mB = 3 kg) colgando verticalmente, conectado al bloque A por una cuerda ligera a través de una polea sin fricción.              

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/53.svg")           
            .col-lg-7
              h5 Paso 2             
              p Dibujar diagramas de cuerpo libre, para cada bloque.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/54.png")           
            .col-lg-7
              h5 Paso 3             
              p Aplicar las leyes de Newton a cada bloque. 
              p Para el bloque A: T = mA × a Para el bloque B: mB × g - T = mB × a

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/55.png")           
            .col-lg-7
              h5 Paso 4             
              p Establecer ecuaciones de movimiento. 
              p mA × a = T mB × g - T = mB × a

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/56.png")           
            .col-lg-7
              h5 Paso 5             
              p Resolver las ecuaciones de movimiento simultáneamente. 
              p Sumando las ecuaciones: mB × g = (mA + mB) × a a = (mB × g) / (mA + mB) a = (3 kg × 9.8 m/s²) / (5 kg + 3 kg) ≈ 3.675 m/s²
              p Sustituyendo la aceleración en la ecuación del bloque A: T = mA × a T = 5 kg × 3.675 m/s² ≈ 18.375 N
              p Por lo tanto, la aceleración de los bloques es de aproximadamente 3.675 m/s², y la tensión en la cuerda es de aproximadamente 18.375 N.

    p(data-aos="fade-down")  Ahora, se explicará con más detalle, para comprender cómo analizar sistemas con múltiples cuerpos.    

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Cómo analizar sistemas con múltiples cuerpos 
            p.mb-4(data-aos="fade-right") El análisis de sistemas con múltiples cuerpos, es fundamental para comprender cómo interactúan diversos objetos conectados entre sí mediante cuerdas, poleas u otros mecanismos. En el PDF Cómo analizar sistemas con múltiples cuerpos, se exploran ejemplos prácticos que permiten visualizar las fuerzas involucradas y aplicar las leyes de Newton para determinar aceleraciones y tensiones. Esta comprensión es esencial en ingeniería industrial, puesto que permite descomponer sistemas complejos en partes más simples, facilitando el diseño, optimización y mantenimiento de equipos y procesos interconectados.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cómo analizar sistemas con múltiples cuerpos   

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/57.png', alt='')

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Diagramas de cuerpo libre

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/58.png", data-aos="zoom-in")                                                                                     
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/59.svg")
            .col-lg
              p.mb-0 La resolución de problemas en contextos industriales, es una habilidad fundamental para los ingenieros industriales. Implica la aplicación de los principios de la física, en particular de la cinemática y la dinámica, para analizar y optimizar sistemas y procesos en entornos de fabricación, producción y logística. La capacidad de identificar, formular y resolver problemas de manera efectiva, es esencial para mejorar la eficiencia, la calidad y la seguridad en las operaciones industriales (Pérez Oviedo, 2023).
        p(data-aos="fade-down") Para resolver problemas en contextos industriales, se puede seguir una metodología general que consta de los siguientes pasos:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.my-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/60.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="0.8%" y="75%" numero="+")
                  h5 1. Identificación del problema                 
                  p.mb-0 Reconocer y definir claramente el problema o desafío que se debe abordar, considerando sus síntomas, causas y efectos.

                .bg-color-white.box-shadow.p-3(x="0.8%" y="39%" numero="+")
                  h5 2. Recopilación de datos                 
                  p.mb-0 Obtener información relevante sobre el problema, incluyendo mediciones, observaciones, especificaciones técnicas y cualquier otro dato que pueda ayudar a comprender y analizar la situación.

                .bg-color-white.box-shadow.p-3(x="14.3%" y="13%" numero="+")
                  h5 3. Análisis del problema                 
                  p.mb-0 Aplicar los principios de la física y las herramientas matemáticas, para examinar el problema en profundidad. Esto puede implicar la construcción de diagramas de cuerpo libre, la aplicación de las leyes de Newton, el uso de ecuaciones de movimiento y el análisis de sistemas con múltiples cuerpos.

                .bg-color-white.box-shadow.p-3(x="84.4%" y="13%" numero="+")
                  h5 4. Generación de soluciones                 
                  p.mb-0 Desarrollar posibles soluciones al problema, basadas en el análisis realizado. Estas soluciones pueden involucrar cambios en el diseño, modificaciones en los procesos, optimización de parámetros o la implementación de nuevas tecnologías.

                .bg-color-white.box-shadow.p-3(x="98.4%" y="39%" numero="+")
                  h5 5. Evaluación y selección de soluciones                
                  p.mb-0 Evaluar las soluciones propuestas en términos de su viabilidad, eficacia, eficiencia e impacto. Seleccionar la solución más adecuada teniendo en cuenta las restricciones y los objetivos del contexto industrial.

                .bg-color-white.box-shadow.p-3(x="98.4%" y="75%" numero="+")
                  h5 6. Implementación y seguimiento                
                  p.mb-0 Poner en práctica la solución seleccionada, asegurando una planificación adecuada, la asignación de recursos y la comunicación efectiva con todas las partes interesadas. Realizar un seguimiento del rendimiento y los resultados y hacer ajustes, según sea necesario.

    p(data-aos="fade-down") Al aplicar esta metodología y los conceptos de cinemática y dinámica, los ingenieros industriales pueden abordar una amplia gama de problemas en contextos industriales. Por ejemplo, pueden optimizar el diseño de una línea de producción, para minimizar los tiempos de ciclo y aumentar la eficiencia, mejorar el rendimiento de un sistema de manipulación de materiales, para reducir los costos de manejo y transporte, o analizar las vibraciones en una máquina rotativa para prevenir fallas y garantizar un funcionamiento seguro. 

    .row.mb-5
      .col-lg-8 
        h5(data-aos="fade-down") Ejercicio resuelto:

        p(data-aos="fade-down") Una cinta transportadora horizontal de 10 metros de largo se utiliza para trasladar cajas de 5 kg desde un punto de carga hasta un punto de descarga. La cinta tiene un coeficiente de fricción de 0.2 con las cajas y se mueve con una velocidad constante de 0.5 m/s. Determine la potencia necesaria para mantener la cinta en movimiento y el tiempo que tarda una caja en llegar al punto de descarga.

        h5(data-aos="fade-down") Solución: 

        .bg-color-1.p-4(data-aos="fade-left")
          p(data-aos="fade-down") #[b Paso 1.] Identificar los datos relevantes del problema.
          ul.lista-ul--color.ps-3
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Longitud de la cinta (L) = 10 m
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Masa de cada caja (m) = 5 kg
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Coeficiente de fricción entre la cinta y las cajas (μ) = 0.2
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Velocidad de la cinta (v) = 0.5 m/s
          p.mb-0(data-aos="fade-down") #[b Paso 2.] Calcular la fuerza de fricción que actúa sobre cada caja. 
          p.mb-1(data-aos="fade-down") Fuerza de fricción (f) = μ × m × g f = 0.2 × 5 kg × 9.8 m/s² = 9.8 N
          p.mb-0(data-aos="fade-down") #[b Paso 3.] Calcular la potencia necesaria para mantener la cinta en movimiento. 
          p.mb-1(data-aos="fade-down") Potencia (P) = Fuerza × Velocidad P = f × v P = 9.8 N × 0.5 m/s = 4.9 W
          p.mb-0(data-aos="fade-down") #[b Paso 4.] Calcular el tiempo que tarda una caja en llegar al punto de descarga. 
          p.mb-0(data-aos="fade-down") Tiempo (t) = Distancia / Velocidad t = L / v t = 10 m / 0.5 m/s = 20 s

      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/61.png", data-aos="zoom-in")    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/62.png", data-aos="zoom-in")       
      .col-lg-8 
        p(data-aos="fade-down") Tiempo (t) = Distancia / Velocidad t = L / v t = 10 m / 0.5 m/s = 20 s
        p(data-aos="fade-down") Por lo tanto, se requiere una potencia de 4.9 W para mantener la cinta transportadora en movimiento, y una caja tarda 20 segundos en llegar desde el punto de carga hasta el punto de descarga.

        p(data-aos="fade-down") Ahora, se amplía la explicación para entender cómo resolver este tipo de problemas en contextos industriales.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Problemas en contextos industriales
            p.mb-4(data-aos="fade-right") La resolución de problemas en contextos industriales, es una competencia esencial para los ingenieros que buscan optimizar procesos y mejorar el rendimiento de los sistemas de producción. En el PDF Problemas en contextos industriales, se presenta un enfoque práctico para abordar desafíos reales mediante la aplicación de principios físicos y matemáticos, como la fricción, la potencia y el análisis de datos. A través de ejemplos situados en escenarios industriales, se ilustra cómo identificar problemas, proponer soluciones viables y tomar decisiones fundamentadas que impacten positivamente, en la eficiencia operativa.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Problemas en contextos industriales

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/63.png', alt='')  

    p(data-aos="fade-down") En resumen, la Unidad 1 de Física I, ha proporcionado una base sólida en cinemática y dinámica, abarcando conceptos fundamentales, aplicaciones de las leyes de Newton y análisis del movimiento de los cuerpos. Estos conocimientos son esenciales para la resolución de problemas en contextos industriales y sientan las bases para el estudio de fenómenos más complejos en las siguientes unidades.   

    .row.mb-5           
      .col-lg-8
        .bg-color-5.p-4.mb-4(data-aos="fade-up")
          p.mb-0 A lo largo de esta unidad, se han explorado los conceptos básicos de cinemática y dinámica, incluyendo magnitudes físicas, sistemas de unidades, análisis vectorial, conceptos de posición, desplazamiento, velocidad y aceleración, y representación gráfica de movimientos. Se ha profundizado en las leyes de Newton y sus aplicaciones, analizando el principio de inercia, la relación entre fuerza, masa y aceleración, la acción y reacción, y la identificación de fuerzas como el peso, la normal, la tensión y la fricción.
        p(data-aos="fade-down") Además, se ha abordado el análisis del movimiento de cuerpos, incluyendo diagramas de cuerpo libre, movimiento en planos inclinados y superficies rugosas, movimiento circular uniforme y no uniforme, y análisis de sistemas con múltiples cuerpos. Se ha enfatizado la importancia de la resolución de problemas en contextos industriales y proporcionado una metodología general para abordar desafíos en entornos de fabricación, producción y logística.          
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/64.png", data-aos="zoom-in")

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/4-3-movimiento-de-proyectil" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Movimiento de proyectil. En Física universitaria volumen 1.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/4-4-movimiento-circular-uniforme" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Movimiento circular uniforme. En Física universitaria volumen 1.               

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/aHR7Sm-_8BY" target="_blank" rel="noopener noreferrer") Profe Apolinar. (2021). FISICA || DIAGRAMA DE CUERPO LIBRE Y SISTEMA DE FUERZAS.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/yJAu30-DWNY" target="_blank" rel="noopener noreferrer") Danstein. (2021). Qué es el movimiento circular uniforme y como resolver ejercicios de M C U.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál de las siguientes magnitudes es vectorial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Masa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Velocidad ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Temperatura',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Tiempo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La segunda ley de Newton establece que:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La fuerza es inversamente proporcional a la aceleración',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La velocidad de un objeto es constante si no hay fuerza externa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La fuerza es igual al producto de la masa por la aceleración',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Todo cuerpo en reposo permanece en reposo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Si un auto viaja a una velocidad constante, ¿cuál es la aceleración del auto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '0 m/s²',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Depende de la masa del auto',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Igual a la velocidad del auto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No se puede determinar',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Cuál de las siguientes opciones representa una unidad de fuerza en el Sistema Internacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Kilogramo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Newton (N)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Joule',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Metro por segundo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Un objeto cae en caída libre desde cierta altura. Ignorando la resistencia del aire, ¿qué sucede con su velocidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumenta de manera uniforme',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Disminuye',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se mantiene constante',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Depende de la masa del objeto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
