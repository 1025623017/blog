<?php
   
  $data = array(
    'name' => 'Murphy',
    'sex' => 'male');

  $response = array(
    'code'  => 200, 
    'message' => 'success for request',
    'data'  => $data,
    );

  echo json_encode($response);

?>