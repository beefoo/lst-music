<?php
class Paths_model extends CI_Model {
  function __construct() {
    parent::__construct();
  }

  function accessibleFields(){
    return array("data");
  }

  function getEntries($params=array()){
    $params = array_merge(array('count'=>1000), $params);
    $query = $this->db->get('paths', $params['count']);
    return $this->parseEntries($query->result());
  }

  function insertEntry($data) {
    $data['date_created'] = time();
    $this->db->insert('paths', $data);
    $data['data'] = json_decode($data['data']);
    return $data;
  }

  function parseEntry($entry) {
    $entry->data = json_decode($entry->data);
    return $entry;
  }

  function parseEntries($entries) {
    foreach($entries as &$entry) {
      $entry = $this->parseEntry($entry);
    }
    return $entries;
  }
}
