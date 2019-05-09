<?php

/**
 * Clase destinada a la gestion de datos referente Direccion
 *
 * @version 1.0
 * @since 12/06/2014
 */
class CDireccionData {
    var $db = null;

      var $calle = null;
      var $ciudad = null;
      var $pais = null;

    /**
     * Constructor de la clase
     * @param CData $db
     */
    function CDireccionData($db){
        $this->db = $db;
    }

    /**
     * Funcion que inserta una nueva Direccion en la base de datos
     */
    function insertarDireccion($direccion){
        $tabla = "Direccion";
        $campos = "             direccion_calle,             direccion_ciudad,             direccion_pais        ";
        $valores = "'".$direccion.getCalle()."','".$direccion.getCiudad()."','".$direccion.getPais()."'";
        $r = $this->db->insertarRegistro($tabla, $campos, $valores);
        if ($r == "true") {
            return MENSAJE_DIRECCION_INSERTADA;
        } else {
            return MENSAJE_ERROR_DIRECCION_INSERTADA;
        }
    }
}