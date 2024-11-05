// ExampleController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ExampleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var forecasts = new[]
        {
            new { Date = DateTime.Now, TemperatureC = 25, Summary = "Sunny" },
            new { Date = DateTime.Now.AddDays(1), TemperatureC = 22, Summary = "Cloudy" }
        };
        return Ok(forecasts);
    }
}
