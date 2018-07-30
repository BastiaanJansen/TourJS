<?php

class Main {
    protected $db, $result;
    private $row = array();
    
    public function __construct() {
        // Connect to database
        $host = 'localhost';
        $user = 'root';
        $password = 'root';
        $dbName = 'marble';
        
        $this->db = mysqli_connect($host, $user, $password, $dbName) or die(mysqli_connect_error());
        
        if ($this->db->connect_errno < 0) {
            echo 'Connected!';
        }
    }
    
    public function query($sql) {
        $this->result = $this->db->query($sql);
    }
    
    public function fetch() {
        while ($fetch = mysqli_fetch_assoc($this->result)) {
            $this->row[] = $fetch;
        }
        return $this->row;
    }
    
    public function rows() {
        return $this->result->num_rows;
    }
    
    public function clear() {
        $this->row = null;
    }
    
    public function close() {
        mysqli_close($this->db);
        echo 'Closed!';
    }
    
    public function real_escape_string($string) {
        return $this->db->real_escape_string($string);
    }
}