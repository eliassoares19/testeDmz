<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('bd_cars'); //Carrega o model que consulta o BD
    }

    //funcao default que chama a tela do usuario comum (tela inicial)
    public function index() {
        $dados['titulo'] = 'TCC Elias Soares';
        $this->load->view('elementos/header', $dados);
        $this->load->view('botao', $dados);
        $this->load->view('elementos/footer');
    }
    
    public function home() {
        $dados['titulo'] = 'TCC Elias Soares';
        $cars = $this->bd_cars->getCars();
        $dados['tabela'] = $this->table($cars);
        $this->load->view('elementos/header', $dados);
        $this->load->view('home', $dados);
        $this->load->view('elementos/footer');
    }

   

    private function table($cars) {
        $tr = '';
        for ($i = 0; $i < count($cars); $i++) { //cria as linhas da tabela
            $tr .= "<tr>"
                    . "<td>{$cars[$i]->id}</td>"
                    . "<td>{$cars[$i]->nome}</td>"
                    . "<td>{$cars[$i]->tipo}</td>"
                    . "<td>{$cars[$i]->marca}</td>"
                    . "<td>{$cars[$i]->cor}</td>"
                    . "</tr>";
        }
        //Cria cabecalho da tabela 
        $table = "<table class='table table-bordered'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Cor</th>
                    </tr>
                    </thead>
                    <tbody>
                    $tr
                    </tbody>
                    </table>";

        return $table;
    }
}
