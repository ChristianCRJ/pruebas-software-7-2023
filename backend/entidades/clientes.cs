namespace backend.entidades
{
    public class Clientes : Common
    {
        public int Id { get; set; }

        public string? NOMBRE_COMPLETO { get; set; }

        public string? TELEFONO { get; set; }

        public string? DIRECCION { get; set; }
    }
}
