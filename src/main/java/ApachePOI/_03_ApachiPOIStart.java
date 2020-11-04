package ApachePOI;

import org.apache.poi.ss.usermodel.*;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class _03_ApachiPOIStart {
    public static void main(String[] args) throws IOException {

        String path = "src/main/resources/ApacheExcel1.xlsx";
        // Dosyayi okumaya actim...
        FileInputStream dosyaOkumaYolu = new FileInputStream(path);

        // Bunun uzerinden WORKBOOK u aliyorum
        Workbook workbook = WorkbookFactory.create(dosyaOkumaYolu);

        // Istedigim isimdeki SHEET i aliyorum
        // Sheet sheet = workbook.getSheetAt(0);
        Sheet sheet = workbook.getSheet("Sheet1");

        // Istenilern satiri (row) alicagiz...
        Row row = sheet.getRow(0);

        // Istenen satirdaki istenen hucre aliniyor
        Cell cell = row.getCell(0);

        System.out.println( cell);


        for (int i = 0; i < 4; i++) {
            row=sheet.getRow(i);
            for (int j = 0; j < 4; j++) {
                if(row.getCell(j)!=null)
                System.out.print(row.getCell(j)+" ");
            }
            System.out.println();
        }



    }

}
