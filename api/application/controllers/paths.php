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

  private function _respond($data){
    echo json_encode($data);
  }
}
/* End of file paths.php */
/* Location: ./application/controllers/paths.php */
