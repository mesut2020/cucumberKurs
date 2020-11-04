package ApachePOI;

import org.apache.poi.ss.usermodel.*;

import java.io.*;


public class _07_WriteInTheExcel {
    public static void main(String[] args) throws IOException {

        String path = "src/main/resources/WriteInTheExcelFile.xlsx";

        // Dosya okuma islemleri...
        FileInputStream inputStream = new FileInputStream(path);
        Workbook workbook = WorkbookFactory.create(inputStream);
        Sheet sheet = workbook.getSheet("Sheet1");

        //Hafizada yazma islemleri
        Row row = sheet.createRow(0);
        Cell cell = row.createCell(0);

        cell.setCellValue("Ilk Excel sayfasina yazi yazdirma");
        inputStream.close(); // okuma islemi kapatildi... Ayni anda hem yazma hem okuma yapilamiyor...

        // Yazma islemi icin exceli yazma modunda aciyorum
        FileOutputStream outputStream = new FileOutputStream(path);
        workbook.write(outputStream);
        outputStream.close(); // yazma islemi kapatildi...


    }
}
