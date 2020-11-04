package ApachePOI;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class _09_Task1_Odev1 {
    // Carpim tablosunu excel e yazdiriniz

    public static void main(String[] args) throws IOException {
        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("Carpim Tablosu");

        Row row = sheet.createRow(0);
        Cell cell = row.createCell(0);
        int count = 0;


        for (int i = 1; i < 11; i++) {
            row = sheet.createRow(i-1);
            for (int j = 1; j < 11; j++) {

                cell = row.createCell(0+count);
                cell.setCellValue(j);

                cell = row.createCell(1+count);
                cell.setCellValue("x");

                cell = row.createCell(2+count);
                cell.setCellValue(i);

                cell = row.createCell(3+count);
                cell.setCellValue(" = ");

                cell = row.createCell(4+count);
                cell.setCellValue(j * i);

                count+=6;
            }
            count=0;
        }


        FileOutputStream outputStream = new FileOutputStream("src/main/resources/carpimTablosu1.xlsx");
        workbook.write(outputStream); // icine hafizadaki bilgileri yazdik...
        workbook.close(); // hafizayi bosalttik...
        outputStream.close(); // yazma islemi kapatildi...
    }
}
