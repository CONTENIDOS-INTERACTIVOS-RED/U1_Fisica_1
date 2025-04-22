<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de cinemática y dinámica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width-2.bg-fondo-2.py-4
      .px-4.px-md-5  
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img.img-a.img-t(src='@/assets/curso/temas/6.png', alt='')             
            .col-lg.order-lg-1
              .p-4
                p.mb-0(data-aos="fade-up") En esta sección, se explorarán los conceptos básicos que sientan las bases para comprender y analizar el movimiento en el espacio. Se abordarán temas como las magnitudes físicas, los sistemas de unidades, el análisis vectorial y la representación gráfica de movimientos, proporcionando una sólida base conceptual, para el estudio de la física aplicada a la ingeniería industrial.  
    

        #t_1_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.1] Magnitudes físicas: escalares y vectoriales

        p(data-aos="fade-down") Las magnitudes físicas son propiedades medibles de los fenómenos físicos. Se pueden clasificar en dos categorías principales (Lifante et al., 2015):   

        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="fade-left")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Magnitudes escalares
                p.mb-0 Son aquellas que solo requieren un número y una unidad para ser descritas completamente, como la masa, el tiempo o la temperatura.
          .col-lg-6.mb-4(data-aos="fade-right")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Magnitudes vectoriales
                p.mb-0 Necesitan, además de un número y una unidad, una dirección y un sentido para su descripción completa, como la velocidad, la aceleración o la fuerza.

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")            
      .col-lg-8
        p(data-aos="fade-down") Es fundamental comprender la distinción entre magnitudes escalares y vectoriales, para poder analizar correctamente los fenómenos físicos. Las operaciones matemáticas que se realizan con estas magnitudes difieren, según su naturaleza. Por ejemplo, las magnitudes escalares se pueden sumar o restar de manera directa, mientras que las magnitudes vectoriales, requieren técnicas especiales, como la suma o resta de vectores, para obtener resultados correctos. 
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/10.svg")
            .col-lg
              p.mb-0 En el ámbito de la ingeniería industrial, el manejo adecuado de las magnitudes físicas es crucial para el diseño y el análisis de sistemas. Por ejemplo, al estudiar la eficiencia energética de un proceso industrial, se deben considerar magnitudes escalares, como la energía consumida y la potencia requerida, así como magnitudes vectoriales, como las fuerzas aplicadas y los flujos de calor. La comprensión de la naturaleza de estas magnitudes, permite realizar cálculos precisos y tomar decisiones informadas para optimizar el rendimiento del sistema.

        h5(data-aos="fade-down") Ejercicios:  

    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Ejercicio 1")
            p Clasifique las siguientes magnitudes, como escalares o vectoriales: 

            p a) Temperatura
            p b) Velocidad
            p c) Masa 
            p d) Fuerza
            h5 Solución: 
            p a) Temperatura: escalar 
            p b) Velocidad: vectorial 
            p c) Masa: escalar 
            p d) Fuerza: vectorial

          .div(titulo="Ejercicio 2")
            p Si la masa de un objeto es de 5 kg y su velocidad es de 3 m/s hacia el este, ¿cuál es su momento lineal?

            h5 Solución: 
            p El momento lineal (p) se calcula como el producto de la masa (m) y la velocidad (v): 
            p p = mv 
            p m = 5 kg 
            p v = 3 m/s hacia el este 
            p p = (5 kg) × (3 m/s hacia el este) = 15 kg·m/s hacia el este.
            
          .div(titulo="Ejercicio 3")
            p Un objeto se mueve con una velocidad de 4 m/s hacia el norte y luego cambia su dirección a 3 m/s hacia el este. ¿Cuál es el desplazamiento total del objeto?
            h5 Solución: 
            p El desplazamiento total se puede calcular utilizando el teorema de Pitágoras:
            p v1 = 4 m/s hacia el norte 
            p v2 = 3 m/s hacia el este 
            p Desplazamiento total = √(v1² + v2²) = √(4² + 3²) = 5 m 
            p El desplazamiento total es de 5 m en dirección noreste.                               
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", alt="")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Sistemas de unidades y conversión de unidades

    p(data-aos="fade-down") El dominio de los sistemas de unidades y su conversión es esencial para resolver problemas físicos con precisión, especialmente en contextos técnicos e industriales.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/12.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Sistemas de unidades y conversión de unidades 
            p.mb-4(data-aos="fade-right") En el PDF Sistemas de unidades y conversión de unidades, se presentan los principios básicos del Sistema Internacional y el Sistema Inglés, junto con ejercicios prácticos que permiten desarrollar la habilidad de transformar magnitudes, entre distintos sistemas, garantizando una correcta interpretación de datos y una comunicación técnica eficaz en entornos globalizados.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas de unidades y conversión de unidades 

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Análisis vectorial: suma, resta y descomposición de vectores
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") El análisis vectorial, es una herramienta matemática fundamental para estudiar magnitudes físicas vectoriales. Los vectores se pueden representar gráficamente como flechas que indican magnitud, dirección y sentido. La suma de vectores se realiza colocando el origen de un vector en el extremo del otro y trazando un vector resultante desde el origen del primer vector, hasta el extremo del último. La resta de vectores se puede realizar, sumando el opuesto del vector a restar. La descomposición de vectores consiste en expresar un vector en términos de sus componentes ortogonales, típicamente en los ejes x e y (Götze, 2010).
 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/13.png", data-aos="zoom-in")    


    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 1. 
      span Suma de dos vectores A y B

    .bg-color-7.p-4.mb-5(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/14.png", alt="")

    p(data-aos="fade-down") El gráfico explicativo ilustra la suma de dos vectores: el vector A (en rojo) y el vector B (en azul). El vector resultante (en verde), es la suma de ambos vectores. Como se puede ver, la suma de vectores se realiza colocando el origen del segundo vector, en el extremo del primer vector, y el vector resultante va del origen del primer vector, al extremo del segundo. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/15.png", data-aos="zoom-in")               
      .col-lg-8
        p(data-aos="fade-down") Este gráfico también puede ayudar a visualizar cómo los vectores se suman en el plano cartesiano, destacando la magnitud y dirección de cada uno. 

        p(data-aos="fade-down") Es importante destacar la importancia del análisis vectorial en la resolución de problemas de física. Por ejemplo, para determinar la fuerza neta que actúa sobre un objeto, es necesario sumar todas las fuerzas individuales aplicadas, teniendo en cuenta sus direcciones y sentidos. Asimismo, la descomposición de vectores permite analizar el movimiento en dos dimensiones, separando el movimiento en componentes horizontales y verticales.
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/16.svg")
            .col-lg
              p.mb-0 En el ámbito de la ingeniería industrial, el análisis vectorial tiene numerosas aplicaciones. Por ejemplo, en el diseño de estructuras, es necesario considerar las fuerzas que actúan sobre cada elemento y determinar la fuerza resultante, para garantizar la estabilidad y resistencia de la estructura. En el análisis de flujos de materiales en una planta de producción, los vectores pueden representar la dirección y magnitud de los flujos, permitiendo optimizar el diseño del layout (esquema) y minimizar los tiempos de transporte.  

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ejercicios
            p.mb-4(data-aos="fade-right") En el PDF Ejercicios, se desarrollan problemas prácticos sobre suma de vectores, desplazamientos en el plano y descomposición vectorial, integrando tanto el enfoque algebraico como el gráfico, para fortalecer la comprensión de estos conceptos y su aplicación en contextos reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios           
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/17.png', alt='')

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Concepto de posición, desplazamiento, velocidad y aceleración

    p(data-aos="fade-down") Los conceptos de posición, desplazamiento, velocidad y aceleración son pilares fundamentales en el estudio de la cinemática, ya que permiten describir y analizar el movimiento de los cuerpos.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/18.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Concepto de posición, desplazamiento, velocidad y aceleración
            p.mb-4(data-aos="fade-right") En el PDF Sistemas de unidades y conversión de unidades, se presentan los principios básicos del Sistema Internacional y el Sistema Inglés, junto con ejercicios prácticos que permiten desarrollar la habilidad de transformar magnitudes, entre distintos sistemas, garantizando una correcta interpretación de datos y una comunicación técnica eficaz en entornos globalizados.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de posición, desplazamiento, velocidad y aceleración


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Representación gráfica de movimientos

    p(data-aos="fade-down") La representación gráfica de movimientos es una herramienta fundamental en el estudio de la cinemática, ya que permite visualizar de manera clara cómo varían la posición, la velocidad y la aceleración de un objeto a lo largo del tiempo.

    .bg-full-width.bg-color-6
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Representación gráfica de movimientos
            p.mb-4(data-aos="fade-right") En el PDF Representación gráfica de movimientos, se presentan distintos tipos de gráficos y su interpretación, junto con ejercicios que fortalecen la comprensión de estas representaciones. Este enfoque facilita el análisis del comportamiento del movimiento y su aplicación en contextos reales, como la ingeniería y la producción.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Representación gráfica de movimientos        
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/19.png', alt='')                  


    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/20.svg")
          .col-lg
            p.mb-0 Recuerde que la práctica constante y la resolución de problemas, son claves para dominar estos conceptos. No dude en revisar las referencias bibliográficas proporcionadas para ampliar su conocimiento y encontrar más ejercicios y aplicaciones.


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
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/3-1-posicion-desplazamiento-y-velocidad-media" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Posición, desplazamiento y velocidad media. En Física universitaria volumen 1. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/3-4-movimiento-con-aceleracion-constante" target="_blank" rel="noopener noreferrer") OpenStax. (s.f.). Movimiento con aceleración constante. En Física universitaria volumen 1.               

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QPEZmQ0GS1A" target="_blank" rel="noopener noreferrer") Pre-ICFES pa’l barrio. (2022). 5.1 Física – Cinemática, Estática, Dinámica.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/qAuljvJzeac" target="_blank" rel="noopener noreferrer") Universidadurjc. (2018). Actividad científica. Magnitudes escalares y vectoriales - 1.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/hGCg7pGjhtA" target="_blank" rel="noopener noreferrer") Profesor Particular Puebla. (2013). Conversión de unidades físicas.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
