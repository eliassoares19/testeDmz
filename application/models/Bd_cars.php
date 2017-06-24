<?php

class Bd_cars extends CI_Model {

    public function __construct() {
        parent::__construct();
        
    }
       
    public function getCars(){
        
        $this->db->select('*');
        $this->db->from('cars');
        
        $query = $this->db->get();
        $this->db->close();
        
        return $query->result();
        
    }
}
