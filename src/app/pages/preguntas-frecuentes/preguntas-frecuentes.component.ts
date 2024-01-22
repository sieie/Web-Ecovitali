import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css'],
})
export class PreguntasFrecuentesComponent {

  terminoBusqueda: string =  '';

  filteredPreguntas: any = [];

  preguntas = [
    {
      id: 1,
      titulo: '¿Qué es el manejo integral de plagas?',
      respuesta: 'También conocido por su acrónimo MIP, es la utilización de todos los recursos necesarios que estén avalados por la autoridad competente de cada país, por medio de procedimientos operativos estandarizados y certificados que garanticen la operación con responsabilidad ambiental, minimizando los riesgos ocasionados por la presencia de plagas.',
    },
    {
      id: 2,
      titulo: '¿Qué son las plagas y cuáles son sus riesgos?',
      respuesta: 'Una definición más simple para las plagas es la de cualquier animal que compite con los seres humanos en recursos primarios como agua, alimento y espacio útil para los seres humanos, la presencia de las plagas como tal representa más que una molestia pues afectan estructuras, inventarios y propagan enfermedades.',
    },
    {
      id: 3,
      titulo: '¿Por qué es necesario un método profesional?',
      respuesta: 'Las empresas indiferentemente a su sector deben contar con un plan de manejo integral de plagas desarrollado e implementado por profesionales capacitados y certificados, con el objetivo de minimizar el riesgo de presencia de plagas sin afectar la salud de las personas, sus bienes ni al medio ambiente.',
    },
    {
      id: 4,
      titulo: 'He visto roedores en nuestras instalaciones, ¿Los pueden exterminar?',
      respuesta: 'Lamentablemente no existe posibilidad de eliminarlos en su totalidad con una simple visita pues siempre existen poblaciones que constituyen una constante amenaza a las instalaciones, los roedores no se pueden exterminar, en ECOVITALI controlamos la población de roedores que están generando problemas en un punto específico y llevar con nuestro cliente un tratamiento continuo que permita el control absoluto de una población que constituye un riesgo.',
    },
    {
      id: 5,
      titulo: 'He tenido picadas en el cuerpo que parecen de mosquitos, pero no tengo mosquitos en mi casa o mi trabajo, ¿Qué podría estar causando esto?',
      respuesta: 'Si las picadas generan comezón es muy posible que se trate de mosquito. Es posible que tenga mosquitos en su entorno sin darse cuenta de ello, pues unos pocos pueden picar múltiples veces y no existe un límite de picadas establecido cada uno; una simple apertura permite el acceso de estos vectores especialmente si estas no cuentan presión positiva o negativa. Debe analizarse también la posibilidad que se trate de otros insectos o ectoparásitos que pueden estar en el área, como piojos, pulgas, ácaros u otros, por distintas causas como la interacción de animales silvestres, mascotas, palomas, roedores que no hayan sido identificados, entre otras; es necesario que se implemente medidas de exclusión, pero si eso no funciona es mejor llamar a un especialista. Estamos prestos a asistirlo.',
    },
    {
      id: 6,
      titulo: '¿Cuándo es el mejor momento para un tratamiento de fumigación?',
      respuesta: 'Cualquier momento es el mejor para un tratamiento de fumigación, pero si se debe elegir uno, sería antes de tener plagas potenciales que afecten a las personas, animales, áreas, inventario o cualquier otro. Si bien es posible eliminarlas de un área específica, una vez que las plagas han llegado constituyen un riesgo potencial muy alto, en ECOVITALI trabajamos de forma preventiva y correctiva, pero motivamos a las personas a buscar acciones preventivas y continuas que los protejan de una amplia variedad de enfermedades y daños causados por las plagas, tanto en la vida personal como profesional. El control de plagas no se da en una sola aplicación sin importar si se trata desinsectación o desratización, es la secuencia de múltiples eventos asociados, ya sea porque los insumos aplicados solo tienen un tiempo de residualidad limitado o por la variedad de plagas y su comportamiento asociado con su entorno.',
    },
    {
      id: 7,
      titulo: 'Me compré unos muebles nuevos ¿Debería tratarlos para evitar problemas con termitas en el futuro?',
      respuesta: 'Es sensato presumir que estos pueden verse afectados por termitas y como tal tratarlos, ya que un mueble puede haberse contaminado en cualquier parte de la cadena de distribución, si no cuentan con la garantía de haber sido tratados contra las termitas, debido a sus materiales, su proceso de producción y almacenamiento; lamentablemente los daños de esta plaga no son evidentes en el corto plazo sino hasta cuando sea muy tarde. En ECOVITALI contamos con asociados de negocios que ya forman parte de esta cadena de cuidado y garantizan que sus productos han sido tratados contra las termitas, sin embargo no solo un mueble nuevo puede traer termitas ya que puede transportarse de muchas maneras como una caja frutas, cartones, jardines y plantas nuevas, en el subsuelo de las casas cuando las bases de relleno no han sido tratadas, etc., es muy importante contar con visitas de un profesional certificado que evalué su entorno con regularidad y con ello crear una barrera protectora contra las plagas.',
    },
    {
      id: 8,
      titulo: 'Tengo una bodega de almacenamiento y distribución de granos y quiero evitar que se contaminen, ¿Se puede aplicar sistemas preventivos y de no ser posible, como controlarlos?',
      respuesta: 'Si es posible controlar las plagas con sistemas preventivos en las bodegas de almacenamiento ya sean granos o no, esto se logra a partir de la implementación de sistemas de control de Desinsectación y Desratización – DD, en ECOVITALI trabajamos con nuestro sistema de análisis, investigación y monitoreo – AIM continuamente sobre bodegas y otras variables asociadas al inventario que se haya de almacenar, desde planta de producción, contenedores, barcos, camiones, entre otros elementos de la cadena de distribución, pues es importante contemplar el tratamiento y condiciones del inventario en todo momento. Evidentemente no se trata solo de aplicar las medidas de control químico, sino que el inventario debe ser evaluado y analizado desde una situación inicial, mediante planes preventivos de corto y largo plazo que garanticen las condiciones del producto almacenado y a su vez que no se generen infestaciones.',
    },
    {
      id: 9,
      titulo: '¿En qué se diferencia ECOVITALI con el manejo integral de plagas tradicional?',
      respuesta: 'El MIP es un sistema proactivo que se anticipa a la incidencia y el impacto de las plagas en un entorno específico y en los procesos asociados a la operación de cualquier empresa pero contempla la toma de acciones correctivas basadas en un plan congruente, mientras que el control de plagas tradicional se trata de buscar la solución de un problema de un problema específico de forma reactiva de corto plazo sin contemplación lateral de otras variables, pudiendo generar perjuicios a las personas y el medio ambiente, así como ser eficaces en el tiempo.',
    },
    {
      id: 10,
      titulo: 'He visto que se vende productos para el control de insectos, pero entiendo que no es algo profesional ¿Cómo funciona la desinsectación de un profesional?',
      respuesta: 'Si bien es posible encontrar plaguicidas para el control de insectos, tanto para el sector agrícola como el de salud pública, los servicios profesionales destacan por el intenso conocimiento de los ejecutivos de dicha empresa, desde su selección hasta su uso, lo que permite elegir un insumo de forma específica a la problemática el sector, asociado a equipos de aplicación profesional que aseguran una distribución homogénea del insumo, inspecciones, análisis del entorno, la comprensión de la dinámica entre las plagas y el medio ambiente o la geografía, sistemas de limpieza, almacenamiento, reportes, análisis de datos y demás variables; al final un plaguicida es solo tan bueno como lo es la persona que lo aplique, un profesional no solo se limita a aplicar el insumo plaguicida, sino que valora otras variables desde aquellas asociadas al control, hasta aquellas asociadas a la salud de las personas, sus bienes, las mascotas, el medio ambiente, normativas y técnicas, entre otras.',
    },
    {
      id: 11,
      titulo: 'Veo muchas personas tratando plagas ¿Qué hace profesional a una empresa y a otra no, como diferenciarlas?',
      respuesta:
        'Una empresa profesional como ECOVITALI inicialmente debe contar con los permisos habilitantes de cada país, en el Ecuador hay agencias como SRI, ARCSA y AGROCALIDAD de forma mínima obligatoria, sin embargo en ECOVITALI nos hemos profesionalizado aun más al contar con certificaciones internacionales y nacionales de sistemas de gestión integral que sustentan nuestra oferta técnica de proveer a nuestros clientes de información técnica que valida nuestra operación, desde los insumos plaguicidas, equipos, sistemas de gestión, sistemas de operación, sistemas de análisis de datos, trazabilidad de la información, entre otras.',
    },
    {
      id: 12,
      titulo: 'Se que se usan químicos para el control de insectos, ¿Es peligroso para la salud o existe algún riesgo?',
      respuesta: 'Gracias a los altos y exigentes protocolos de ECOVITALI los riesgos a la salud cuando se ejecuta un tratamiento con insumos químicos, no solo han sido contemplados sino que gracias a nuestro sistema de gestión integral el riesgo por exposición es prácticamente nulo, de la misma manera esta lógica se aplica incluso cuando se trata con insumos orgánicos, por el contrario un controlador que no cumpla con las normas técnicas apropiadas, planes de comunicación y socialización, equipos apropiados y una buena selección de insumos o técnicas de aplicación, dan como resultado desde un control nulo de las plagas hasta un riesgo a la salud de las personas, medio ambiente y un riesgo latente a los bienes.',
    },
    {
      id: 13,
      titulo: '¿Qué tipo de insumos se ocupan para tratar insectos y que tienen de especial los equipos que utilizan?',
      respuesta: 'Los insumos que se aplican para tratar los insectos son los insecticidas, la oferta de éstos puede variar desde aquellos de uso agrícola hasta los de salud pública, existen algunos que son de origen sintético hasta aquellos de origen orgánico, lo importante es no solo determinar que tipo de insumo se va a aplicar sino si este tiene relación directa con que tipo de insecto se va a tratar, frecuencia en función de la población y demás variables asociadas al control de plagas.',
    },
    {
      id: 14,
      titulo: '¿Qué es el tratamiento de desratización?',
      respuesta: 'El tratamiento de ECOVITALI es específico al control de la población roedores de forma preventiva y correctiva, al ser dinámico y proactivo se ajusta a los procesos asociados de operación de cualquier entorno mediante el uso de recursos físicos, mecánicos y químicos. En función de la identificación del roedor y su comportamiento en el área como parte de un plan estratégico de control continuo y no un evento aislado.',
    },
    {
      id: 15,
      titulo: '¿Por qué es necesario el tratamiento de desratización?',
      respuesta: 'En ECOVITALI sabemos que cualquier instalación, ya sea una residencia o empresa es potencialmente susceptible a la presencia de roedores debido a su comportamiento invasivo y la ausencia de predadores naturales en ambientes urbanos, pues están altamente adaptados al medio urbano y son capaces de colonizar su infraestructura general, como la red de alcantarillado, tuberías y jardines, entre otros, a partir de estos puntos acceder al interior de estructuras.',
    },
    {
      id: 16,
      titulo: '¿En qué consiste la desratización?',
      respuesta: 'La desratización o control de roedores de ECOVITALI es un tratamiento primordialmente preventivo aunque con connotaciones correctivas, implica el uso de técnicas estandarizadas y análisis de datos, desde la correcta identificación de puntos críticos hasta la selección de insumos que hayan sido evaluados en cuanto a su efectividad y rendimiento. La desratización con ECOVITALI conlleva labores técnicas de sellado de accesos identificados como puntos críticos, auditorías de manejo de inventario, prácticas culturales y riesgos asociados exteriores como interiores, la instalación de un cordón sanitario haciendo uso de insumos químicos y trampas de acción mecánica, aplicación de repelentes orgánicos, entre otros que cubren los riesgo debido a que el comportamiento de los roedores puede variar en función de muchos escenarios y las condiciones climáticas asociadas.',
    },
    {
      id: 17,
      titulo: '¿Cuándo es correcto iniciar un tratamiento de desratización?',
      respuesta: 'Cualquier momento es un buen momento para iniciar un tratamiento de desratización ya que los roedrores constituyen una constante amenaza para cualquier instalación, además de los riesgos asociadosa a la salud, bienes e inventario de empresas ya sea que se trate de materia prima o productos terminados, por ello en ECOVITALI entregamos un tratamiento con un enfoque preventivo y correctivo con el objetivo de controlar y eliminar de forma eficaz potenciales infestaciones, gracias a nuestro profundo conocimiento de su biología y comportamiento, que puede cambiar por causas de entorno, condiciones climáticas, fuentes de nutrición, entre otras causas.',
    },
    {
      id: 18,
      titulo: '¿Cómo saber si tengo roedores?',
      respuesta: 'Detectar a los roedores antes que sean evidentes no es una tarea sencilla pues son sumamente sigilosos y primordialmente nocturnos, un roedor exitoso es aquel que no ha sido detectado y puede generar una sensación de falsa seguridad, sin embargo ante la mirada del profesional capacitado de ECOVITALI se puede lograr evidenciar su presencia, niveles de infestación e incluso el tipo de roedor en caso de existir, en caso contrario ECOVITALI entrega un plan de acción sobre puntos críticos de riesgo ante una infestación potencial como medidas de exclusión.',
    },
    {
      id: 19,
      titulo: '¿Cómo prevenir la presencia de roedores?',
      respuesta: 'La mejor forma de prevenir y evitar la presencia de roedores es aplicando los conceptos de desratización de forma preventiva, pues una vez que un roedor ha ingresado a un área determinada es muy posible tener una infestación ya que se reproducen rápidamente y las poblaciones pequeñas se convierten en infestaciones en muy poco tiempo. En ECOVITALI trabajamos sobre planes preventivos con estrategias y protocolos estandarizados pero adaptables a las múltiples condiciones del entorno y clima, levantando un análisis de puntos críticos, estructuras puesto que los roedores son capaces de atravesar espacios que parecen muy pequeños para ellos, además de otras generalidades de un área como protocolos de limpieza, prácticas culturales, almacenamiento, manejo de desechos , entre otras.',
    },
    {
      id: 20,
      titulo: '¿Qué esperar de ECOVITALI en el manejo de granos almacenados?',
      respuesta: 'En ECOVITALI estamos preparados para tratar los vectores que amenazan a granos y sistemas de almacenaje, tanto artrópodos de forma general así como roedores e incluso otros menos tradicionales pero aun así peligrosos. Nuestra comprensión técnica de los ciclos de reproducción por vector y su comportamiento en función de las condiciones climáticas nos permite ofrecer un servicio con seguimiento preventivo y correctivo; el control de ECOVITALI no se aplica a partir de una receta única generada por el proveedor de un insumo sino el resultado de la experiencia, estudios científicos asociados, técnicas claras certificadas y elaboradas ajustadas a cada escenario; nuestro servicio contempla el aspecto técnico aplicado a la realidad del mercado concentrados en la eficiencia de nuestros procesos y no en el volumen de producto o insumo aplicado, el monitoreo hasta la generación de reportes en conjunto con un claro criterio financiero, evitando daños a los granos con responsabilidad ambiental.',
    },
    {
      id: 21,
      titulo: '¿Cuáles son los riesgos de las termitas?',
      respuesta: 'Las termitas son insectos especiales que viven en grandes colonias de cientos y hasta millones de ejemplares, las colonias son primordialmente subterráneas y alcanzan varios metros, comen madera y elementos de celulosa sin embargo ya que son sumamente fuertes y constantes en su movilidad pueden crear rutas a través de estructuras rígidas como el cemento. En estos casos el daño no es evidente o de riesgo inmediato pero estas rutas rompen un sello de seguridad de la estructura y contribuyen al deterioro de las bases de acero, en términos de largo plazo son un riesgo estructural de las edificaciones si no son controladas.',
    },
    {
      id: 22,
      titulo: '¿En qué consiste el tratamiento especializado?',
      respuesta: 'Los tratamientos especializados difieren de las tradicionales al control de plagas estándar pues muchos de los animales contemplados en esta categoría no pueden ser considerados como plagas sin antes realizar un estudio ambiental que lo justifique, cada tratamiento es diseñado de forma independiente haciendo uso de herramientas autorizadas y avaladas por nuestro sistema de gestión integrada, con un bajo o nulo impacto ambiental pero si creando una barrera de exclusión.',
    },
    {
      id: 23,
      titulo: '¿Por qué tendría plagas la industria farmacéutica?',
      respuesta: 'Todas las empresas ofrecen las mismas variables mínimas requeridas para las plagas, desde su accesibilidad hasta la proliferación, pues estas requieren agua, temperatura ideal, fuentes de alimentación y refugio, la industria farmacéutica y sus canales de distribución no son la excepción, aunque se se puede creer que gracias a sus protocolos internos con instalaciones limpias y desinfectadas las plagas pueden ser evitadas, la realidad es que entre el intercambio de bienes, deterioro continuo de instalaciones aun cuando sean mínimas y el flujo de personas, entre otras variables de riesgo, las plagas siempre encontrarán la manera de contaminar un área, razón por la cual su control es un desafío ante los estrictos protocolos de tratamiento requeridos por las agencias de regulación y calidad.',
    },
    {
      id: 24,
      titulo: '¿En donde se aplica el servicio de control de plagas?',
      respuesta: 'El servicio de control de plagas se debe implementar en cualquier entorno que ofrezca recursos tales como agua, alimento y refugio, ya sea de forma independiente y más aun cuando estas se combinan, pues existe el riesgo de su presencia y con ello el perjuicio a los bienes del estado y la ciudadanía, en ECOVITALI entregamos un servicio integral de control de plagas en todo el país con planes adaptables a cada entorno, con recomendaciones y trabajo conjunto con el personal en dependencia, con estrategias de capacitación y comunicación con la ciudadanía. No existe un área que no pueda o no deba ser tratada, todos estamos expuestos a las plagas y es necesario contar un servicio profesional y altamente capacitado, que permita la conservación de los bienes y más importante preservar la salud de las personas.',
    },
    {
      id: 25,
      titulo: '¿Por qué habría plagas en el sector de la salud?',
      respuesta: 'Las plagas necesitan e invadirán cualquier área o entorno que ofrezca refugio, agua y/o alimentos, ya que las plagas no se generan de forma espontánea en un área sino que son introducidas de múltiples maneras a un entorno de control, en ECOVITALI hemos diseñado sistemas preventivos con la capacidad de adaptarse a un estado correctivo, no es prudente excluir al sector de la salud de la lista de víctimas de las plagas, ya que al igual cualquier otra actividad esta se desarrolla en edificaciones que están sujetas a factores externos que atentan constantemente contra su integridad.',
    },
    {
      id: 26,
      titulo: '¿Por qué habría plagas en instituciones financieras?',
      respuesta: 'Todas las áreas de trabajo ofrecen en mayor o menor grado lo necesario para la presencia de plagas y las instituciones financieras no son la excepción, ya que a pesar de instalaciones limpias y desinfectadas las variables como agua y temperatura óptima, cualquier residuo puede ser utilizado como alimento y con ello se cierra el círculo de las condiciones requeridas para la presencia y proliferación de plagas. Las instituciones financieras se ven expuestas al alto tránsito de personas, productos almacenados que se utilizan para la operación, cafeterías, sistemas de ventilación y su alta exposición a externalidades como drenajes, incluso un grifo o una gotera bastan para incrementar el riesgo. El control de plagas es un desafío en las instalaciones de instituciones financieras, debido a los estrictos protocolos de seguridad requeridos por las agencias de regulación y más importante aun por las propias instituciones financieras de forma individual.',
    },
    {
      id: 27,
      titulo: '¿Por qué el control de plagas en la industria?',
      respuesta: 'El control de plagas es relevante en la industria alimentaria desde el principio de la cadena de producción hasta su destino final, siendo un factor imprescindible para garantizar la inocuidad de los alimentos y protegerlos de las peligrosas plagas que pueden transmitir enfermedades a las personas. ECOVITALI genera registros de situación inicial, datos de densidad de población de plagas, productos y equipos junto a su condición y características, capturas y proyecciones, entre otros, que permiten elevar cálculos estadísticos históricos y proyectados, muy aplicados y solicitados en auditorias y verificaciones de calidad de procesos.',
    },
    {
      id: 28,
      titulo: '¿Por qué el control de plagas en las instalaciones gubernamentales?',
      respuesta: 'Las instalaciones gubernamentales son de amplio espectro y requiere de técnicas especiales, desde oficinas, hospitales, terminales tanto terrestres como aéreos, instalaciones de producción, petroleras, almaceneras, entre otros. Las plagas generan múltiples daños que van desde enfermedades a las personas hasta los bienes, y una mala aplicación del servicio supone nuevos riesgos equivalentes que pueden incluso llegar a generar pérdidas masivas; en ECOVITALI trabajamos por un servicio de excelencia para la sociedad en cooperación tripartita con empresas y agencias internacionales, creando incluso elementos únicos para cada entidad. ECOVITALI cuenta con un equipo humano profesional complementado con equipos y unidades móviles equivalentes, políticas anti sobornos, protocolos de seguridad administrativas y logísticas, certificaciones de calidad integral de procesos y de seguridad especialmente contra las drogas, licenciamientos y permisos de funcionamiento que certifican que no solo hacemos un buen trabajo, sino que lo hacemos mejor.',
    },
  ];

  filtrarPreguntas() {
    return this.preguntas.filter(pregunta =>
      pregunta.titulo.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
