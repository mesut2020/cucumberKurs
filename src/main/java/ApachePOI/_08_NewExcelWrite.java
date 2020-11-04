package ApachePOI;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.OutputType;

import java.io.*;

public class _08_NewExcelWrite {

    public static void main(String[] args) throws IOException {

        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("Ilk Excel Sayfam");
        //XSSFSheet sheet2 = workbook.createSheet("Ikincici Excel Sayfam");

        Row row = sheet.createRow(0);
        Cell cell = row.createCell(0);

        cell.setCellValue("Ilk Excel sayfasini olusturup, ilk hucreye bilgi girdik.");

        FileOutputStream outputStream = new FileOutputStream("src/main/resources/newExcel.xlsx");
        workbook.write(outputStream); // icine hafizadaki bilgileri yazdik...
        workbook.close(); // hafizayi bosalttik...
        outputStream.close(); // yazma islemi kapatildi...


    }
}
