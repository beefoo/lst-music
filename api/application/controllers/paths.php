<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Paths extends CI_Controller {

  public function __construct() {
    parent::__construct();

    $this->load->model('paths_model');
  }

  public function index()
  {
    $paths = $this->paths_model->getEntries();
    $this->_respond(array(
      'status' => 1,
      'paths' => $paths
    ));
  }

  public function create()
  {
    $data = $this->_getData();
    $path = $this->paths_model->insertEntry($data);
    $this->_respond(array(
      'status' => 1
    ));
  }

  private function _getData(){
    $fields = $this->paths_model->accessibleFields();
    $data = array();

    foreach($fields as $field){
      if ($value = $this->input->get_post($field))
        $data[$field] = $value;
    }

    return $data;
  }

  private function _respond($data){
    echo json_encode($data);
  }
}
/* End of file paths.php */
/* Location: ./application/controllers/paths.php */
