<?php



require('fpdf/fpdf.php');


class PDF extends FPDF

{


function Header()
{
    // Logo
    $this->Image('Imagenes/logohome.png',20,10,80);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Movernos a la derecha
    $this->Cell(110);
    // Título
    $this->SetTextColor(255,127,39);
    $this->Cell(30,35,'LO MEJOR EN GOURMET',0,0,'C');
    $this->Ln(25);
    $this->SetTextColor(0,0,0);
    $this->Cell(0,0,'________________________________________________________',0,0,'C');
    $this->SetFont('Arial','',15);
    $this->Ln(15);
    $this->Cell(0,0,'Historial de Platos Pedidos',0,0,'C');
    
    $this->Ln(17);

    $this->SetFont('Arial','',10);
    date_default_timezone_set('America/Caracas'); 
    $this->Cell(80,0,utf8_decode("Día: ").date("d.m.Y")."  Hora: ".date("g:i:s a"),0,0,'C');
    $this->Ln(3);
    // Salto de línea
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetFont('Arial','I',8);
    $this->SetTextColor(0,0,0);
    $this->SetY(-20);
    $this->Cell(0,0,'________________________________________________________________________',0,0,'C');
    $this->SetY(-15);
    // Arial italic 8
 
    // Número de página
    $this->Cell(0,10,utf8_decode('Página').$this->PageNo().'/{nb}',0,0,'C');
}
function FancyTable($header)
{
    // Colores, ancho de línea y fuente en negrita
    
    $this->SetFillColor(255,100,0);
    //$this->SetFillColor(128,0,0);
    $this->SetTextColor(255);
    //$this->SetDrawColor(255,255,255);
    $this->SetLineWidth(.3);
    $this->SetFont('Arial','B',11);
    // Cabecera
    $w = array(50,30,30,30,30);
    $this->SetX(20);

    for($i=0;$i<count($header);$i++)
        $this->Cell($w[$i],7,$header[$i],1,0,'C',true);
    
    $this->Ln();
    // Restauración de colores y fuentes
    $this->SetX(20);
    $this->Cell(array_sum($w),0,'','T');
    $this->SetFillColor(220,220,220);
    $this->SetTextColor(0);
    $this->SetFont('');
    // Datos
    $fill = false;
    $i=0;
    $k=0;
     

    for($k=0;$k<16;$k++)
    {
        $this->SetFont('Arial','',9);
        $this->SetXY(20,77+($i*10));
        $this->Multicell($w[0],5,"Pasta a la bolognesa\n ",'LR','C',$fill);
        
        $this->SetXY(70,77+($i*10));
        $this->Multicell($w[1],5,"08\n ",'LR','C',$fill);
        
        $this->SetXY(100,77+($i*10));
        $this->Multicell($w[2],5,"08/03/2013\n ",'LR','C',$fill);
        
        $this->SetXY(130,77+($i*10));
        $this->Multicell($w[3],5,"14753\n ",'LR','C',$fill);
        
        $this->SetXY(160,77+($i*10));
        $this->Multicell($w[4],5,"10\n ",'LR','C',$fill);
        
        
        
        $fill = !$fill;
        $i++;

        if($k==17){
            $this->SetX(20);
            $this->Cell(array_sum($w),0,'','T');
            $i=0;
            $this->AddPage();
            $this->Ln();
            $this->SetX(20);
            $this->SetFillColor(255,100,0);
           
            $this->SetTextColor(255);
            
            $this->SetLineWidth(.3);
            $this->SetFont('Arial','B',11);
            for($j=0;$j<count($header);$j++)
                $this->Cell($w[$j],7,$header[$j],1,0,'C',true);

            $this->SetFillColor(210,210,210);
            $this->SetTextColor(0);
            $this->SetFont('');
        }
    }
    
    // Línea de cierre
    $this->SetX(20);
    $this->Cell(array_sum($w),0,'','T');
    
    $this->SetFont('Arial','',10);
    $this->Ln(10);
    $this->Cell(50,0,'Total de Platos: 16',0,0,'C');
}

}
// Creación del objeto de la clase heredada
$pdf = new PDF();

$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);

// Títulos de las columnas
$header = array('Plato',utf8_decode('Día'),'Fecha','Orden #','Cantidad');
// Carga de datos
$pdf->FancyTable($header);
$pdf->Output();
//------------------------- 

?>