<?php
    function apagarPastaEArquivos($pasta){
        $uploaddir = "../trabalhos/". $pasta ."";
        $dir_contents = scandir($uploaddir);
        if(is_dir($uploaddir)) {
            foreach($dir_contents as $content) {
                unlink($uploaddir.'/'.$content);
                rmdir($uploaddir);
            }
        }
    }
     $uploaddir = "../trabalhos/_teste";
        $dir_contents = scandir($uploaddir);
        if(is_dir($uploaddir)) {
            foreach($dir_contents as $content) {
                unlink($uploaddir.'/'.$content);
            }
            rmdir($uploaddir);
        }
    
?>