using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class ClientesServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "select * from clientes order by id desc";
            return BDManager.GetInstance.GetData<T>(sql);//Dapper
        }
      
        public static T ObtenerById<T>(int id)
        {
            const string sql = "select * from clientes where ID = @Id and estado_registro=1";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }

        public static int InsertCliente(Clientes Clientes)
        {
            const string sql = "INSERT INTO [dbo].[CLIENTES]([NOMBRE_COMPLETO], [TELEFONO], [DIRECCION]) VALUES (@NOMBRE_COMPLETO, @TELEFONO, @DIRECCION)";
            var parameters = new DynamicParameters();
            parameters.Add("@NOMBRE_COMPLETO", Clientes.NOMBRE_COMPLETO, DbType.String);
            parameters.Add("@TELEFONO", Clientes.TELEFONO, DbType.String);
            parameters.Add("@DIRECCION", Clientes.DIRECCION, DbType.String);
            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }



        public static int DeleteCliente(int id)
        {
            const string sql = "DELETE FROM  clientes where ID = @Id ";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);
            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
       

        public static int UpdateCliente(Clientes clientes)
        {
            const string sql = "UPDATE [dbo].[CLIENTES] SET [NOMBRE_COMPLETO] = @NOMBRE_COMPLETO, [TELEFONO] = @TELEFONO, [DIRECCION] = @DIRECCION WHERE [ID] = @ID";
            //const string storedProcedure = "UpdateUsuario";
            var parameter = new DynamicParameters();
            parameter.Add("@ID", clientes.Id, DbType.Int32);
            parameter.Add("@NOMBRE_COMPLETO", clientes.NOMBRE_COMPLETO, DbType.String);
            parameter.Add("@TELEFONO", clientes.TELEFONO, DbType.String);
            parameter.Add("@DIRECCION", clientes.DIRECCION, DbType.String);
            var result = BDManager.GetInstance.SetData(sql, parameter);
            //var result = BDManager.GetInstance.SPSetData(storedProcedure, parameter);
            return result;
        }

    }

}