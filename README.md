# My Travel Journal 🌍

¡Bienvenido a **My Travel Journal**! Esta es una aplicación web sencilla y elegante desarrollada con React, diseñada para explorar y demostrar el manejo de datos a través de props en React. Imagina un diario de viajes personal donde cada entrada se construye dinámicamente a partir de datos estructurados, permitiendo una experiencia fluida y modular. ✈️

## 📸 Vista Previa

<div align="center" width="">
  
![App Screenshot](/public/Captura-TravelJournal.png)
  
</div>

## 📋 Descripción General

Esta aplicación simula un diario de viajes, mostrando una lista de entradas de viaje con imágenes, títulos, fechas, descripciones y enlaces a mapas. Cada entrada se genera a partir de un array de datos, ilustrando cómo React maneja la renderización de listas y el paso de información entre componentes mediante props. Es un ejemplo práctico de cómo construir interfaces dinámicas sin necesidad de estado complejo.

## ✨ Características Principales

- **📍 Entradas Dinámicas**: Cada viaje se representa como un componente reutilizable, con detalles como país, título, fechas y texto descriptivo.
- **🖼️ Imágenes y Enlaces**: Incluye imágenes de destino y enlaces directos a Google Maps.
- **🎨 Diseño Responsivo**: Estilos CSS limpios y modernos que se adaptan a diferentes tamaños de pantalla.
- **🔧 Modularidad**: Componentes separados (Header, Entry) que facilitan la mantenibilidad y escalabilidad.
- **🚀 Fácil de Extender**: Agregar nuevas entradas simplemente editando el archivo de datos.

## 🔧 Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario, enfocada en componentes y props.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones React.
- **JavaScript (ES6+)**: Lenguaje base para la lógica de la aplicación.
- **CSS**: Estilos personalizados para el diseño visual.
- **HTML**: Estructura básica de la aplicación.

## 🚀 Cómo Funciona la Aplicación

La aplicación se divide en componentes clave que colaboran para renderizar el diario de viajes:

1. **Header**: Muestra el título de la aplicación con un ícono de globo terráqueo.
2. **App (Principal)**: Importa los datos y mapea cada entrada a un componente `Entry`, pasando los datos como props.
3. **Entry**: Recibe props (como `title`, `country`, `img`, etc.) y renderiza la información en un artículo HTML estructurado.

El flujo es simple: los datos se cargan desde un archivo externo, se transforman en elementos JSX mediante el método `map()`, y se renderizan en el DOM. Esto demuestra el poder de React para manejar listas de datos de manera eficiente.

### Fragmentos de Código Destacados

Aquí algunos ejemplos clave del código, con énfasis en conceptos de React:

- **Mapeo de Datos en App.jsx**:

  ```jsx
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });
  ```

  *Explicación*: Este fragmento usa el método `map()` de JavaScript para iterar sobre el array de datos. Cada objeto se pasa como props al componente `Entry` usando el operador spread (`...entry`), lo que facilita el paso de múltiples propiedades sin listarlas una por una. La prop `key` es esencial en React para optimizar la renderización de listas y evitar errores en el DOM virtual.

- **Renderizado de Props en Entry.jsx**:

  ```jsx
  export default function Entry(props) {
    return (
      <article className="journal-entry">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </article>
    );
  }
  ```

  *Explicación*: Aquí se ve cómo las props se acceden y renderizan en el JSX. Por ejemplo, `props.img.src` extrae la URL de la imagen del objeto prop, y se inserta directamente en el atributo `src` del elemento `<img>`. Esto ilustra el manejo del DOM en React: en lugar de manipular el DOM manualmente (como en vanilla JS), React actualiza automáticamente los elementos basados en cambios en las props.

- **Punto de Entrada en main.jsx**:

  ```jsx
  createRoot(document.getElementById('root')).render(<App />);
  ```

  *Explicación*: Este código monta la aplicación React en el elemento DOM con ID 'root'. Usa la nueva API de React 18 (`createRoot`) para una renderización más eficiente, conectando el componente raíz `App` con el DOM real.

Estos ejemplos resaltan conceptos clave como el flujo de datos unidireccional (props down), la composición de componentes y la abstracción del DOM, que hacen a React ideal para aplicaciones dinámicas.

## 📖 Instrucciones de Uso

1. **Clona el Repositorio**: Descarga el código desde GitHub ejecutando `git clone https://github.com/Seb-RM/Data-Driven-Page-Travel_Journal.git` en tu terminal.
2. **Instala Dependencias**: Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias necesarias.
3. **Ejecuta la Aplicación**: Usa `npm run dev` para iniciar el servidor de desarrollo. Abre tu navegador en `http://localhost:5173/` para ver la aplicación en acción.
4. **Personaliza**: Edita `src/assets/data.js` para agregar o modificar entradas de viaje. ¡Experimenta cambiando props para ver cómo afectan la renderización!
