package ApachePOI;

import org.apache.poi.ss.usermodel.*;

import java.io.FileInputStream;
import java.io.IOException;

public class _04_ApachiPOIStart {
    public static void main(String[] args) throws IOException {

        String path = "src/main/resources/ApacheExcel1.xlsx";
        FileInputStream inputStream = new FileInputStream(path);
        Workbook workbook = WorkbookFactory.create(inputStream);
        Sheet sheet = workbook.getSheet("Sheet1");

        int rowCount = sheet.getPhysicalNumberOfRows();
        System.out.println("Number of rows = " + rowCount);

        Row row=sheet.getRow(0);

        for(int i=0;i<rowCount ;i++) // satır sayısı kadar dönecek
        {
             row=sheet.getRow(i); // i.Satır alındı
            int cellCount = row.getPhysicalNumberOfCells(); // bu satırdaki toplam hücre sayısı alındı.

            for(int j=0;j< cellCount;j++ ) // i.satırdaki hucre sayısı kadar dönecek
            {
                Cell cell = row.getCell(j); // bu satırdaki sıradaki hücreyi aldım.
                System.out.printf("%-10s%1s",cell," ");
            }
            System.out.println();
        }



    }

}
