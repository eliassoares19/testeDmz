<html>
    <head>
        <title>TCC Elias Soares</title>
    </head>
    <body>
        <div class="container-fluid">
            <!--cabeçalho-->
            <div class="row">
                <div class="col-md-12" style="background-color: #00A775; 
                     border: #000080 solid 1px; 
                     height: 100px;">
                   
                    
                </div>
            </div>

            <!--Tabela de ramais-->
                <div id="tabela">
                    <?php
                        echo $tabela;
                    ?>
                </div>     
        </div>
        <script type="text/javascript">var path = '<?php echo base_url(); ?>'</script> 
        <script src="<?php echo base_url();?>js/funcoes_jquery.js"></script>
        <script src="<?php echo base_url();?>js/jquery-1.11.3.min.js"></script>
    </body>
</html>


