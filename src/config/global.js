export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Cinemática y dinámica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de cinemática y dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Magnitudes físicas: escalares y vectoriales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas de unidades y conversión de unidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Análisis vectorial: suma, resta y descomposición de vectores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Concepto de posición, desplazamiento, velocidad y aceleración',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Representación gráfica de movimientos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Leyes de Newton y aplicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Primera Ley de Newton: principio de la inercia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Segunda ley de Newton: relación entre fuerza, masa y aceleración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tercera ley de Newton: acción y reacción',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Identificación de fuerzas: peso, normal, tensión y fricción',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Aplicaciones de las leyes de Newton en entornos industriales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis del movimiento de cuerpos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diagramas de cuerpo libre',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Movimiento en planos inclinados y superficies rugosas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Movimiento Circular Uniforme (MCU) y No Uniforme (MCNU)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Análisis de sistemas con múltiples cuerpos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Resolución de problemas en contextos industriales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010). <i>Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015). <i>Problemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010). <i>Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015). <i>Problemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010).<i> Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015).<i> Problemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Aceleración',
      significado: 'Tasa de cambio de la velocidad, con respecto al tiempo.',
    },
    {
      termino: 'Aceleración centrípeta',
      significado:
        'Aceleración dirigida hacia el centro de la trayectoria circular, causada por una fuerza centrípeta.',
    },
    {
      termino: 'Aceleración uniforme',
      significado: 'Aceleración constante, en magnitud y en dirección.',
    },
    {
      termino: 'Cinemática',
      significado:
        'Rama de la física que estudia el movimiento de los cuerpos, sin considerar las causas que lo originan.',
    },
    {
      termino: 'Coeficiente de fricción',
      significado:
        'Medida de la "pegajosidad" entre dos superficies en contacto, que influye en la magnitud de la fuerza de fricción.',
    },
    {
      termino: 'Desplazamiento',
      significado:
        'Cambio de posición de un objeto, entre dos puntos, considerando la dirección y el sentido del cambio.',
    },
    {
      termino: 'Diagrama de cuerpo libre',
      significado:
        'Representación gráfica que muestra todas las fuerzas que actúan sobre un objeto, considerándolo como un punto.',
    },
    {
      termino: 'Dinámica',
      significado:
        'Rama de la física que analiza las fuerzas que producen o modifican el movimiento de los cuerpos.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Número de revoluciones que un objeto completa en una unidad de tiempo, en un movimiento circular.',
    },
    {
      termino: 'Fricción',
      significado:
        'Fuerza que se opone al movimiento relativo entre dos superficies en contacto.',
    },
    {
      termino: 'Fuerza',
      significado:
        'Interacción que puede causar un cambio en el estado de movimiento de un objeto.',
    },
    {
      termino: 'Fuerza centrípeta',
      significado:
        'Fuerza dirigida hacia el centro de la trayectoria circular, que causa la aceleración centrípeta.',
    },
    {
      termino: 'Fuerza de fricción',
      significado:
        'Fuerza que se opone al movimiento relativo entre dos superficies en contacto, dependiendo del coeficiente de fricción y la fuerza normal.',
    },
    {
      termino: 'Fuerza neta',
      significado:
        'Suma vectorial de todas las fuerzas que actúan sobre un objeto.',
    },
    {
      termino: 'Fuerza normal',
      significado:
        'Fuerza perpendicular que una superficie ejerce, sobre un objeto que está en contacto con ella.',
    },
    {
      termino: 'Inercia',
      significado:
        'Propiedad de los objetos para resistir cambios en su estado de movimiento.',
    },
    {
      termino: 'Magnitud escalar',
      significado:
        'Propiedad que solo requiere un número y una unidad, para ser descrita completamente, como la masa, el tiempo o la temperatura.',
    },
    {
      termino: 'Magnitud vectorial',
      significado:
        'Propiedad que requiere un número, una unidad, una dirección y un sentido, para su descripción completa, como la velocidad, la aceleración o la fuerza.',
    },
    {
      termino: 'Masa',
      significado:
        'Medida de la inercia de un objeto, que relaciona la fuerza aplicada con la aceleración resultante.',
    },
    {
      termino: 'MCU',
      significado:
        'Sigla de Movimiento Circular Uniforme, donde un objeto se mueve con una velocidad angular constante.',
    },
    {
      termino: 'MCNU',
      significado:
        'Sigla de Movimiento Circular No Uniforme, donde la velocidad angular de un objeto, varía con el tiempo.',
    },
    {
      termino: 'Momento angular',
      significado:
        'Cantidad que describe la rotación de un objeto alrededor de un eje, dependiendo de su masa, velocidad y distancia al eje.',
    },
    {
      termino: 'Momento lineal',
      significado:
        'Cantidad que describe el movimiento de un objeto en línea recta, calculada como el producto de su masa y velocidad.',
    },
    {
      termino: 'Movimiento circular',
      significado:
        'Tipo de movimiento en el que un objeto sigue una trayectoria circular.',
    },
    {
      termino: 'Período',
      significado:
        'Tiempo que tarda un objeto en completar una revolución completa, en un movimiento circular.',
    },
    {
      termino: 'Peso',
      significado:
        'Fuerza gravitacional que actúa sobre un objeto, calculada como el producto de su masa y la aceleración de la gravedad.',
    },
    {
      termino: 'Posición',
      significado:
        'Ubicación de un objeto en el espacio, con respecto a un sistema de referencia.',
    },
    {
      termino: 'Potencia',
      significado: 'Tasa a la que se realiza trabajo o se transfiere energía.',
    },
    {
      termino: 'Radio',
      significado:
        'Distancia desde el centro de la trayectoria circular, hasta el objeto en movimiento, en un movimiento circular.',
    },
    {
      termino: 'Rapidez',
      significado:
        'Magnitud escalar que describe qué tan rápido se mueve un objeto, sin considerar la dirección.',
    },
    {
      termino: 'Sistema de referencia',
      significado:
        'Marco de referencia utilizado para describir la posición, velocidad y aceleración de un objeto.',
    },
    {
      termino: 'Tensión',
      significado:
        'Fuerza que actúa a lo largo de un objeto extendido, como una cuerda o un cable, cuando se estira.',
    },
    {
      termino: 'Trabajo',
      significado:
        'Transferencia de energía que ocurre cuando una fuerza actúa sobre un objeto y lo desplaza en la dirección de la fuerza.',
    },
    {
      termino: 'Vector',
      significado:
        'Entidad matemática que representa una cantidad con magnitud, dirección y sentido.',
    },
    {
      termino: 'Velocidad',
      significado:
        'Tasa de cambio de la posición con respecto al tiempo, que puede expresarse como velocidad media o instantánea.',
    },
    {
      termino: 'Velocidad angular',
      significado:
        'Rapidez con la que un objeto recorre un ángulo en una unidad de tiempo, en un movimiento circular.',
    },
    {
      termino: 'Velocidad lineal',
      significado:
        'Rapidez con la que un objeto se mueve a lo largo de la trayectoria circular, en un movimiento circular.',
    },
  ],
}
