<?php

/**
 * Clase destinada a la gestion de datos referente Telefono
 *
 * @version 1.0
 * @since 12/06/2014
 */
class CTelefonoData {
    var $db = null;

      var $indicador = null;
      var $numero = null;

    /**
     * Constructor de la clase
     * @param CData $db
     */
    function CTelefonoData($db){
        $this->db = $db;
    }

    /**
     * Funcion que inserta una nueva Telefono en la base de datos
     */
    function insertarTelefono($telefono){
        $tabla = "Telefono";
        $campos = "             telefono_indicador,             telefono_numero        ";
        $valores = "'".$telefono.getIndicador()."','".$telefono.getNumero()."'";
        $r = $this->db->insertarRegistro($tabla, $campos, $valores);
        if ($r == "true") {
            return MENSAJE_TELEFONO_INSERTADA;
        } else {
            return MENSAJE_ERROR_TELEFONO_INSERTADA;
        }
    }
}