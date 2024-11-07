// ExampleController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductosController : ControllerBase
{
    private static List<Producto> productos = new List<Producto>
    {
        new Producto { Id = 1, Nombre = "Workshop (Blue Print)", Descripcion = "Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluyendo la identificación de casos de uso comercial inmediatos, la definición de roles y responsabilidades, así como el establecimiento de medidas para evaluar el éxito y el impacto.", Precio = 10.00m },
        new Producto { Id = 2, Nombre = "Desarrollo de Aplicaciones", Descripcion = "En el mundo actual, con la creciente complejidad y cantidad de problemas, el desarrollo de aplicaciones se ha vuelto fundamental para encontrar soluciones precisas. Estas aplicaciones posibilitan la asignación de tareas repetitivas a los ordenadores, logrando la automatización de procesos que antes necesitaban la intervención humana en dichas tareas repetitivas.", Precio = 20.00m },
        new Producto { Id = 3, Nombre = "Capacitación Gama de Cursos Tableau", Descripcion = "Adicionalmente ofrecemos cursos sobre: Business Intelligence, Data Mining, Big Data, Data to Insight, Tableau Prep, Tableau Desktop, Visual Analytics, Tableau Server.", Precio = 30.00m },
        new Producto { Id = 4, Nombre = "Implementación de Proyectos", Descripcion = "Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI) ® e International Project Management Association (IPMA). Esto nos permite contar con las competencias para coordinar equipos de trabajo en el inicio, planeación, construcción, monitoreo y control de las actividades y recursos involucrados en un proyecto a partir de los objetivos y requerimientos de nuestro cliente.", Precio = 10.00m }
        // Agrega más productos si es necesario
    };


    [HttpGet]
    public IActionResult GetProductos()
    {
        return Ok(productos);
    }

    [HttpGet("{id}")]
    public IActionResult GetProducto(int id)
    {
        var producto = productos.FirstOrDefault(p => p.Id == id);
        if (producto == null)
        {
            return NotFound();
        }
        return Ok(producto);
    }

    [HttpPost]
    public IActionResult CreateProducto([FromBody] Producto nuevoProducto)
    {
        nuevoProducto.Id = productos.Count + 1;
        productos.Add(nuevoProducto);
        return CreatedAtAction(nameof(GetProducto), new { id = nuevoProducto.Id }, nuevoProducto);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProducto(int id, [FromBody] Producto productoActualizado)
    {
        var producto = productos.FirstOrDefault(p => p.Id == id);
        if (producto == null)
        {
            return NotFound();
        }
        producto.Nombre = productoActualizado.Nombre;
        producto.Descripcion = productoActualizado.Descripcion;
        producto.Precio = productoActualizado.Precio;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProducto(int id)
    {
        var producto = productos.FirstOrDefault(p => p.Id == id);
        if (producto == null)
        {
            return NotFound();
        }
        productos.Remove(producto);
        return NoContent();
    }
}
