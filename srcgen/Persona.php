<?php

/**
 * Clase destinada a la gestion de datos referente Persona
 *
 * @version 1.0
 * @since 12/06/2014
 */
class CPersonaData {
    var $db = null;

      var $nombre = null;
      var $apellido = null;
      var $direccion = null;
      var $edad = null;
      var $telefono = null;
      var $correo = null;

    /**
     * Constructor de la clase
     * @param CData $db
     */
    function CPersonaData($db){
        $this->db = $db;
    }

    /**
     * Funcion que inserta una nueva Persona en la base de datos
     */
    function insertarPersona($persona){
        $tabla = "Persona";
        $campos = "             persona_nombre,             persona_apellido,direccion_direccion,             persona_edad,telefono_telefono,             persona_correo        ";
        $valores = "'".$persona.getNombre()."','".$persona.getApellido()."','".$persona.getDireccion()."','".$persona.getEdad()."','".$persona.getTelefono()."','".$persona.getCorreo()."'";
        $r = $this->db->insertarRegistro($tabla, $campos, $valores);
        if ($r == "true") {
            return MENSAJE_PERSONA_INSERTADA;
        } else {
            return MENSAJE_ERROR_PERSONA_INSERTADA;
        }
    }
}