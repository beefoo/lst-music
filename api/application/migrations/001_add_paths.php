<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Migration_Add_paths extends CI_Migration {
  public function up() {
    $this->dbforge->add_field(array(
      'id' => array('type' => 'INT', 'constraint' => 10, 'unsigned' => TRUE, 'auto_increment' => TRUE),
      'session' => array('type' => 'VARCHAR','constraint' => 40, 'null' => FALSE),
      'data' => array('type' => 'TEXT'),
      'date_created' => array('type' => 'INT', 'unsigned' => TRUE, 'constraint' => 10, 'null' => FALSE)
    ));
    $this->dbforge->add_key('id', TRUE);
    $this->dbforge->add_key('date_created');
    $this->dbforge->create_table('paths');
  }
  public function down() {
    $this->dbforge->drop_table('paths');
  }
}
