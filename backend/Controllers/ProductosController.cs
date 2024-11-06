// ExampleController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductosController : ControllerBase
{
    private static List<Producto> productos = new List<Producto>
    {
        new Producto { Id = 1, Nombre = "Producto 1", Descripcion = "Descripción 1", Precio = 10.00m },
        new Producto { Id = 2, Nombre = "Producto 2", Descripcion = "Descripción 2", Precio = 20.00m },
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
