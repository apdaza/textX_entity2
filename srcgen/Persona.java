public class Persona {

       private String nombre;
       private String apellido;
      private Direccion direccion;
       private int edad;
      private Telefono telefono;
       private String correo;

    public string getNombre(){
      return this.nombre;
    }
    public string getApellido(){
      return this.apellido;
    }
    public Direccion getDireccion(){
      return this.direccion;
    }
    public integer getEdad(){
      return this.edad;
    }
    public Telefono getTelefono(){
      return this.telefono;
    }
    public string getCorreo(){
      return this.correo;
    }

      public void setNombre(string value){
        this.nombre = value;
      }

      public void setApellido(string value){
        this.apellido = value;
      }

      public void setDireccion(Direccion value){
        this.direccion = value;
      }

      public void setEdad(integer value){
        this.edad = value;
      }

      public void setTelefono(Telefono value){
        this.telefono = value;
      }

      public void setCorreo(string value){
        this.correo = value;
      }


}