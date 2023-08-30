using backend.connection;
using backend.entidades;
using backend.servicios;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[EnableCors("DevelopmentCors")]
[ApiController]
[Route("api/[controller]")]
public class ClientesController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly string? connectionString;

    public ClientesController(IConfiguration configuration)
    {
        _configuration = configuration;
        connectionString = _configuration["SqlConnectionString:DefaultConnection"];
        BDManager.GetInstance.ConnectionString = connectionString;
    }

    [HttpGet]
    [Route("GetAllClientes")]
    public IActionResult GetAllClientes()
    {
        try
        {
            var result = ClientesServicios.ObtenerTodo<Clientes>();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpGet]
    [Route("GetClientesById")]
    public IActionResult GetClientesById([FromQuery] int id)
    {
        try
        {
            var result = ClientesServicios.ObtenerById<Clientes>(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost]
    [Route("AddCliente")]
    public IActionResult AddCliente(Clientes Clientes)
    {
        try
        {
            var result = ClientesServicios.InsertCliente(Clientes);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete]
    [Route("DeleteCliente")]
    public IActionResult DeleteCliente([FromQuery] int id)
    {
        try
        {
            var result = ClientesServicios.DeleteCliente(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPut]
    [Route("UpdateCliente")]
    public IActionResult UpdateCliente(Clientes Clientes)
    {
        try
        {
            var result = ClientesServicios.UpdateCliente(Clientes);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}